import { stations } from './stations.js';
import { playRandomDialSound } from './sound-manager.js';
import { updatePlayingStatus, updateNowPlaying, getCurrentStationButton, getActiveCategory } from './ui.js';

const audioPlayer = document.getElementById('audio-player');
let hls = null;
let isPausedByUser = false;

function playStationStream(url) {
    if (hls) {
        hls.destroy();
        hls = null;
    }

    if (url.includes('.m3u8')) {
        if (Hls.isSupported()) {
            hls = new Hls();
            hls.loadSource(url);
            hls.attachMedia(audioPlayer);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                audioPlayer.play().catch(e => console.error("Error on play after manifest parsed", e));
            });
            hls.on(Hls.Events.ERROR, (event, data) => {
                if (data.fatal) {
                    console.error('Error fatal de HLS:', data);
                    updateNowPlaying('Error', 'STREAM NO DISPONIBLE');
                }
            });
        } else if (audioPlayer.canPlayType('application/vnd.apple.mpegurl')) {
            audioPlayer.src = url;
            audioPlayer.addEventListener('loadedmetadata', () => {
                audioPlayer.play();
            });
        } else {
            console.error("HLS no es soportado en este navegador.");
            updateNowPlaying('Error', 'FORMATO NO SOPORTADO');
        }
    } else {
        audioPlayer.src = url;
        audioPlayer.play().catch(error => {
            console.error("Error al reproducir la radio:", error);
            updateNowPlaying('Error', 'NO SE PUEDE REPRODUCIR');
        });
    }
}

export function playStation(button) {
    const url = button.dataset.url;
    const name = button.dataset.name;
    const currentStationBtn = getCurrentStationButton();

    if (currentStationBtn === button && !audioPlayer.paused) {
        isPausedByUser = true;
        audioPlayer.pause();
        updateNowPlaying('Pausado', name.toUpperCase());
        updatePlayingStatus(null);
        return;
    }
    
    isPausedByUser = false;
    playRandomDialSound();
    
    updateNowPlaying("Conectando...", name.toUpperCase());
    playStationStream(url);
    updatePlayingStatus(button);

    if ('mediaSession' in navigator) {
        const activeCategory = getActiveCategory().textContent;
        navigator.mediaSession.metadata = new MediaMetadata({
            title: name,
            artist: "Radio FM",
            album: activeCategory,
            artwork: [{ src: 'radio_icon.png', sizes: '512x512', type: 'image/png' }]
        });
    }
}

function getShuffledAllStations() {
    const allStations = [];
    Object.keys(stations).forEach(category => {
        stations[category].forEach(station => {
            allStations.push({ ...station, category });
        });
    });
    return allStations.sort(() => Math.random() - 0.5);
}

function playAdjacentStation(direction) {
    const shuffledStations = getShuffledAllStations();
    const currentStationBtn = getCurrentStationButton();
    let nextStation;

    if (currentStationBtn) {
        const currentStationName = currentStationBtn.dataset.name;
        const currentIndex = shuffledStations.findIndex(s => s.name === currentStationName);
        if (currentIndex !== -1) {
            const nextIndex = (currentIndex + direction + shuffledStations.length) % shuffledStations.length;
            nextStation = shuffledStations[nextIndex];
        }
    }

    if (!nextStation) {
        nextStation = shuffledStations[0];
    }
    
    const { category, name } = nextStation;
    const categoryBtn = document.querySelector(`.category-btn[data-category="${category}"]`);
    if (categoryBtn) {
        document.querySelector('.category-btn.active').classList.remove('active');
        categoryBtn.classList.add('active');
        const event = new CustomEvent('category-change', { detail: { category } });
        document.dispatchEvent(event);
    }
    
    setTimeout(() => {
        const stationBtn = Array.from(document.querySelectorAll('.station-btn'))
            .find(btn => btn.dataset.name === name);
        if (stationBtn) {
            playStation(stationBtn);
        }
    }, 50);
}

export const playNextStation = () => playAdjacentStation(1);
export const playPreviousStation = () => playAdjacentStation(-1);

if ('mediaSession' in navigator) {
    navigator.mediaSession.setActionHandler('play', () => {
        if (audioPlayer.paused && getCurrentStationButton()) {
            isPausedByUser = false;
            audioPlayer.play();
        }
    });

    navigator.mediaSession.setActionHandler('pause', () => {
        if (!audioPlayer.paused) {
            isPausedByUser = true;
            audioPlayer.pause();
        }
    });

    navigator.mediaSession.setActionHandler('previoustrack', () => {
        playRandomDialSound();
        playPreviousStation();
    });

    navigator.mediaSession.setActionHandler('nexttrack', () => {
        playRandomDialSound();
        playNextStation();
    });

    audioPlayer.addEventListener('play', () => {
        navigator.mediaSession.playbackState = 'playing';
        updatePlayingStatus(getCurrentStationButton());
        updateNowPlaying("En directo", getCurrentStationButton()?.dataset.name.toUpperCase());
    });
    
    audioPlayer.addEventListener('pause', () => {
        navigator.mediaSession.playbackState = 'paused';
        const currentButton = getCurrentStationButton();
        if(currentButton) currentButton.classList.remove('playing');
        if (!isPausedByUser) {
            updateNowPlaying('Stream interrumpido', currentButton?.dataset.name.toUpperCase());
        } else {
            updateNowPlaying('Pausado', currentButton?.dataset.name.toUpperCase());
        }
    });
}
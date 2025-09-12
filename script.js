const stations = {
    noticias: [
        { name: "RNE 1", url: "https://rnelivestream.rtve.es/rne1/ast/48/seglist.m3u8" },
        { name: "Cadena SER", url: "https://25253.live.streamtheworld.com/SER_ASO_ASTURIASAAC.aac?gdpr=1&gdpr_consent=CQWPeQAQWPeQAAHABBENB3FsAP_gAAAAAAAALdNR_G__bXlr-b736ftkeYxf9_hr7sQxBgbJk24FzLvW_JwW32E7NAzatqYKmRIAu3TBIQNlHJDURVCgKIgVrzDMaEyUoTtKJ6BkiFMRY2JYCFxvm4tjeQCY5vr991d9mR-N7dr83dzyy6hnv3a9_-S1WJCdIYetDfv8ZBKT-9IE9_x8v4v4_N7pE2-eS1n_tGvp6D9-Yvv_dB399_baffzPn__rl_e_X__f_n37v943X77_____f_8AAAAxKADAAEFuikAGAAILdDoAMAAQW6IQAYAAgt0EgAwABBbotABgACC3QAAA.f_wAAAAAAAAA&dist=cadenaser-web-tod-permanente&ppid=04744714594863075680346150165867469177&pname=TDSdk&pversion=2.9&swm=false&tdsdk=js-2.9&banners=none&burst-time=15&sbmid=83258aa1-cf0e-4bd8-97ca-eec45303f3c0" },
        { name: "Onda Cero", url: "https://atres-live.ondacero.es/live/delegaciones/oc/oviedo/bitrate_1.m3u8" },
        { name: "esRadio", url: "https://libertaddigital-radio-live1.flumotion.com/libertaddigital/ld-live1-low.mp3" },
        { name: "RNE 5", url: "https://f131.rndfnk.com/star/crtve/rne5/ast/aac/128/stream.aac?cid=01GEP5NMGE0GPSP2ST3FT47FGD&sid=31MvAPpnLuTMCkLGBOVvNSV32lE&token=ReaYBE_tHy1K9cSwCJEH7Uz-oBXR_CAiR0i7Sn5mZDk&tvf=sfsHnhZSXBhmMTMxLnJuZGZuay5jb20" },
        { name: "COPE", url: "https://flucast07-h-cloud.flumotion.com/cope/net1.mp3" },
        { name: "CNN en Español", url: "https://tunein.cdnstream1.com/3517_96.aac/playlist.m3u8?listeningSessionID=6872e18f0185c672_1780498_XI1R1n3n_NjYuODUuODguNTo4MA!!_0000001aGzU&downloadSessionID=0" },
        { name: "RPA", url: "https://cdn-rtpa.watchity.net/wct-3545e416-1a16-44b5-b0db-481136ecacc9/continuous/7be5c015-1da2-4927-a49b-8d232faa69be/radio/media_0.m3u8" },
    ],
    musica: [
        { name: "Los40 Classic", url: "https://27913.live.streamtheworld.com/LOS40_CLASSICAAC.aac" },
        { name: "Cadena Dial", url: "https://27953.live.streamtheworld.com/CADENADIALAAC.aac?csegid=2000&gdpr=1&gdpr_consent=CQVhVIAQVhVIAAHABBENB1FsAP_gAAAAAAAALaNR_G__bXlr-b736ftkeYxf9_hr7sQxBgbJk24FzLvW_JwW32E7NAzatqYKmRIAu3TBIQNlHJDURVCgKIgVrzDMaEyUoTtKJ6BkiFMRY2JYCFxvm4tjeQCY5vr991d9mR-N7dr83dzyy4hnv3a9_-S1WJCdIYetDfv8ZBKT-9IE9_x8v4v4_N7pE2-eS1n_tGvp6D9-Yvv_dB399_baffzPn__rl_e_X__f_n37v943X77_____f8AAAAxSADAAEFtB0AGAAILaBIAMAAQW0JQAYAAgtoQgAwABBbQtABgACC2g.f_wAAAAAAAAA&dist=cadenadial-web-tod-permanente&tdsdk=js-2.9&swm=true&pversion=2.9&banners=none&burst-time=15&sbmid=8316664f-2c43-48ea-e30e-2a38cb32f2a6" },
        { name: "Radio 3", url: "https://rtvelivestream.rtve.es/rtvesec/rne/rne_r3_main.m3u8?hdnts=exp%3D1748019982~hmac%3Dffbf70a32026039d9f142aa4795d54bc15955cc2dff0143efa60705f2dec0fb6&idasset=1712469" },
        { name: "La Jungla Radio", url: "https://streaming12.elitecomunicacion.es:8626/stream?type=.mp3" },
        { name: "Rock FM", url: "https://rockfm-cope.flumotion.com/chunks.m3u8" },
        { name: "Kiss FM", url: "https://bbkissfm.kissfmradio.cires21.com:8443/bbkissfm/mp3/icecast.audio?wmsAuthSign=c2VydmVyX3RpbWU9MDgvMDUvMjAyNSAwNzoyMzo1OSBQTSZoYXNoX3ZhbHVlPUN5cFNvMG9GU1NyT3JieTdIWG43dVE9PSZ2YWxpZG1pbnV0ZXM9MTQ0MCZpZD0zMDU0OTg3Mw==" },
        { name: "Cadena 100", url: "https://cadena100-cope-rrcast.flumotion.com/cope/cadena100-low.mp3" },
        { name: "Radiolé", url: "https://22543.live.streamtheworld.com/RADIOLEAAC.aac?csegid=2000&gdpr=1&gdpr_consent=CQVkoEAQVkoEAAHABBENB1FsAP_gAAAAAAAALaNR_G__bXlr-b736ftkeYxf9_hr7sQxBgbJk24FzLvW_JwW32E7NAzatqYKmRIAu3TBIQNlHJDURVCgKIgVrzDMaEyUoTtKJ6BkiFMRY2JYCFxvm4tjeQCY5vr991d9mR-N7dr83dzyy4hnv3a9_-S1WJCdIYetDfv8ZBKT-9IE9_x8v4v4_N7pE2-eS1n_tGvp6D9-Yvv_dB399_baffzPn__rl_e_X__f_n37v943X77_____f8AAAAxKADAAEFtCkAGAAILaDoAMAAQW0IQAYAAgtoEgAwABBbQtABgACC2g.f_wAAAAAAAAA&dist=radioacktiva-web-tod-permanente&tdsdk=js-2.9&swm=true&pname=TDSdk&pversion=2.9&banners=none&burst-time=15&sbmid=3bfd3fed-6323-4f52-ddca-4d10c6fbe751" },
    ],
    generales: [
        { name: "Electronica (Hirschmilch Radio)", url: "https://hirschmilch.de:7501/electronic.mp3?ts=1754176686" },
        { name: "Alpha Boys School Radio (KInsgton, Jamaica)", url: "https://alphaboys-live.streamguys1.com/alphaboys.mp3" },
        { name: "Garage (Real Punk Radio)", url: "https://free.rcast.net/63875" },
        { name: "Psytrance (Hirschmilch Radio)", url: "https://hirschmilch.de:7001/psytrance.mp3" },
        { name: "Klassik Radio (DE)", url: "https://klassikr.streamabc.net/klr-krdnational-mp3-192-8877033" },
        { name: "Soul, Smooth, Jazz (Serenade Radio UK)", url: "https://rbx2.hnux.com/http://149.202.22.75:8284/;" },
        { name: "Core Radio", url: "https://coreradio.ru/radio" },
        { name: "Latin Mix Masters", url: "https://lmmradiocast.com/reggaetonradio" },
    ],
    libre: [
        { name: "Radio Vallekas (107.5 FM)", url: "https://radio.radiobot.org/listen/rvk/rvk.mp3" },
        { name: "Radio Topo (Zaragoza 101.8 FM)", url: "https://radiobot.radioslibres.info/listen/radio_topo/radio96.mp3" },
        { name: "Radio Klara (València 104.4 FM)", url: "https://cervera.eldialdigital.com:21111/stream" },
        { name: "Radio Kras (Xixón 105.0 FM)", url: "http://giss.tv:8000/RadioKras.mp3" },
        { name: "Radio Espiritrompa (Alto Aragón 102.2 FM)", url: "https://radiobot.radioslibres.info/listen/radio_espiritrompa/radio.mp3?refresh=1754143322256" },
        { name: "Radio QK (Uviéu 107.2 FM)", url: "https://icecast.radioqk.org:8443/radioqk_master.mp3" },
        { name: "Radio Guiniguada (Las Palmas de Gran Canaria 89.4 FM)", url: "https://streamtotal.net/proxy/guiniguada/;" },
        { name: "Radio Almaina (Ganada 88.5 FM)", url: "https://radiobot.radioslibres.info/listen/radio_almaina/radio.mp3" },
    ],
};

const categorySelector = document.getElementById('category-selector');
const stationGrid = document.getElementById('station-grid');
const audioPlayer = document.getElementById('audio-player');
const playerStatusEl = document.getElementById('player-status');
const stationNameEl = document.getElementById('station-name');

let audioContext = null;
const dialSounds = [
    'dial_sound_1.mp3',
    'dial_sound_2.mp3',
    'dial_sound_3.mp3',
    'dial_sound_4.mp3',
    'dial_sound_5.mp3',
    'dial_sound_6.mp3',
    'dial_sound_7.mp3',
    'dial_sound_8.mp3',
    'dial_sound_9.mp3'
];
const soundBuffers = {};

async function loadSound(url) {
    if (!audioContext) {
        try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.error('Web Audio API is not supported in this browser');
            return;
        }
    }
    if (soundBuffers[url]) {
        return soundBuffers[url];
    }
    try {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
        soundBuffers[url] = audioBuffer;
        return audioBuffer;
    } catch (error) {
        console.error(`Error loading sound: ${url}`, error);
    }
}

function playSound(buffer) {
    if (!audioContext || !buffer) return;
    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContext.destination);
    source.start(0);
}

async function playRandomDialSound() {
    const randomSoundUrl = dialSounds[Math.floor(Math.random() * dialSounds.length)];
    const buffer = await loadSound(randomSoundUrl);
    playSound(buffer);
}

let soundsPreloaded = false;
function preloadSounds() {
    if (soundsPreloaded) return;
    dialSounds.forEach(loadSound);
    soundsPreloaded = true;
}

let currentStationBtn = null;
let hls = null;
let metadataInterval = null;
let lastTrackInfo = '';
let currentCategoryIndex = 0;
let currentStationIndex = 0;
const categories = ['noticias', 'musica', 'generales', 'libre'];

function getNextCategory(currentCat) {
    const currentIndex = categories.indexOf(currentCat);
    const nextIndex = (currentIndex + 1) % categories.length;
    return categories[nextIndex];
}

function getPreviousCategory(currentCat) {
    const currentIndex = categories.indexOf(currentCat);
    const prevIndex = currentIndex === 0 ? categories.length - 1 : currentIndex - 1;
    return categories[prevIndex];
}

function playNextStation() {
    const activeCategory = document.querySelector('.category-btn.active').dataset.category;
    const allStations = [];
    
    // Collect all stations from all categories
    Object.keys(stations).forEach(category => {
        stations[category].forEach(station => {
            allStations.push({...station, category});
        });
    });
    
    // Shuffle array for random order
    const shuffledStations = allStations.sort(() => Math.random() - 0.5);
    
    // Find current station index
    const currentStation = currentStationBtn ? {
        name: currentStationBtn.dataset.name,
        url: currentStationBtn.dataset.url,
        category: activeCategory
    } : null;
    
    let nextIndex = 0;
    if (currentStation) {
        const currentIndex = shuffledStations.findIndex(s => 
            s.name === currentStation.name && s.url === currentStation.url
        );
        nextIndex = (currentIndex + 1) % shuffledStations.length;
    }
    
    const nextStation = shuffledStations[nextIndex];
    
    // Switch to the category of the next station
    document.querySelector('.category-btn.active').classList.remove('active');
    document.querySelector(`[data-category="${nextStation.category}"]`).classList.add('active');
    
    renderStations(nextStation.category);
    
    // Find and play the station
    setTimeout(() => {
        const stationBtn = Array.from(document.querySelectorAll('.station-btn'))
            .find(btn => btn.dataset.name === nextStation.name);
        if (stationBtn) {
            playStation(stationBtn);
        }
    }, 50);
}

function playPreviousStation() {
    const activeCategory = document.querySelector('.category-btn.active').dataset.category;
    const allStations = [];
    
    // Collect all stations from all categories
    Object.keys(stations).forEach(category => {
        stations[category].forEach(station => {
            allStations.push({...station, category});
        });
    });
    
    // Shuffle array for random order
    const shuffledStations = allStations.sort(() => Math.random() - 0.5);
    
    // Find current station index
    const currentStation = currentStationBtn ? {
        name: currentStationBtn.dataset.name,
        url: currentStationBtn.dataset.url,
        category: activeCategory
    } : null;
    
    let prevIndex = shuffledStations.length - 1;
    if (currentStation) {
        const currentIndex = shuffledStations.findIndex(s => 
            s.name === currentStation.name && s.url === currentStation.url
        );
        prevIndex = currentIndex === 0 ? shuffledStations.length - 1 : currentIndex - 1;
    }
    
    const prevStation = shuffledStations[prevIndex];
    
    // Switch to the category of the previous station
    document.querySelector('.category-btn.active').classList.remove('active');
    document.querySelector(`[data-category="${prevStation.category}"]`).classList.add('active');
    
    renderStations(prevStation.category);
    
    // Find and play the station
    setTimeout(() => {
        const stationBtn = Array.from(document.querySelectorAll('.station-btn'))
            .find(btn => btn.dataset.name === prevStation.name);
        if (stationBtn) {
            playStation(stationBtn);
        }
    }, 50);
}

// Add event listeners for navigation buttons
document.getElementById('next-station').addEventListener('click', playNextStation);
document.getElementById('prev-station').addEventListener('click', playPreviousStation);

function renderStations(category) {
    stationGrid.innerHTML = '';
    stations[category].forEach(station => {
        const button = document.createElement('button');
        button.className = 'station-btn';
        button.textContent = station.name;
        button.dataset.url = station.url;
        button.dataset.name = station.name;
        stationGrid.appendChild(button);
    });
}

function updateRDSMetadata() {
    if (!audioPlayer.src || audioPlayer.paused) return;
    
    // Try to fetch metadata from various sources
    const url = audioPlayer.src;
    
    // For icecast/shoutcast streams
    if (url.includes('icecast') || url.includes('shoutcast') || url.includes('.mp3') || url.includes('.aac')) {
        // Fetch metadata from icecast/shoutcast
        const metadataUrl = url.replace(/\/[^/]*$/, '/status-json.xsl');
        
        fetch(metadataUrl)
            .then(response => response.json())
            .then(data => {
                if (data && data.icestats && data.icestats.source) {
                    const source = Array.isArray(data.icestats.source) ? data.icestats.source[0] : data.icestats.source;
                    const trackInfo = source.description || source.title || source.songtitle || source.genre || 'En directo';
                    updateTrackInfo(trackInfo);
                }
            })
            .catch(() => {
                // Fallback to basic metadata
                updateTrackInfo('En directo');
            });
    }
    // For HLS streams
    else if (url.includes('.m3u8')) {
        // HLS metadata is limited, use station name
        const currentStation = stations[currentStationBtn.dataset.category]?.find(s => s.url === url);
        const trackInfo = currentStation?.description || 'En directo';
        updateTrackInfo(trackInfo);
    }
    else {
        // Default fallback
        updateTrackInfo('En directo');
    }
}

function updateTrackInfo(info) {
    if (info && info !== lastTrackInfo) {
        lastTrackInfo = info;
        playerStatusEl.textContent = info;
        playerStatusEl.classList.add('rds-update');
        setTimeout(() => playerStatusEl.classList.remove('rds-update'), 1000);
    }
}

function startRDSUpdates() {
    if (metadataInterval) clearInterval(metadataInterval);
    metadataInterval = setInterval(updateRDSMetadata, 5000);
}

function stopRDSUpdates() {
    if (metadataInterval) {
        clearInterval(metadataInterval);
        metadataInterval = null;
    }
}

function playStation(button) {
    const url = button.dataset.url;
    const name = button.dataset.name;
    
    // If clicking the same station that is already playing, pause it.
    if (currentStationBtn === button && !audioPlayer.paused) {
        audioPlayer.pause();
        playerStatusEl.textContent = 'Selecciona una emisora';
        stationNameEl.textContent = '';
        button.classList.remove('playing');
        currentStationBtn = null;
        stopRDSUpdates();
        return;
    }

    // Play dial sound on station change
    playRandomDialSound();

    if (currentStationBtn) {
        currentStationBtn.classList.remove('playing');
    }

    if (hls) {
        hls.destroy();
        hls = null;
    }

    stopRDSUpdates();

    // Reset metadata display
    playerStatusEl.textContent = "Conectando...";
    stationNameEl.textContent = name.toUpperCase();
    lastTrackInfo = '';

    // Handle metadata updates
    audioPlayer.addEventListener('loadedmetadata', () => {
        playerStatusEl.textContent = "En directo";
        startRDSUpdates();
    });

    audioPlayer.addEventListener('loadstart', () => {
        playerStatusEl.textContent = "Conectando...";
    });

    // Handle track changes
    audioPlayer.addEventListener('play', () => {
        startRDSUpdates();
    });

    audioPlayer.addEventListener('pause', () => {
        stopRDSUpdates();
    });

    if (url.includes('.m3u8')) {
        if (Hls.isSupported()) {
            hls = new Hls();
            hls.loadSource(url);
            hls.attachMedia(audioPlayer);
            hls.on(Hls.Events.MANIFEST_PARSED, function () {
                audioPlayer.play();
            });
            hls.on(Hls.Events.ERROR, function (event, data) {
                 if (data.fatal) {
                    console.error('Error fatal de HLS:', data);
                    playerStatusEl.textContent = 'Error';
                    stationNameEl.textContent = 'STREAM NO DISPONIBLE';
                 }
            });
        } else if (audioPlayer.canPlayType('application/vnd.apple.mpegurl')) {
            // Native HLS support (e.g., Safari)
            audioPlayer.src = url;
            audioPlayer.play();
        } else {
            console.error("HLS no es soportado en este navegador.");
            playerStatusEl.textContent = 'Error';
            stationNameEl.textContent = 'FORMATO NO SOPORTADO';
            return;
        }
    } else {
        audioPlayer.src = url;
        audioPlayer.play().catch(error => {
            console.error("Error al reproducir la radio:", error);
            playerStatusEl.textContent = 'Error';
            stationNameEl.textContent = 'NO SE PUEDE REPRODUCIR';
        });
    }
    
    button.classList.add('playing');
    currentStationBtn = button;
}

categorySelector.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        document.querySelector('.category-btn.active').classList.remove('active');
        e.target.classList.add('active');
        const category = e.target.dataset.category;
        renderStations(category);
    }
});

stationGrid.addEventListener('click', (e) => {
    const button = e.target.closest('.station-btn');
    if (button) {
        preloadSounds(); // Preload sounds on first interaction
        playStation(button);
    }
});

// Load initial category
document.addEventListener('DOMContentLoaded', () => {
    renderStations('noticias');
});
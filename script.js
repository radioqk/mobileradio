const stations = {
    noticias: [
        { name: "RNE 1", url: "https://rtvelivestream.rtve.es/rtvesec/rne/rne_r1_main.m3u8?hdnts=exp%3D1748019895~hmac%3D2a1afc7266d782a7233dd67867a44a14096cdab1a0cb35e8cad6e4989ee8e99c&idasset=1712486" },
        { name: "Cadena SER", url: "https://27943.live.streamtheworld.com/CADENASERAAC_SC" },
        { name: "Onda Cero", url: "https://atres-live.ondacero.es/live/delegaciones/oc/oviedo/bitrate_1.m3u8" },
        { name: "esRadio", url: "https://libertaddigital-radio-live1.flumotion.com/libertaddigital/ld-live1-low.mp3" },
        { name: "RNE 5", url: "https://rtvelivestream.rtve.es/rtvesec/rne/rne_r5_madrid_main.m3u8?hdnts=exp%3D1748020449~hmac%3D7b9550393e06ce9bf76c1e185822f0d9c6e22bb078b962928156dca70c1d70e5&idasset=1712404" },
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
        { name: "Radio QK (Uviéu 107.2 FM)", url: "http://212.231.231.169:8000/radioqk_master.mp3" },
        { name: "Radio Guiniguada (Las Palmas de Gran Canaria 89.4 FM)", url: "https://streamtotal.net/proxy/guiniguada/;" },
        { name: "Radio Almaina (Ganada 88.5 FM)", url: "https://radiobot.radioslibres.info/listen/radio_almaina/radio.mp3" },
    ],
};

const categorySelector = document.getElementById('category-selector');
const stationGrid = document.getElementById('station-grid');
const audioPlayer = document.getElementById('audio-player');
const playerStatusEl = document.getElementById('player-status');
const stationNameEl = document.getElementById('station-name');

const stationInfoFormat = "{description}";

const fallbackText = "Transmisión en directo";

const enableMetadataExtraction = true;

const metadataUpdateDelay = 5000;

const showBitrate = true;

const extraMetadataFormat = "({listeners} oyentes • {quality})";

const includeTrackInfo = false;

const showStreamFormat = false;

const showListenerCount = true;

/* @tweakable Format for Media Session title. Use placeholders like {station}, {artist}, {title}. */
const mediaSessionTitleFormat = "{station}";
/* @tweakable Format for Media Session artist. Use placeholders like {program}, {artist}, {title}. */
const mediaSessionArtistFormat = "{description}";
/* @tweakable Format for Media Session album. Use placeholders like {category}, {genre}. */
const mediaSessionAlbumFormat = "{category}";

const allMetadataVariables = {
    station: 'Station name',
    artist: 'Current artist',
    title: 'Current song title',
    program: 'Program/show name',
    genre: 'Music genre',
    bitrate: 'Bitrate (kbps)',
    description: 'Station description',
    listeners: 'Number of current listeners',
    server_type: 'Streaming format (MP3/AAC/Ogg)',
    samplerate: 'Sample rate (Hz)',
    quality: 'Quality level (High/Medium/Low)'
};

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

function mediaButtonFeedback(buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
        button.classList.add('active-media');
        setTimeout(() => button.classList.remove('active-media'), 200);
    }
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
    const currentCategoryEl = document.querySelector('.category-btn.active');
    if(currentCategoryEl) currentCategoryEl.classList.remove('active');
    
    const nextCategoryEl = document.querySelector(`[data-category="${nextStation.category}"]`);
    if(nextCategoryEl) nextCategoryEl.classList.add('active');
    
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
    const currentCategoryEl = document.querySelector('.category-btn.active');
    if(currentCategoryEl) currentCategoryEl.classList.remove('active');
    
    const nextCategoryEl = document.querySelector(`[data-category="${prevStation.category}"]`);
    if(nextCategoryEl) nextCategoryEl.classList.add('active');
    
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
document.getElementById('next-station').addEventListener('click', () => {
    mediaButtonFeedback('next-station');
    playNextStation();
});
document.getElementById('prev-station').addEventListener('click', () => {
    mediaButtonFeedback('prev-station');
    playPreviousStation();
});

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

function updateMediaSession(metadata) {
    if (!('mediaSession' in navigator)) return;

    const activeCategoryEl = document.querySelector('.category-btn.active');
    const categoryName = activeCategoryEl ? activeCategoryEl.textContent : 'Radio';

    const fullMetadata = {
        station: stationNameEl.textContent || 'Radio',
        category: categoryName,
        ...metadata
    };

    const title = mediaSessionTitleFormat.replace(/{(\w+)}/g, (match, key) => fullMetadata[key] || '');
    const artist = mediaSessionArtistFormat.replace(/{(\w+)}/g, (match, key) => fullMetadata[key] || '');
    const album = mediaSessionAlbumFormat.replace(/{(\w+)}/g, (match, key) => fullMetadata[key] || '');
    
    navigator.mediaSession.metadata = new MediaMetadata({
        title: title || 'Radio',
        artist: artist || 'En Directo',
        album: album || 'FM',
        artwork: [
            { src: 'artwork-96.png', sizes: '96x96', type: 'image/png' },
            { src: 'artwork-128.png', sizes: '128x128', type: 'image/png' },
            { src: 'artwork-192.png', sizes: '192x192', type: 'image/png' },
            { src: 'artwork-256.png', sizes: '256x256', type: 'image/png' },
            { src: 'artwork-384.png', sizes: '384x384', type: 'image/png' },
            { src: 'artwork-512.png', sizes: '512x512', type: 'image/png' },
        ]
    });
}

function updateRDSMetadata() {
    if (!audioPlayer.src || audioPlayer.paused) return;
    
    const url = audioPlayer.src;
    const stationName = stationNameEl.textContent;
    
    if (!enableMetadataExtraction) {
        updateTrackInfo(stationInfoFormat
            .replace('{station}', stationName)
            .replace('{program}', fallbackText)
            .replace('{genre}', 'Variedad')
            .replace('{bitrate}', '')
            .replace('{description}', fallbackText)
            .replace('{artist}', '')
            .replace('{title}', '')
            .replace('{listeners}', '')
            .replace('{server_type}', '')
            .replace('{samplerate}', '')
            .replace('{quality}', ''));
        return;
    }
    
    // Custom metadata extraction based on station type
    if (url.includes('rtve.es')) {
        // For RTVE stations (RNE1, RNE3, RNE5)
        const program = 'Programa en directo';
        const genre = 'Variedad';
        const bitrate = '';
        const description = 'Programa en directo';
        const artist = '';
        const title = '';
        const listeners = '';
        const server_type = 'MP3';
        const samplerate = '';
        const quality = 'High';
        
        let displayText = stationInfoFormat
            .replace('{station}', stationName)
            .replace('{program}', program)
            .replace('{genre}', genre)
            .replace('{bitrate}', bitrate)
            .replace('{description}', description)
            .replace('{artist}', artist)
            .replace('{title}', title)
            .replace('{listeners}', listeners)
            .replace('{server_type}', server_type)
            .replace('{samplerate}', samplerate)
            .replace('{quality}', quality)
            .trim();
                    
        updateTrackInfo(displayText);
        updateMediaSession({ program, genre, bitrate, description, artist, title, listeners, server_type, samplerate, quality });
        
        const extraInfo = extraMetadataFormat
            .replace('{listeners}', listeners)
            .replace('{server_type}', showStreamFormat ? server_type : '')
            .replace('{samplerate}', samplerate)
            .replace('{quality}', quality)
            .replace(/\( • \)|\(\)/g, '')
            .trim();
            
        if (extraInfo && extraInfo !== '()' && extraInfo !== '') {
            displayText += ` ${extraInfo}`;
        }
        
        displayText = displayText.replace(/\s+/g, ' ').trim();
        updateTrackInfo(displayText);
    } else if (url.includes('ser')) {
        // Cadena SER
        const program = fallbackText;
        const genre = 'Variedad';
        const bitrate = '';
        const description = 'Programa en directo';
        const artist = '';
        const title = '';
        const listeners = '';
        const server_type = 'AAC';
        const samplerate = '';
        const quality = 'High';
        
        updateTrackInfo(stationInfoFormat
            .replace('{station}', stationName)
            .replace('{program}', program)
            .replace('{genre}', genre)
            .replace('{bitrate}', bitrate)
            .replace('{description}', description)
            .replace('{artist}', artist)
            .replace('{title}', title)
            .replace('{listeners}', listeners)
            .replace('{server_type}', server_type)
            .replace('{samplerate}', samplerate)
            .replace('{quality}', quality));
    } else if (url.includes('los40')) {
        // Los 40
        const program = 'Programación en directo';
        const genre = 'Variedad';
        const bitrate = '';
        const description = 'Programa en directo';
        
        updateTrackInfo(stationInfoFormat
            .replace('{station}', stationName)
            .replace('{program}', program)
            .replace('{genre}', genre)
            .replace('{bitrate}', bitrate)
            .replace('{description}', description));
    } else if (url.includes('cadenadial')) {
        // Cadena Dial
        const program = fallbackText;
        const genre = 'Variedad';
        const bitrate = '';
        const description = 'Señal en directo';
        
        updateTrackInfo(stationInfoFormat
            .replace('{station}', stationName)
            .replace('{program}', program)
            .replace('{genre}', genre)
            .replace('{bitrate}', bitrate)
            .replace('{description}', description));
    } else if (url.includes('ondacero')) {
        // Onda Cero
        const program = fallbackText;
        const genre = 'Variedad';
        const bitrate = '';
        const description = 'Programa en directo';
        
        updateTrackInfo(stationInfoFormat
            .replace('{station}', stationName)
            .replace('{program}', program)
            .replace('{genre}', genre)
            .replace('{bitrate}', bitrate)
            .replace('{description}', description));
    } else if (url.includes('rockfm')) {
        // Rock FM
        const program = fallbackText;
        const genre = 'Variedad';
        const bitrate = '';
        const description = 'Directo';
        
        updateTrackInfo(stationInfoFormat
            .replace('{station}', stationName)
            .replace('{program}', program)
            .replace('{genre}', genre)
            .replace('{bitrate}', bitrate)
            .replace('{description}', description));
    } else if (url.includes('icecast') || url.includes('shoutcast') || url.includes('.mp3') || url.includes('.aac')) {
        // Enhanced icecast/shoutcast metadata
        const metadataUrl = url.replace(/\/[^/]*$/, '/status-json.xsl');
        
        fetch(metadataUrl)
            .then(response => response.json())
            .then(data => {
                if (data && data.icestats && data.icestats.source) {
                    const source = Array.isArray(data.icestats.source) ? data.icestats.source[0] : data.icestats.source;
                    
                    // Extract artist and title from stream_title if available
                    let artist = '';
                    let title = '';
                    if (source.title) {
                        const parts = source.title.split(' - ');
                        if (parts.length > 1) {
                            artist = parts[0].trim();
                            title = parts.slice(1).join(' - ').trim();
                        } else {
                            title = parts[0].trim();
                        }
                    }
                    
                    const program = source.server_name || fallbackText;
                    const genre = source.genre || 'Variedad';
                    const bitrate = showBitrate && source.bitrate ? `${source.bitrate}kbps` : '';
                    const description = source.server_description || fallbackText;
                    const listeners = showListenerCount && source.listeners ? source.listeners : '';
                    const server_type = source.server_type || (url.includes('.mp3') ? 'MP3' : 'AAC');
                    const samplerate = source.samplerate || '';
                    const quality = source.bitrate ? (source.bitrate > 192 ? 'High' : source.bitrate > 96 ? 'Medium' : 'Low') : 'Auto';
                    
                    let displayText = stationInfoFormat
                        .replace('{station}', stationName)
                        .replace('{program}', program)
                        .replace('{genre}', genre)
                        .replace('{bitrate}', bitrate)
                        .replace('{description}', description)
                        .replace('{artist}', artist)
                        .replace('{title}', title)
                        .replace('{listeners}', listeners)
                        .replace('{server_type}', server_type)
                        .replace('{samplerate}', samplerate)
                        .replace('{quality}', quality)
                        .trim();
                    
                    if (includeTrackInfo && artist && title) {
                        displayText += ` - ${artist} - ${title}`;
                    }
                    
                    updateTrackInfo(displayText);
                    updateMediaSession({ program, genre, bitrate, description, artist, title, listeners, server_type, samplerate, quality });
                    
                    const extraInfo = extraMetadataFormat
                        .replace('{listeners}', listeners)
                        .replace('{server_type}', showStreamFormat ? server_type : '')
                        .replace('{samplerate}', samplerate)
                        .replace('{quality}', quality)
                        .replace(/\( • \)|\(\)/g, '')
                        .trim();
                        
                    if (extraInfo && extraInfo !== '()' && extraInfo !== '') {
                        displayText += ` ${extraInfo}`;
                    }
                    
                    displayText = displayText.replace(/\s+/g, ' ').trim();
                    updateTrackInfo(displayText);
                    return;
                }
            })
            .catch(() => {
                // Fallback with all variables available
                const metadata = {
                    program: fallbackText,
                    genre: 'Variedad',
                    bitrate: '',
                    description: fallbackText,
                    artist: '',
                    title: '',
                    listeners: '',
                    server_type: '',
                    samplerate: '',
                    quality: ''
                };
                updateTrackInfo(stationInfoFormat
                    .replace('{station}', stationName)
                    .replace(/{(\w+)}/g, (match, key) => metadata[key] || '')
                );
                updateMediaSession(metadata);
            });
    } else {
        // Default enhanced display
        const metadata = {
            program: fallbackText,
            genre: 'Variedad',
            bitrate: '',
            description: fallbackText
        };
        updateTrackInfo(stationInfoFormat
            .replace('{station}', stationName)
            .replace(/{(\w+)}/g, (match, key) => metadata[key] || '')
        );
        updateMediaSession(metadata);
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
    metadataInterval = setInterval(updateRDSMetadata, metadataUpdateDelay);
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
        if ('mediaSession' in navigator) {
            navigator.mediaSession.playbackState = "paused";
        }
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
    stationNameEl.textContent = name;
    lastTrackInfo = '';

    updateMediaSession({ description: 'Conectando...' });

    // Handle metadata updates
    audioPlayer.addEventListener('loadedmetadata', () => {
        playerStatusEl.textContent = "En directo";
        startRDSUpdates();
    });

    // Handle track changes
    audioPlayer.addEventListener('play', () => {
        startRDSUpdates();
        if ('mediaSession' in navigator) {
            navigator.mediaSession.playbackState = "playing";
        }
    });

    audioPlayer.addEventListener('pause', () => {
        stopRDSUpdates();
        if ('mediaSession' in navigator) {
            navigator.mediaSession.playbackState = "paused";
        }
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
                    stationNameEl.textContent = 'Stream no disponible';
                 }
            });
        } else if (audioPlayer.canPlayType('application/vnd.apple.mpegurl')) {
            // Native HLS support (e.g., Safari)
            audioPlayer.src = url;
            audioPlayer.play();
        } else {
            console.error("HLS no es soportado en este navegador.");
            playerStatusEl.textContent = 'Error';
            stationNameEl.textContent = 'Formato no soportado';
            return;
        }
    } else {
        audioPlayer.src = url;
        audioPlayer.play().catch(error => {
            console.error("Error al reproducir la radio:", error);
            playerStatusEl.textContent = 'Error';
            stationNameEl.textContent = 'No se puede reproducir';
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

if ('mediaSession' in navigator) {
    navigator.mediaSession.setActionHandler('play', () => {
        if (audioPlayer.paused && currentStationBtn) {
            playStation(currentStationBtn);
        }
    });
    navigator.mediaSession.setActionHandler('pause', () => {
        if (!audioPlayer.paused) {
            audioPlayer.pause();
        }
    });
    navigator.mediaSession.setActionHandler('previoustrack', () => {
        mediaButtonFeedback('prev-station');
        playPreviousStation();
    });
    navigator.mediaSession.setActionHandler('nexttrack', () => {
        mediaButtonFeedback('next-station');
        playNextStation();
    });
}
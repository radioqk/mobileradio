import { stations } from './stations.js';
import { playStation, playNextStation, playPreviousStation } from './player.js';
import { preloadSounds } from './sound-manager.js';

const categorySelector = document.getElementById('category-selector');
const stationGrid = document.getElementById('station-grid');
const playerStatusEl = document.getElementById('player-status');
const stationNameEl = document.getElementById('station-name');

let currentStationBtn = null;

export function getActiveCategory() {
    return document.querySelector('.category-btn.active');
}

export function getCurrentStationButton() {
    return currentStationBtn;
}

export function updateNowPlaying(status, stationName) {
    if (status) playerStatusEl.textContent = status;
    if (stationName) stationNameEl.textContent = stationName;
}

export function updatePlayingStatus(button) {
    if (currentStationBtn) {
        currentStationBtn.classList.remove('playing');
    }
    if (button) {
        button.classList.add('playing');
    }
    currentStationBtn = button;
}

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
    // If a station was playing in the previous category, ensure it's not marked as playing now.
    const playingBtn = stationGrid.querySelector('.playing');
    if (playingBtn && playingBtn !== currentStationBtn) {
        playingBtn.classList.remove('playing');
    }
    // Re-apply playing class if the current station is in the new category
    if (currentStationBtn && stations[category].some(s => s.name === currentStationBtn.dataset.name)) {
        const newBtn = Array.from(stationGrid.querySelectorAll('.station-btn')).find(b => b.dataset.name === currentStationBtn.dataset.name);
        if(newBtn) newBtn.classList.add('playing');
    }
}

export function initUI() {
    renderStations('noticias');

    categorySelector.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            getActiveCategory().classList.remove('active');
            e.target.classList.add('active');
            const category = e.target.dataset.category;
            renderStations(category);
        }
    });

    stationGrid.addEventListener('click', (e) => {
        const button = e.target.closest('.station-btn');
        if (button) {
            preloadSounds();
            playStation(button);
        }
    });

    document.getElementById('next-station').addEventListener('click', playNextStation);
    document.getElementById('prev-station').addEventListener('click', playPreviousStation);
    
    document.addEventListener('category-change', (e) => {
        const { category } = e.detail;
        renderStations(category);
    });
}
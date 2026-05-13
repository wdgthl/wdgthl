let count = 1;
// История для Undo
let history = [];
let historyIndex = -1;
let singleHistory = [];
let singleHistoryIndex = -1;

const moodboardImages = [
    "images/moodboard/1.jpg",
    "images/moodboard/2.jpg",
    "images/moodboard/3.jpg",
    "images/moodboard/4.jpg",
    "images/moodboard/5.jpg",
    "images/moodboard/6.jpg",
    "images/moodboard/7.jpg",
    "images/moodboard/8.jpg",
    "images/moodboard/9.jpg",
    "images/moodboard/10.jpg",
    "images/moodboard/11.jpg",
    "images/moodboard/12.jpg",
    "images/moodboard/13.jpg",
    "images/moodboard/14.jpg",
    "images/moodboard/15.jpg",
    "images/moodboard/16.jpg",
    "images/moodboard/17.jpg",
    "images/moodboard/18.jpg",
    "images/moodboard/19.jpg",
    "images/moodboard/20.jpg",
    "images/moodboard/21.jpg",
    "images/moodboard/22.jpg",
    "images/moodboard/23.jpg",
    "images/moodboard/24.jpg",
    "images/moodboard/25.jpg",
    "images/moodboard/26.jpg",
    "images/moodboard/27.jpg",
    "images/moodboard/28.jpg",
    "images/moodboard/29.jpg",
    "images/moodboard/30.jpg",
    "images/moodboard/31.jpg",
    "images/moodboard/32.jpg",
    "images/moodboard/33.jpg",
    "images/moodboard/34.jpg",
    "images/moodboard/35.jpg",
    "images/moodboard/36.jpg",
    "images/moodboard/37.jpg",
    "images/moodboard/38.jpg",
    "images/moodboard/39.jpg",
    "images/moodboard/40.jpg",
    "images/moodboard/41.jpg",
    "images/moodboard/42.jpg",
    "images/moodboard/43.jpg",
    "images/moodboard/44.jpg",
    "images/moodboard/45.jpg",
    "images/moodboard/46.jpg",
    "images/moodboard/47.jpg",
    "images/moodboard/48.jpg",
    "images/moodboard/49.jpg",
    "images/moodboard/50.jpg",
    "images/moodboard/51.jpg"
];

const styleImages = [
    "images/style/1.jpg",
    "images/style/2.jpg",
    "images/style/3.jpg",
    "images/style/4.jpg",
    "images/style/5.jpg",
    "images/style/6.jpg",
    "images/style/7.jpg",
    "images/style/8.jpg",
    "images/style/9.jpg",
    "images/style/10.jpg",
    "images/style/11.jpg",
    "images/style/12.jpg",
    "images/style/13.jpg",
    "images/style/14.jpg",
    "images/style/15.jpg",
    "images/style/16.jpg",
    "images/style/17.jpg",
    "images/style/18.jpg",
    "images/style/19.jpg",
    "images/style/20.jpg",
    "images/style/21.jpg",
    "images/style/22.jpg",
    "images/style/23.jpg",
    "images/style/24.jpg",
    "images/style/25.jpg",
    "images/style/26.jpg",
    "images/style/27.jpg",
    "images/style/28.jpg",
    "images/style/29.jpg",
    "images/style/30.jpg",
    "images/style/31.jpg",
    "images/style/32.jpg",
    "images/style/33.jpg",
    "images/style/34.jpg",
    "images/style/35.jpg",
    "images/style/36.jpg",
    "images/style/37.jpg",
    "images/style/38.jpg",
    "images/style/39.jpg",
    "images/style/40.jpg",
    "images/style/41.jpg",
    "images/style/42.jpg",
    "images/style/43.jpg",
    "images/style/44.jpg",
    "images/style/45.jpg",
    "images/style/46.jpg",
    "images/style/47.jpg",
    "images/style/48.jpg",
    "images/style/49.jpg",
    "images/style/50.jpg",
    "images/style/51.jpg"
];

const gothicImages = [
    "images/gothic/1.jpg",
    "images/gothic/2.jpg",
    "images/gothic/3.jpg",
    "images/gothic/4.jpg",
    "images/gothic/5.jpg",
    "images/gothic/6.jpg",
    "images/gothic/7.jpg",
    "images/gothic/8.jpg",
    "images/gothic/9.jpg",
    "images/gothic/10.jpg",
    "images/gothic/11.jpg",
    "images/gothic/12.jpg",
    "images/gothic/13.jpg",
    "images/gothic/14.jpg",
    "images/gothic/15.jpg",
    "images/gothic/16.jpg",
    "images/gothic/17.jpg",
    "images/gothic/18.jpg",
    "images/gothic/19.jpg",
    "images/gothic/20.jpg",
    "images/gothic/21.jpg",
    "images/gothic/22.jpg",
    "images/gothic/23.jpg",
    "images/gothic/24.jpg",
    "images/gothic/25.jpg",
    "images/gothic/26.jpg",
    "images/gothic/27.jpg",
    "images/gothic/28.jpg",
    "images/gothic/29.jpg",
    "images/gothic/30.jpg",
    "images/gothic/31.jpg",
    "images/gothic/32.jpg",
    "images/gothic/33.jpg",
    "images/gothic/34.jpg",
    "images/gothic/35.jpg",
    "images/gothic/36.jpg",
    "images/gothic/37.jpg",
    "images/gothic/38.jpg",
    "images/gothic/39.jpg",
    "images/gothic/40.jpg",
    "images/gothic/41.jpg",
    "images/gothic/42.jpg",
    "images/gothic/43.jpg",
    "images/gothic/44.jpg",
    "images/gothic/45.jpg",
    "images/gothic/46.jpg",
    "images/gothic/47.jpg",
    "images/gothic/48.jpg",
    "images/gothic/49.jpg",
    "images/gothic/50.jpg",
    "images/gothic/51.jpg"
];

function randomImage(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateImages() {
    // Сохраняем текущее состояние в историю
    const currentState = {
        moodboard: document.getElementById("moodboard-img").src,
        style: document.getElementById("style-img").src,
        gothic: document.getElementById("gothic-img").src
    };
    
    history = history.slice(0, historyIndex + 1);
    history.push(currentState);
    historyIndex = history.length - 1;
    
    // Ограничиваем историю 20 шагами
    if (history.length > 20) {
        history.shift();
        historyIndex--;
    }
    
    const cards = document.querySelectorAll('.card img');
    cards.forEach(img => img.classList.add('loading'));
    
    setTimeout(() => {
        document.getElementById("moodboard-img").src = randomImage(moodboardImages);
        document.getElementById("style-img").src = randomImage(styleImages);
        document.getElementById("gothic-img").src = randomImage(gothicImages);
    }, 200);
    
    setTimeout(() => {
        cards.forEach(img => img.classList.remove('loading'));
    }, 600);
    
    count++;
    document.getElementById("counter-value").textContent = count;
    
    localStorage.setItem('moodboard', document.getElementById("moodboard-img").src);
    localStorage.setItem('style', document.getElementById("style-img").src);
    localStorage.setItem('gothic', document.getElementById("gothic-img").src);
    localStorage.setItem('genCount', count);
    
    updateUndoButtons();
}

function loadSavedImages() {
    const savedMoodboard = localStorage.getItem('moodboard');
    const savedStyle = localStorage.getItem('style');
    const savedGothic = localStorage.getItem('gothic');
    const savedCount = localStorage.getItem('genCount');
    
    const cards = document.querySelectorAll('.card img');
    
    if (savedMoodboard) {
        cards.forEach(img => img.classList.add('loading'));
        
        setTimeout(() => {
            document.getElementById("moodboard-img").src = savedMoodboard;
            document.getElementById("style-img").src = savedStyle;
            document.getElementById("gothic-img").src = savedGothic;
        }, 200);
        
        setTimeout(() => {
            cards.forEach(img => img.classList.remove('loading'));
        }, 600);
        
        count = parseInt(savedCount) || 1;
        document.getElementById("counter-value").textContent = count;
    } else {
        generateImages();
    }
}

loadSavedImages();

// === ЧАСТИЦЫ НА ФОНЕ ===

const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

let particles = [];
let mouse = { x: null, y: null, radius: 100 };

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

document.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

document.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
});

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        if (mouse.x !== null && mouse.y !== null) {
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouse.radius) {
                const force = (mouse.radius - distance) / mouse.radius;
                this.x += dx * force * 0.03;
                this.y += dy * force * 0.03;
            }
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
    }
}

function createParticles() {
    const count = Math.floor((canvas.width * canvas.height) / 12000);
    particles = [];
    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }
}

createParticles();
window.addEventListener('resize', createParticles);

function connectParticles() {
    const maxDistance = 120;
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
                const opacity = 1 - distance / maxDistance;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.15})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    connectParticles();
    requestAnimationFrame(animateParticles);
}

animateParticles();

// === РЕЖИМ ОДНОЙ КАРТИНКИ ===

let singleMode = false;
let activeCategory = null;

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function(e) {
        toggleSingleMode(this);
    });
});

function toggleSingleMode(selectedCard) {
    const allCards = document.querySelectorAll('.card');
    const gallery = document.querySelector('.gallery');
    const counter = document.querySelector('.counter');
    const title = document.querySelector('h1');
    const saveBtn = document.querySelector('.save-btn');
    const favoritesSection = document.querySelector('.favorites-section');
    const undoAllBtn = document.getElementById('undo-all-btn');
    
    if (!singleMode) {
        const categoryText = selectedCard.querySelector('h2').textContent.toLowerCase();
        if (categoryText === 'moodboard') activeCategory = 'moodboard';
        if (categoryText === 'style') activeCategory = 'style';
        if (categoryText === 'gothic') activeCategory = 'gothic';
        
        allCards.forEach(card => {
            if (card !== selectedCard) card.style.display = 'none';
        });
        
        selectedCard.classList.add('single-mode');
        gallery.style.gridTemplateColumns = '1fr';
        gallery.style.maxWidth = '600px';
        gallery.style.margin = '0 auto';
        
        // Удаляем все кнопки вне карточек
        const oldButtons = document.querySelectorAll('.container > button, .single-buttons');
        oldButtons.forEach(b => b.remove());
        
        // Создаём контейнер для кнопок
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'single-buttons';
        buttonContainer.style.cssText = 'display: flex; gap: 12px; justify-content: center; margin-top: 20px; flex-wrap: wrap;';
        
        // Кнопка Generate One
        const genOneBtn = document.createElement('button');
        genOneBtn.textContent = 'Generate One';
        genOneBtn.setAttribute('onclick', 'generateOne()');
        
        // Кнопка Undo One
        const undoOneBtn = document.createElement('button');
        undoOneBtn.textContent = '↩ Undo';
        undoOneBtn.id = 'undo-one-btn';
        undoOneBtn.setAttribute('onclick', 'undoOne()');
        undoOneBtn.style.opacity = singleHistoryIndex < 0 ? '0.3' : '1';
        undoOneBtn.style.cursor = singleHistoryIndex < 0 ? 'default' : 'pointer';
        
        // Кнопка Show All
        const showAllBtn = document.createElement('button');
        showAllBtn.textContent = 'Show All';
        showAllBtn.setAttribute('onclick', 'showAllCards()');
        
        buttonContainer.appendChild(genOneBtn);
        buttonContainer.appendChild(undoOneBtn);
        buttonContainer.appendChild(showAllBtn);
        gallery.after(buttonContainer);
        
        // Прячем элементы
        counter.style.display = 'none';
        title.style.display = 'none';
        if (saveBtn) saveBtn.style.display = 'none';
        if (undoAllBtn) undoAllBtn.style.display = 'none';
        if (favoritesSection) favoritesSection.style.display = 'none';
        
        singleMode = true;
    } else {
        showAllCards();
    }
}

function generateOne() {
    const singleCard = document.querySelector('.card:not([style*="display: none"])');
    const singleImg = singleCard.querySelector('img');
    
    // Сохраняем текущее в историю одиночных
    const currentSrc = singleImg.src;
    singleHistory = singleHistory.slice(0, singleHistoryIndex + 1);
    singleHistory.push({ category: activeCategory, src: currentSrc });
    singleHistoryIndex = singleHistory.length - 1;
    
    if (singleHistory.length > 20) {
        singleHistory.shift();
        singleHistoryIndex--;
    }
    
    singleImg.classList.add('loading');
    
    let imageArray;
    if (activeCategory === 'moodboard') imageArray = moodboardImages;
    if (activeCategory === 'style') imageArray = styleImages;
    if (activeCategory === 'gothic') imageArray = gothicImages;
    
    setTimeout(() => { singleImg.src = randomImage(imageArray); }, 200);
    setTimeout(() => { singleImg.classList.remove('loading'); }, 600);
    
    count++;
    document.getElementById("counter-value").textContent = count;
    localStorage.setItem(activeCategory, singleImg.src);
    localStorage.setItem('genCount', count);
    
    updateUndoButtons();
}

function showAllCards() {
    const allCards = document.querySelectorAll('.card');
    const gallery = document.querySelector('.gallery');
    const counter = document.querySelector('.counter');
    const title = document.querySelector('h1');
    
    allCards.forEach(card => {
        card.style.display = '';
        card.classList.remove('single-mode');
    });
    
    gallery.style.gridTemplateColumns = '';
    gallery.style.maxWidth = '';
    gallery.style.margin = '';
    
    // Удаляем контейнер с кнопками single mode
    const buttonContainer = document.querySelector('.single-buttons');
    if (buttonContainer) buttonContainer.remove();
    
    // Удаляем старые кнопки
    const existingButtons = document.querySelectorAll('.container > button');
    existingButtons.forEach(b => b.remove());
    
    // Создаём кнопку Generate
    const generateBtn = document.createElement('button');
    generateBtn.textContent = 'Generate';
    generateBtn.setAttribute('onclick', 'generateImages()');
    
    // Создаём кнопку Undo All
    const undoAllBtn = document.createElement('button');
    undoAllBtn.textContent = '↩ Undo All';
    undoAllBtn.id = 'undo-all-btn';
    undoAllBtn.className = 'undo-btn';
    undoAllBtn.setAttribute('onclick', 'undoAll()');
    undoAllBtn.style.opacity = historyIndex < 0 ? '0.3' : '1';
    undoAllBtn.style.cursor = historyIndex < 0 ? 'default' : 'pointer';
    
    // Создаём кнопку Save
    const saveBtn = document.createElement('button');
    saveBtn.textContent = '★ Save Concept';
    saveBtn.className = 'save-btn';
    saveBtn.setAttribute('onclick', 'saveToFavorites()');
    
    // Вставляем после галереи
    gallery.after(undoAllBtn);
    gallery.after(saveBtn);
    gallery.after(generateBtn);
    
    // Показываем счётчик и заголовок
    counter.style.display = '';
    title.style.display = '';
    
    // Показываем избранное
    const favoritesSection = document.querySelector('.favorites-section');
    if (favoritesSection) favoritesSection.style.display = '';
    
    singleMode = false;
    activeCategory = null;
}

// === ИЗБРАННОЕ ===

function saveToFavorites() {
    const concept = {
        moodboard: document.getElementById("moodboard-img").src,
        style: document.getElementById("style-img").src,
        gothic: document.getElementById("gothic-img").src,
        date: new Date().toLocaleString('ru-RU'),
        id: Date.now()
    };
    
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.unshift(concept);
    if (favorites.length > 20) favorites = favorites.slice(0, 20);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    const saveBtn = document.querySelector('.save-btn');
    if (saveBtn) {
        saveBtn.textContent = '★ Saved!';
        saveBtn.style.color = '#fbbf24';
        saveBtn.style.borderColor = '#fbbf24';
        setTimeout(() => {
            saveBtn.textContent = '★ Save Concept';
            saveBtn.style.color = '';
            saveBtn.style.borderColor = '';
        }, 1500);
    }
    
    renderFavorites();
}

function renderFavorites() {
    const grid = document.getElementById('favorites-grid');
    const noFav = document.getElementById('no-favorites');
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    if (!grid) return;
    
    if (favorites.length === 0) {
        grid.innerHTML = '';
        if (noFav) noFav.style.display = 'block';
        return;
    }
    
    if (noFav) noFav.style.display = 'none';
    
    grid.innerHTML = favorites.map(f => `
        <div class="favorite-item">
            <div class="fav-images">
                <img src="${f.moodboard}" alt="Moodboard" loading="lazy">
                <img src="${f.style}" alt="Style" loading="lazy">
                <img src="${f.gothic}" alt="Gothic" loading="lazy">
            </div>
            <div class="fav-info">
                <span class="fav-date">${f.date}</span>
                <button class="fav-restore" onclick="restoreFavoriteById(${f.id})">Restore</button>
                <button class="fav-delete" onclick="deleteFavoriteById(${f.id})">✕</button>
            </div>
        </div>
    `).join('');
}

function restoreFavoriteById(id) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const concept = favorites.find(f => f.id === id);
    if (concept) {
        document.getElementById("moodboard-img").src = concept.moodboard;
        document.getElementById("style-img").src = concept.style;
        document.getElementById("gothic-img").src = concept.gothic;
        localStorage.setItem('moodboard', concept.moodboard);
        localStorage.setItem('style', concept.style);
        localStorage.setItem('gothic', concept.gothic);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function deleteFavoriteById(id) {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites = favorites.filter(f => f.id !== id);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderFavorites();
}

document.addEventListener('DOMContentLoaded', () => {
    renderFavorites();
});
// === UNDO ДЛЯ ВСЕХ ТРЁХ ===

function undoAll() {
    if (historyIndex < 0) return;
    
    const previousState = history[historyIndex];
    historyIndex--;
    
    const cards = document.querySelectorAll('.card img');
    cards.forEach(img => img.classList.add('loading'));
    
    setTimeout(() => {
        document.getElementById("moodboard-img").src = previousState.moodboard;
        document.getElementById("style-img").src = previousState.style;
        document.getElementById("gothic-img").src = previousState.gothic;
    }, 100);
    
    setTimeout(() => {
        cards.forEach(img => img.classList.remove('loading'));
    }, 400);
    
    updateUndoButtons();
}

// === UNDO ДЛЯ ОДНОЙ ===

function undoOne() {
    if (singleHistoryIndex < 0) return;
    
    const previous = singleHistory[singleHistoryIndex];
    singleHistoryIndex--;
    
    let imgId;
    if (previous.category === 'moodboard') imgId = 'moodboard-img';
    if (previous.category === 'style') imgId = 'style-img';
    if (previous.category === 'gothic') imgId = 'gothic-img';
    
    const img = document.getElementById(imgId);
    img.classList.add('loading');
    
    setTimeout(() => { img.src = previous.src; }, 100);
    setTimeout(() => { img.classList.remove('loading'); }, 400);
    
    updateUndoButtons();
}

// === ОБНОВЛЕНИЕ КНОПОК UNDO ===

function updateUndoButtons() {
    const undoAllBtn = document.getElementById('undo-all-btn');
    const undoOneBtn = document.getElementById('undo-one-btn');
    
    if (undoAllBtn) {
        undoAllBtn.style.opacity = historyIndex < 0 ? '0.3' : '1';
        undoAllBtn.style.cursor = historyIndex < 0 ? 'default' : 'pointer';
    }
    
    if (undoOneBtn) {
        undoOneBtn.style.opacity = singleHistoryIndex < 0 ? '0.3' : '1';
        undoOneBtn.style.cursor = singleHistoryIndex < 0 ? 'default' : 'pointer';
    }
}
let count = 1;

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
    "images/moodboard/51.jpg",
    "images/moodboard/52.jpg",
    "images/moodboard/53.jpg",
    "images/moodboard/54.jpg",
    "images/moodboard/55.jpg",
    "images/moodboard/56.jpg",
    "images/moodboard/57.jpg",
    "images/moodboard/58.jpg",
    "images/moodboard/59.jpg",
    "images/moodboard/60.jpg",
    "images/moodboard/61.jpg",
    "images/moodboard/62.jpg",
    "images/moodboard/63.jpg",
    "images/moodboard/64.jpg",
    "images/moodboard/65.jpg",
    "images/moodboard/66.jpg",
    "images/moodboard/67.jpg",
    "images/moodboard/68.jpg",
    "images/moodboard/69.jpg",
    "images/moodboard/70.jpg",
    "images/moodboard/71.jpg",
    "images/moodboard/72.jpg",
    "images/moodboard/73.jpg",
    "images/moodboard/74.jpg",
    "images/moodboard/75.jpg",
    "images/moodboard/76.jpg",
    "images/moodboard/77.jpg",
    "images/moodboard/78.jpg",
    "images/moodboard/79.jpg",
    "images/moodboard/80.jpg",
    "images/moodboard/81.jpg",
    "images/moodboard/82.jpg",
    "images/moodboard/83.jpg",
    "images/moodboard/84.jpg",
    "images/moodboard/85.jpg",
    "images/moodboard/86.jpg",
    "images/moodboard/87.jpg",
    "images/moodboard/88.jpg",
    "images/moodboard/89.jpg",
    "images/moodboard/90.jpg",
    "images/moodboard/91.jpg",
    "images/moodboard/92.jpg",
    "images/moodboard/93.jpg",
    "images/moodboard/94.jpg",
    "images/moodboard/95.jpg",
    "images/moodboard/96.jpg",
    "images/moodboard/97.jpg",
    "images/moodboard/98.jpg",
    "images/moodboard/99.jpg",
    "images/moodboard/100.jpg",
    "images/moodboard/101.jpg",
    "images/moodboard/102.jpg",
    "images/moodboard/103.jpg",
    "images/moodboard/104.jpg",
    "images/moodboard/105.jpg",
    "images/moodboard/106.jpg",
    "images/moodboard/107.jpg",
    "images/moodboard/108.jpg",
    "images/moodboard/109.jpg",
    "images/moodboard/110.jpg",
    "images/moodboard/111.jpg",
    "images/moodboard/112.jpg",
    "images/moodboard/113.jpg",
    "images/moodboard/114.jpg",
    "images/moodboard/115.jpg",
    "images/moodboard/116.jpg",
    "images/moodboard/117.jpg",
    "images/moodboard/118.jpg",
    "images/moodboard/119.jpg",
    "images/moodboard/120.jpg",
    "images/moodboard/121.jpg",
    "images/moodboard/122.jpg",
    "images/moodboard/123.jpg",
    "images/moodboard/124.jpg",
    "images/moodboard/125.jpg",
    "images/moodboard/126.jpg",
    "images/moodboard/127.jpg",
    "images/moodboard/128.jpg",
    "images/moodboard/129.jpg",
    "images/moodboard/130.jpg",
    "images/moodboard/131.jpg",
    "images/moodboard/132.jpg",
    "images/moodboard/133.jpg",
    "images/moodboard/134.jpg",
    "images/moodboard/135.jpg",
    "images/moodboard/136.jpg",
    "images/moodboard/137.jpg",
    "images/moodboard/138.jpg",
    "images/moodboard/139.jpg",
    "images/moodboard/140.jpg",
    "images/moodboard/141.jpg",
    "images/moodboard/142.jpg",
    "images/moodboard/143.jpg",
    "images/moodboard/144.jpg",
    "images/moodboard/145.jpg",
    "images/moodboard/146.jpg",
    "images/moodboard/147.jpg",
    "images/moodboard/148.jpg",
    "images/moodboard/149.jpg",
    "images/moodboard/150.jpg",
    "images/moodboard/151.jpg",
    "images/moodboard/152.jpg",
    "images/moodboard/153.jpg",
    "images/moodboard/154.jpg",
    "images/moodboard/155.jpg",
    "images/moodboard/156.jpg",
    "images/moodboard/157.jpg",
    "images/moodboard/158.jpg",
    "images/moodboard/159.jpg"
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
    "images/style/51.jpg",
    "images/style/52.jpg",
    "images/style/53.jpg",
    "images/style/54.jpg",
    "images/style/55.jpg",
    "images/style/56.jpg",
    "images/style/57.jpg",
    "images/style/58.jpg",
    "images/style/59.jpg",
    "images/style/60.jpg",
    "images/style/61.jpg",
    "images/style/62.jpg",
    "images/style/63.jpg",
    "images/style/64.jpg",
    "images/style/65.jpg",
    "images/style/66.jpg",
    "images/style/67.jpg",
    "images/style/68.jpg",
    "images/style/69.jpg",
    "images/style/70.jpg",
    "images/style/71.jpg",
    "images/style/72.jpg",
 "images/style/73.jpg",
 "images/style/74.jpg",
 "images/style/75.jpg",
 "images/style/76.jpg",
 "images/style/77.jpg",
 "images/style/78.jpg",
 "images/style/79.jpg",
 "images/style/80.jpg",
 "images/style/81.jpg",
 "images/style/82.jpg",
 "images/style/83.jpg",
 "images/style/84.jpg",
 "images/style/85.jpg",
 "images/style/86.jpg",
 "images/style/87.jpg",
 "images/style/88.jpg",
 "images/style/89.jpg",
 "images/style/90.jpg",
 "images/style/91.jpg",
 "images/style/92.jpg",
 "images/style/93.jpg",
 "images/style/94.jpg",
 "images/style/95.jpg",
 "images/style/96.jpg",
 "images/style/97.jpg",
 "images/style/98.jpg",
 "images/style/99.jpg",
 "images/style/100.jpg"

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
    "images/gothic/51.jpg",
 "images/gothic/52.jpg",
 "images/gothic/53.jpg",
 "images/gothic/54.jpg",
 "images/gothic/55.jpg",
 "images/gothic/56.jpg",
 "images/gothic/57.jpg",
 "images/gothic/58.jpg",
 "images/gothic/59.jpg",
 "images/gothic/60.jpg",
 "images/gothic/61.jpg",
 "images/gothic/62.jpg",
 "images/gothic/63.jpg",
 "images/gothic/64.jpg",
 "images/gothic/65.jpg",
 "images/gothic/66.jpg",
 "images/gothic/67.jpg",
 "images/gothic/68.jpg",
 "images/gothic/69.jpg",
 "images/gothic/70.jpg",
 "images/gothic/71.jpg",
 "images/gothic/72.jpg",
 "images/gothic/73.jpg",
 "images/gothic/74.jpg",
 "images/gothic/75.jpg",
 "images/gothic/76.jpg",
 "images/gothic/77.jpg",
 "images/gothic/78.jpg",
 "images/gothic/79.jpg",
 "images/gothic/80.jpg",
 "images/gothic/81.jpg",
 "images/gothic/82.jpg",
 "images/gothic/83.jpg",
 "images/gothic/84.jpg",
 "images/gothic/85.jpg",
 "images/gothic/86.jpg",
 "images/gothic/87.jpg",
 "images/gothic/88.jpg",
 "images/gothic/89.jpg",
 "images/gothic/90.jpg",
 "images/gothic/91.jpg",
 "images/gothic/92.jpg",
 "images/gothic/93.jpg",
 "images/gothic/94.jpg",
 "images/gothic/95.jpg",
 "images/gothic/96.jpg",
 "images/gothic/97.jpg",
 "images/gothic/98.jpg",
 "images/gothic/99.jpg",
 "images/gothic/100.jpg"

];

function randomImage(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateImages() {
    const cards = document.querySelectorAll('.card img');
    
    cards.forEach(img => img.classList.add('loading'));
    
    setTimeout(() => {
        document.getElementById("moodboard-img").src =
            randomImage(moodboardImages);
        document.getElementById("style-img").src =
            randomImage(styleImages);
        document.getElementById("gothic-img").src =
            randomImage(gothicImages);
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

// Размер canvas на весь экран
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Отслеживаем мышь
document.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

// Если мышь ушла — частицы не реагируют
document.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
});

// Создаём частицы
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
        // Движение
        this.x += this.speedX;
        this.y += this.speedY;

        // Зацикливание по краям
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Реакция на мышь
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

// Создаём частицы
function createParticles() {
    const count = Math.floor((canvas.width * canvas.height) / 12000);
    particles = [];
    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }
}

createParticles();
window.addEventListener('resize', createParticles);

// Соединяем линиями близкие частицы
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

// Анимация
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    connectParticles();
    requestAnimationFrame(animateParticles);
}

animateParticles();
// === РЕЖИМ ОДНОЙ КАРТИНКИ ===

let singleMode = false;
let activeCategory = null; // 'moodboard', 'style' или 'gothic'

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function(e) {
        if (e.target.tagName === 'IMG') {
            e.stopPropagation();
            toggleSingleMode(this);
            return;
        }
        toggleSingleMode(this);
    });
});

function toggleSingleMode(selectedCard) {
    const allCards = document.querySelectorAll('.card');
    const gallery = document.querySelector('.gallery');
    const container = document.querySelector('.container');
    const counter = document.querySelector('.counter');
    const title = document.querySelector('h1');
    
    if (!singleMode) {
        // Определяем категорию по h2 внутри карточки
        const categoryText = selectedCard.querySelector('h2').textContent.toLowerCase();
        if (categoryText === 'moodboard') activeCategory = 'moodboard';
        if (categoryText === 'style') activeCategory = 'style';
        if (categoryText === 'gothic') activeCategory = 'gothic';
        
        // Скрываем остальные карточки
        allCards.forEach(card => {
            if (card !== selectedCard) {
                card.style.display = 'none';
            }
        });
        
        selectedCard.classList.add('single-mode');
        gallery.style.gridTemplateColumns = '1fr';
        gallery.style.maxWidth = '600px';
        gallery.style.margin = '0 auto';
        
        // Удаляем старую кнопку
        const oldButton = document.querySelector('button');
        oldButton.remove();
        
        // Создаём контейнер для двух кнопок
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'single-buttons';
        buttonContainer.style.cssText = 'display: flex; gap: 12px; justify-content: center; margin-top: 20px; flex-wrap: wrap;';
        
        // Кнопка Generate One
        const genOneBtn = document.createElement('button');
        genOneBtn.textContent = 'Generate One';
        genOneBtn.setAttribute('onclick', 'generateOne()');
        
        // Кнопка Show All
        const showAllBtn = document.createElement('button');
        showAllBtn.textContent = 'Show All';
        showAllBtn.setAttribute('onclick', 'showAllCards()');
        
        buttonContainer.appendChild(genOneBtn);
        buttonContainer.appendChild(showAllBtn);
        
        // Вставляем после галереи
        gallery.after(buttonContainer);
        
        // Прячем счётчик и заголовок
        counter.style.display = 'none';
        title.style.display = 'none';
        
        singleMode = true;
    }
}

function generateOne() {
    const cards = document.querySelectorAll('.card img');
    const singleCard = document.querySelector('.card:not([style*="display: none"])');
    const singleImg = singleCard.querySelector('img');
    
    // Анимация загрузки
    singleImg.classList.add('loading');
    
    let imageArray;
    if (activeCategory === 'moodboard') imageArray = moodboardImages;
    if (activeCategory === 'style') imageArray = styleImages;
    if (activeCategory === 'gothic') imageArray = gothicImages;
    
    setTimeout(() => {
        singleImg.src = randomImage(imageArray);
    }, 200);
    
    setTimeout(() => {
        singleImg.classList.remove('loading');
    }, 600);
    
    // Обновляем счётчик
    count++;
    document.getElementById("counter-value").textContent = count;
    
    // Сохраняем
    localStorage.setItem(activeCategory, singleImg.src);
    localStorage.setItem('genCount', count);
}

function showAllCards() {
    const allCards = document.querySelectorAll('.card');
    const gallery = document.querySelector('.gallery');
    const counter = document.querySelector('.counter');
    const title = document.querySelector('h1');
    
    // Показываем все карточки
    allCards.forEach(card => {
        card.style.display = '';
        card.classList.remove('single-mode');
    });
    
    // Возвращаем сетку
    gallery.style.gridTemplateColumns = '';
    gallery.style.maxWidth = '';
    gallery.style.margin = '';
    
    // Удаляем контейнер с кнопками
    const buttonContainer = document.querySelector('.single-buttons');
    if (buttonContainer) buttonContainer.remove();
    
    // Создаём обычную кнопку Generate
    const newButton = document.createElement('button');
    newButton.textContent = 'Generate';
    newButton.setAttribute('onclick', 'generateImages()');
    gallery.after(newButton);
    
    // Показываем счётчик и заголовок
    counter.style.display = '';
    title.style.display = '';
    
    singleMode = false;
    activeCategory = null;
}
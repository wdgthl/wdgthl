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
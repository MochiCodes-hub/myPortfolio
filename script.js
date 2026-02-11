// 1. Hero Entrance Animations
window.addEventListener('load', () => {
    const content = document.querySelectorAll('.header-container, .hero-content > *, .hero-image-area');
    
    content.forEach((el, i) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(-20px)";
        el.style.transition = "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)";
        
        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, i * 150);
    });
});

// 2. Typing Animation Logic
const codeToType = `const developer = {
  name: 'Prince Caballes',
  role: 'Fullstack Student',
  passion: 'Clean Code',
  motto: 'Always Learning'
};

if (problem) {
  return solve(problem);
}`;

const typeTarget = document.getElementById('typing-code');
let hasTyped = false;

const typingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasTyped) {
            hasTyped = true; 
            typeCode(codeToType, typeTarget);
        }
    });
}, { threshold: 0.5 });

if(typeTarget) typingObserver.observe(typeTarget);

function typeCode(text, element) {
    let index = 0;
    function nextChar() {
        if (index < text.length) {
            let currentText = text.substring(0, index + 1);
            let highlighted = currentText
                .replace(/\b(const|if|return)\b/g, '<span class="keyword">$1</span>')
                .replace(/'([^']*)'/g, '<span class="string">\'$1\'</span>');

            element.innerHTML = highlighted;
            index++;
            setTimeout(nextChar, Math.random() * 50 + 30);
        }
    }
    nextChar();
}

// 3. Project List Rendering
const projectsData = [
    { 
        title: "CyberShield: Gamified E-Learning", 
        category: "Web System",
        description: "A containerized Capture-the-Flag (CTF) platform featuring Docker-based challenges, progress tracking, and an embedded webshell to enhance cybersecurity awareness.",
        img: "assets/cybershield.jpg" 
    },

    
    
];

function renderProjects() {
    const container = document.getElementById('project-list-container');
    if (!container) return;

    container.innerHTML = ''; 

    projectsData.forEach((project, index) => {
        const displayIndex = (index + 1).toString().padStart(2, '0');

        const projectHTML = `
            <div class="project-row" data-index="${displayIndex}">
                <div class="project-visual">
                    <img src="${project.img}" alt="${project.title}">
                </div>
                <div class="project-info">
                    <span class="project-category">${project.category}</span>
                    <h3>${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <a href="#" class="project-link-group" style="display: flex; align-items: center; gap: 15px; text-decoration: none;">
                        <div class="project-link-circle">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" width="20">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>
                        <span style="color: white; font-weight: 700; font-size: 0.8rem; text-transform: uppercase;">View Repository</span>
                    </a>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', projectHTML);
    });
}

renderProjects();
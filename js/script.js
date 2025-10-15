// Particle System
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const colors = ['#00F0B5', '#FF00FF', '#00FFFF'];
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Smooth scrolling
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Initialize Swiper
function initSwiper() {
    new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        },
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        }
    });
}

// Typewriter effect for hero title
function typewriterEffect() {
    const title = document.querySelector('.hero-title');
    const text = title.textContent;
    title.textContent = '';
    title.style.opacity = '1';
    
    let i = 0;
    function type() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    
    setTimeout(type, 1000);
}

// Copy to clipboard function
function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(function() {
        const originalText = button.textContent;
        button.textContent = '✅ コピー完了！';
        button.classList.add('copied');
        
        setTimeout(function() {
            button.textContent = originalText;
            button.classList.remove('copied');
        }, 2000);
    }).catch(function(err) {
        console.error('コピーに失敗しました: ', err);
        alert('コピーに失敗しました');
    });
}

// Modal functions
function openModal(imageSrc, altText) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    modalImage.src = imageSrc;
    modalImage.alt = altText;
    modal.style.display = 'block';
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside the image
window.addEventListener('click', function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    initSwiper();
    
    // Scroll event listener
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Initial check for animations
    setTimeout(handleScrollAnimations, 100);
    
    // Add scroll indicator click functionality
    document.querySelector('.scroll-indicator').addEventListener('click', function() {
        scrollToSection('about');
    });
});

// Add floating animation to cards
function addFloatingAnimation() {
    const cards = document.querySelectorAll('.vision-card, .interest-card, .experience-card');
    
    cards.forEach((card, index) => {
        card.style.animationDelay = index * 0.2 + 's';
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02) rotate(' + (Math.random() * 4 - 2) + 'deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
        });
    });
}

// Initialize floating animation
setTimeout(addFloatingAnimation, 2000);
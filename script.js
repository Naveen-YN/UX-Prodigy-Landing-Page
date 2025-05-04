const hamburger = document.querySelector('.hamburger');
const navLinksLeft = document.querySelector('.nav-links-left');
const navLinksRight = document.querySelector('.nav-links-right');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinksLeft.classList.toggle('active');
    navLinksRight.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links-left a, .nav-links-right a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinksLeft.classList.remove('active');
        navLinksRight.classList.remove('active');
    });
});

// Sticky Navigation on Scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animation on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .step, .testimonial-card, .pricing-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Form Validation
const form = document.querySelector('#signup-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]');
        
        if (!email.value || !email.value.includes('@')) {
            email.classList.add('error');
        } else {
            form.submit();
        }
    });
}
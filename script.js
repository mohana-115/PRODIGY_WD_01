// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Button hover effect
const ctaButton = document.querySelector('.cta-btn');
ctaButton.addEventListener('mouseover', function() {
    ctaButton.style.transform = 'scale(1.05)';
});
ctaButton.addEventListener('mouseout', function() {
    ctaButton.style.transform = 'scale(1)';
});

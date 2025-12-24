document.addEventListener('DOMContentLoaded', function() {

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 
    });

    const elementsToAnimate = document.querySelectorAll('.hidden');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const mainContent = document.querySelector('#main-content');
    const links = document.querySelectorAll('.nav-links a');

    function closeMenu() {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        mainContent.classList.remove('blur-background');
    }

    if (hamburger && navLinks && mainContent) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
            mainContent.classList.toggle('blur-background');
        });

        // Close menu when a link is clicked
        links.forEach(link => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });

        // Close menu when clicking outside
        mainContent.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                closeMenu();
            }
        });
    }

});


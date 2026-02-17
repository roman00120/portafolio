document.addEventListener('DOMContentLoaded', () => {

    // --- Custom Cursor ---
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    const links = document.querySelectorAll('a, button, .project-card');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        // Add a slight delay for follower
        setTimeout(() => {
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
        }, 50);
    });

    // Hover effect for links
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            follower.classList.add('active');
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
            follower.classList.remove('active');
        });
    });


    // --- Scroll Animations (Intersection Observer) ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-on-scroll');
    fadeElements.forEach(el => observer.observe(el));


    // --- Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Shadow effect
        if (scrollTop > 50) {
            navbar.style.boxShadow = "0 10px 30px -10px rgba(2, 12, 27, 0.7)";
            navbar.style.height = "70px"; // Shrink slightly
        } else {
            navbar.style.boxShadow = "none";
            navbar.style.height = "100px";
        }

        // Hide/Show on scroll
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = "translateY(-100%)";
        } else {
            navbar.style.transform = "translateY(0)";
        }
        lastScrollTop = scrollTop;
    });


    // --- Glitch Effect for Title (Quick randomization) ---
    const glitchText = document.querySelector('.glitch');
    if (glitchText) {
        const originalText = glitchText.dataset.text;
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        glitchText.addEventListener('mouseover', event => {
            let iteration = 0;
            const interval = setInterval(() => {
                event.target.innerText = event.target.innerText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return originalText[index];
                        }
                        return letters[Math.floor(Math.random() * 26)]
                    })
                    .join("");

                if (iteration >= originalText.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 30);
        });
    }

    // --- Mobile Menu ---
    // (Simplistic implementation for demo)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('open');
        });
    }
});

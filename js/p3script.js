document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });

    // Hide menu when mouse leaves the nav-links area
    navLinks.addEventListener('mouseleave', function () {
        navLinks.classList.remove('show');
    });
});

// Main JavaScript for index.html
document.addEventListener('DOMContentLoaded', function() {
    // Add any index-specific functionality here
    console.log('BMW M-Series website loaded successfully!');
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    var navToggle = document.getElementById('navToggle');
    var navLinks = document.querySelector('.nav-links');
    var navToggleIcon = navToggle && navToggle.querySelector('i');
    var cartIcon = document.getElementById('cartIcon');
    var cartModal = document.getElementById('cartModal');
    var overlay = document.getElementById('overlay');
    var closeCart = document.getElementById('closeCart');

    // Mobile nav toggle
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            var isOpen = navLinks.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
        // Close nav when a link clicked
        navLinks.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () {
                navLinks.classList.remove('open');
                if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Cart open/close
    function openCart() {
        if (!cartModal || !overlay) return;
        cartModal.classList.add('open');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function closeCartFn() {
        if (!cartModal || !overlay) return;
        cartModal.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    if (cartIcon) {
        cartIcon.addEventListener('click', openCart);
        cartIcon.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') openCart();
        });
    }
    if (closeCart) closeCart.addEventListener('click', closeCartFn);
    if (overlay) overlay.addEventListener('click', closeCartFn);

    // Close cart with Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeCartFn();
            if (navLinks) navLinks.classList.remove('open');
        }
    });
});

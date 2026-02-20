export function initNavbarScrollEffect() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    // Keep the same variables as original (even if not used)
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

export function initPageLoadAnimation() {
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');

        const loader = document.querySelector('.page-loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 300);
        }
    });
}

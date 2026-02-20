/**
 * Loads HTML partials into elements like:
 *   <div data-include="sections/hero.html"></div>
 *
 * NOTE: requires a web server (fetch). file:// may block requests.
 */
export async function loadIncludes() {
    const includeNodes = Array.from(document.querySelectorAll('[data-include]'));
    await Promise.all(includeNodes.map(async (node) => {
        const path = node.getAttribute('data-include');
        if (!path) return;

        try {
            const res = await fetch(path, { cache: 'no-cache' });
            if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
            node.innerHTML = await res.text();
            node.removeAttribute('data-include');
        } catch (err) {
            console.error(err);
        }
    }));

    // Allow other modules to hook into "partials loaded"
    document.dispatchEvent(new CustomEvent('includes:loaded'));
}

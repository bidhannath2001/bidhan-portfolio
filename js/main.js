import { loadIncludes } from "./core/includeLoader.js";

import { initTheme } from "./features/theme.js";
import { initSmoothScroll } from "./features/smoothScroll.js";
import { initNavbarScrollEffect } from "./features/navbar.js";
import { initMobileMenu } from "./features/mobileMenu.js";
import { initTypingEffect } from "./features/typing.js";
import { initScrollReveal } from "./features/scrollReveal.js";
import { initProjectFiltering } from "./features/projectFilter.js";
import { initContactFormValidation } from "./features/contactForm.js";
import { initBackToTopButton } from "./features/backToTop.js";
import { initActiveNavLink } from "./features/activeNav.js";
import { initConsoleMessage } from "./features/consoleMessage.js";
import { initAccessibilityEnhancements } from "./features/accessibility.js";
import { initPageLoadAnimation } from "./features/pageLoad.js";

async function boot() {
    // Load partial HTML first (so DOM elements exist for feature init)
    await loadIncludes();

    // Feature initialization (keeps original behavior, just separated)
    initTheme();
    initSmoothScroll();
    initNavbarScrollEffect();
    initMobileMenu();
    initTypingEffect();
    initScrollReveal();
    initProjectFiltering();
    initContactFormValidation();
    initBackToTopButton();
    initActiveNavLink();
    initConsoleMessage();
    initAccessibilityEnhancements();
    initPageLoadAnimation();
}

document.addEventListener('DOMContentLoaded', boot);

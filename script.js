/**
 * Interactive Website JavaScript
 *
 * This script handles basic interactivity for the SAIRAY website.
 * It includes a scroll-based animation to fade in elements as they enter the viewport.
 */

document.addEventListener("DOMContentLoaded", () => {
    // Select all elements that should have a fade-in effect on scroll.
    // We'll target sections for a clean, block-based animation.
    const sections = document.querySelectorAll(
        ".hero-section, .why-choose-us-section, .hair-ritual-section, .testimonials-section, .main-footer"
    );

    /**
     * Checks if an element is in the viewport.
     * @param {HTMLElement} el The element to check.
     * @returns {boolean} True if the element is visible, false otherwise.
     */
    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    /**
     * Adds the 'visible' class to elements that are in the viewport.
     */
    const handleScroll = () => {
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                // Add a class that triggers the CSS fade-in animation.
                section.classList.add('visible');
            }
        });
    };

    // Add a scroll event listener to trigger the animation.
    window.addEventListener("scroll", handleScroll);

    // Run the function once on page load to check for elements already in view.
    handleScroll();
});

// A simple example of an additional interactive feature:
// You could add a click handler to the 'Get Yours!' button.
const getYoursButton = document.querySelector(".button");

if (getYoursButton) {
    getYoursButton.addEventListener("click", (event) => {
        // Prevent the default link behavior if you want to add an effect instead.
        // event.preventDefault();
        console.log("Button clicked! You could trigger a modal or an animation here.");
    });
}

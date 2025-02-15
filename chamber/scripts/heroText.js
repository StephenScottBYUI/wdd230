window.addEventListener('resize', updateOverlayText);
document.addEventListener('DOMContentLoaded', updateOverlayText);

function updateOverlayText() {
    const textOverlay = document.querySelector('.hero-label');
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1000) {
        textOverlay.textContent = "Large";
    } else if (screenWidth >= 500) {
        textOverlay.textContent = "Medium";
    } else {
        textOverlay.textContent = "Small";
    }
}
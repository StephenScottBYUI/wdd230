(function () {
    // Randomly decide whether to show Version A or Version B
    const showVersionA = Math.random() < 0.5; // 50% chance for each
    if (showVersionA) {
        document.getElementById('cta-a').classList.remove('hidden');
    } else {
        document.getElementById('cta-b').classList.remove('hidden');
    }
})();

//Uses an event listener to track which button is clicked

document.querySelector('.version-a').addEventListener('click', function () {
    trackClick('A')
})

document.querySelector('.version-a').addEventListener('click', function () {
    trackClick('B')
})

function trackClick(version) {
    // Send the version clicked to the console (or send it to your analytics system)
    console.log(`CTA Version ${version} clicked.`);
    alert(`Thank you for clicking Version ${version}!`);
}
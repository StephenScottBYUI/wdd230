// Function to get the current year
function getCurrentYear() {
    const today = new Date();
    return today.getFullYear();
}

// Update the copyright year in the footer
document.getElementById('currentYear').textContent = getCurrentYear();

// Update the last modified date in the footer
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
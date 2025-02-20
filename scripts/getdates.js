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

document.addEventListener('DOMContentLoaded', function () {
    const pageVisits = document.querySelector('#visits');

    let numVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0;

    if (numVisits !== 0) {
        pageVisits.textContent = numVisits;
    } else {
        pageVisits.textContent = 'This is your first visit! Welcome.'
    }

    numVisits++;

    localStorage.setItem('numVisits-ls', numVisits);
})
document.addEventListener('DOMContentLoaded', function () {
    const visitLast = document.querySelector('#lastVisit')
    const msToDays = 86400000;
    const today = Date.now();



    let lastVisit = Number(localStorage.getItem('willingboroSinceLastVisit'));


    if (!lastVisit) {
        visitLast.textContent = `Welcome! Let us know if you have any questions.`;

    } else {
        let daysSince = (today - lastVisit) / msToDays;

        if (daysSince > 0 && daysSince <= 1) {
            visitLast.textContent = `Back so soon! Awesome!`;
        }

        else {

            visitLast.textContent = `You last visitied ${Math.floor(daysSince)} days ago.`;

        }
    }

    localStorage.setItem('willingboroSinceLastVisit', today);

})
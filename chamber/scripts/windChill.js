function calcWindChill() {
    const temp = parseFloat(document.querySelector('#tempNumber').textContent);
    const wind = parseFloat(document.querySelector('#windNumber').textContent);

    if (temp >= 50 || wind <= 3) {
        document.querySelector('#windChill').textContent = "N/A";
    }
    else {
        const windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);
        document.querySelector('#windChill').textContent = `Feels like ${Math.round(windChill)}° F`;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    calcWindChill();
});


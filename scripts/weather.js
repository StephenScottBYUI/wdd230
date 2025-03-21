
const currentTemp = document.querySelector('#current-temp');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.03&lon=-74.88&appid=0a58d1b99094fd6acb244badfaff5049&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.table(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}

apiFetch();

const displayResults = (data) => {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;

    data.weather.forEach((weatherItem) => {
        let iconsrc = `https://openweathermap.org/img/w/${weatherItem.icon}.png`;
        let desc = weatherItem.description;
        let formattedDesc = desc.replace(/\b\w/g, char => char.toUpperCase());
        let weatherIconHolder = document.createElement('img');
        let captionDescHolder = document.createElement('span');
        let weatherDiv = document.createElement('div')

        weatherIconHolder.setAttribute('src', iconsrc);
        weatherIconHolder.setAttribute('alt', desc);
        captionDescHolder.textContent = `${formattedDesc}`;

        document.querySelector('#weather-container').appendChild(weatherDiv);

        weatherDiv.appendChild(weatherIconHolder);
        weatherDiv.appendChild(captionDescHolder);


    })

}
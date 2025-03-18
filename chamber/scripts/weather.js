
const currentTemp = document.querySelector('#current-temp');


const url = 'https://api.openweathermap.org/data/2.5//forecast?lat=40.03&lon=-74.88&appid=5ab5519a95d1263ae62cc6c71b11fa35&units=imperial';
const tempURL = 'https://api.openweathermap.org/data/2.5//weather?lat=40.03&lon=-74.88&appid=5ab5519a95d1263ae62cc6c71b11fa35&units=imperial';
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            apiFetchTemp();
            displayResults(data);
            calcWindChill(data);
            meetAndGreet();
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}

async function apiFetchTemp() {
    try {
        const response = await fetch(tempURL);
        if (response.ok) {
            const data1 = await response.json();
            const tempN = data1.main.temp;
            const temp = parseInt(tempN);
            console.log(temp);
            return temp;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}

apiFetch();

const displayResults = async (data) => {
    const tempValue = await apiFetchTemp();
    currentTemp.innerHTML = `${Math.round(parseInt(tempValue))}&deg;F`;

    const dailyForecast = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

    console.table(dailyForecast);

    dailyForecast.forEach((forecast) => {
        let iconsrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
        let desc = forecast.weather[0].description;
        let date = new Date(forecast.dt_txt);
        let formattedDate = `${date.getMonth() + 1}/${date.getDate()}`;
        let formattedDesc = desc.replace(/\b\w/g, char => char.toUpperCase());
        let forecastDate = document.createElement('p');
        let weatherIconHolder = document.createElement('img');
        let captionDescHolder = document.createElement('span');
        let weatherDiv = document.createElement('div')
        let forecastTemp = document.createElement('h4');

        forecastDate.setAttribute('class', 'forecast_date');
        weatherDiv.setAttribute('class', 'three_d_forecast');
        weatherIconHolder.setAttribute('src', iconsrc);
        weatherIconHolder.setAttribute('alt', desc);
        captionDescHolder.textContent = `${formattedDesc}`;
        forecastDate.innerHTML = `<strong>${formattedDate}</strong>`;
        forecastTemp.innerHTML = `${Math.round(forecast.main.temp)}&deg;F`;

        document.getElementById('weather-container').appendChild(weatherDiv);

        weatherDiv.appendChild(forecastDate);

        weatherDiv.appendChild(forecastTemp);
        weatherDiv.appendChild(weatherIconHolder);
        weatherDiv.appendChild(captionDescHolder);


    })

}

const calcWindChill = (data) => {
    const temp = parseFloat(data.list[0].main.temp);
    const wind = parseFloat(data.list[0].wind.speed);

    if (temp >= 50 || wind <= 3) {
        document.querySelector('#windChill').textContent = "N/A";
        document.getElementById('windNumber').textContent = `${Math.round(wind)}`;
    }
    else {
        const windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);
        document.querySelector('#windChill').textContent = `Feels like ${Math.round(windChill)}° F`;
        document.getElementById('windNumber').textContent = wind;
    }
}

function meetAndGreet() {
    const bannerBox = document.getElementById("banner");
    const today = new Date().getDay();


    if (today >= 1 && today <= 3) {
        let bannerText = document.createElement('p');
        let closeButton = document.getElementById('close-button');
        let xIcon = document.createElement('img');

        xIcon.setAttribute('src', 'images/x-mark.png');
        xIcon.setAttribute('alt', 'close button');
        xIcon.setAttribute('class', 'close_button');



        closeButton.setAttribute('style', 'background: none; border: none; cursor: pointer;');
        closeButton.appendChild(xIcon);

        bannerText.textContent = 'Come join us this Wednesday at 7pm for the Willingboro Chamber of Commerce meet and greet!';

        bannerBox.appendChild(bannerText);

    }
    else {
        bannerBox.setAttribute('class', 'visually-hidden');
        console.log(today);
    };

}

const button = document.getElementById('close-button');


function closeBanner() {
    const bannerBox = document.getElementById("banner");
    bannerBox.setAttribute('class', 'visually-hidden');

};

button.addEventListener('click', closeBanner);


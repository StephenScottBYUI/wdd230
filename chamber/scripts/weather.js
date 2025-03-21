const currentTemp = document.querySelector('#current-temp');


const forecastURL = 'https://api.openweathermap.org/data/2.5//forecast?lat=40.03&lon=-74.88&appid=0a58d1b99094fd6acb244badfaff5049&units=imperial';
const tempURL = 'https://api.openweathermap.org/data/2.5//weather?lat=40.03&lon=-74.88&appid=5ab5519a95d1263ae62cc6c71b11fa35&units=imperial';
async function apiFetch() {
    try {
        // Fetch BOTH APIs
        const [forecastResponse, tempResponse] = await Promise.all([
            fetch(forecastURL),
            fetch(tempURL)
        ]);

        if (forecastResponse.ok && tempResponse.ok) {
            const forecastData = await forecastResponse.json();
            const tempData = await tempResponse.json();

            displayCurrentWeather(tempData);  
            displayForecast(forecastData);    
            calcWindChill(tempData);          
                               

        } else {
            throw Error('Error fetching weather data');
        }
    } catch (error) {
        console.log(error);
    }
}



apiFetch();

function displayCurrentWeather(tempData) {
    const temp = tempData.main.temp;
    currentTemp.innerHTML = `${Math.round(temp)}&deg;F`;
}

const displayForecast = async (data) => {
    const dailyForecast = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

    

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

const calcWindChill = (tempData) => {
    const temp = parseFloat(tempData.main.temp);
    const wind = parseFloat(tempData.wind.speed);

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




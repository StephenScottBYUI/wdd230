const forecastURL = 'https://api.openweathermap.org/data/2.5//forecast?lat=20.44&lon=-86.92&appid=0a58d1b99094fd6acb244badfaff5049&units=imperial';
const tempURL = 'https://api.openweathermap.org/data/2.5//weather?lat=20.44&lon=-86.92&appid=5ab5519a95d1263ae62cc6c71b11fa35&units=imperial';

const weatherContainer = document.getElementById('weatherContainer');

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
            displayMaxTemp(tempData);



        } else {
            throw Error('Error fetching weather data');
        }
    } catch (error) {
        console.log(error);
    }
}



apiFetch();

const displayForecast = async (forecastData) => {
    const dailyForecast = forecastData.list.filter(item => item.dt_txt.includes("15:00:00")).slice(0, 1);



    dailyForecast.forEach((forecast) => {
        const forecastTemp = Math.round(forecast.main.temp);
        const forecastContainer = document.createElement('div');
        const date = new Date(forecast.dt_txt);
        const weatherItem = forecast.weather[0];
        let title = document.createElement('h3');
        let temperature = document.createElement('p');
        let condition = document.createElement('p');
        let iconHolder = document.createElement('img');
        let iconscr = `https://openweathermap.org/img/w/${weatherItem.icon}.png`;
        let formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

        title.textContent = `Forecast for ${formattedDate}`;
        temperature.innerHTML = `${forecastTemp}&deg;F`;
        condition.textContent = `${weatherItem.main}, ${weatherItem.description}`;
        iconHolder.setAttribute('src', iconscr);
        iconHolder.setAttribute('alt', weatherItem.description);

        forecastContainer.appendChild(title);
        forecastContainer.appendChild(iconHolder);
        forecastContainer.appendChild(temperature);
        forecastContainer.appendChild(condition);
        weatherContainer.appendChild(forecastContainer);

    })
};

const displayCurrentWeather = async (tempData) => {
    const temp = Math.round(tempData.main.temp);
    const date = new Date();
    let formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    let iconHolder = document.createElement('img');
    let condition = document.createElement('p');
    let iconscr = `https://openweathermap.org/img/w/${tempData.weather[0].icon}.png`;
    let temperature = document.createElement('p');
    let title = document.createElement('h2');
    let humidity = document.createElement('p');
    let desc = tempData.weather[0].description;
    let formattedDesc = desc.replace(/\b\w/g, char => char.toUpperCase());

    title.textContent = `Weather for ${formattedDate}`;
    iconHolder.setAttribute('src', iconscr);
    condition.textContent = `${formattedDesc}`;
    temperature.innerHTML = `${temp}&deg;F`;
    humidity.textContent = `${tempData.main.humidity}% Humidity`

    weatherContainer.appendChild(title);
    weatherContainer.appendChild(iconHolder);
    weatherContainer.appendChild(temperature);
    weatherContainer.appendChild(condition);
    weatherContainer.appendChild(humidity);



}

const displayMaxTemp = async (tempData) => {
    const maxTempContainer = document.getElementById('maxTemp');
    let temp = Math.round(tempData.main.temp_max);
    maxTempContainer.innerHTML = `${temp}&deg;F`;


}

function closePopUp() {
    document.getElementById('weatherPopUp').style.display = "none"
}
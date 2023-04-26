const submitBtn = document.getElementById('submitBtn');
const weatherTitleCon = document.querySelector('.weather-title');
const mainWeatherCon = document.querySelector('.main-container');
const content = document.querySelector('.content');
const finalError = document.querySelector('.final-error');
const topCon = document.querySelector('.top')
const first  = document.querySelector('.first')

submitBtn.addEventListener('click', function(e) {
    e.preventDefault()
    const input = document.querySelector('input');

    cityName = input.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=cb1ef0202818630fe875d29835a671b3`;

    mainWeatherCon.style.display = 'block';

    fetch(url)
    .then (response => response.json())
    .then(data => {
        name.innerText = data.name

        console.log(data)

        content.innerHTML = `
        <div class="name">${data.name}</div>
        <div class="temperature">
            <div class="temp"> 
                <em>${data.main.temp} </em> &#x2109;
            </div> 
            <div class= "min-max"> 
                <div class="type-weather"> ${data.weather[0].main}</div>
                <div class="max">
                    <i class="fa-solid fa-arrow-up-long up "></i>
                    <p> ${data.main.temp_max} </p>
                </div>
                <div class="max">
                    <i class="fa-solid fa-arrow-down-long down "></i>
                    <p> ${data.main.temp_min} </p>
                </div>
            </div> 
        </div>
        <div class="more-weather">
            <div class="feels">
                <h1> ${data.main.feels_like} &#x2109; </h1>
                <p> Feels Like </p>
            </div>
            <div class="humidity">
                <h1> ${data.main.humidity} %</h1>
                <p> Humidity </p>
            </div>
            
        </div>
        `

    })
    .catch (error => {
        const message = 'An error occurred while fetching weather data'
        console.log('Error: ', error)
    });
});
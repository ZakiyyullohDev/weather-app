// Get references to the input, button, and output elements
const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('searchButton');
const weatherInfo = document.getElementById('weatherInfo');

// Function to fetch weather data using the API
function getWeatherData(city) {
    const apiKey = '913dfb1df5fd26ad1747ebdad2f4c841';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Process the data and display weather information
            weatherInfo.innerHTML = `
                <div class="info">
                    <h2 class="city-name">Ushbu shahar ${data.name} 🏡</h2>
                    <p class="temp">Harorat: ${data.main.temp}°C 🌞</p>
                    <p class="humid">Namligi: ${data.main.humidity}% 💦</p>
                    <p class="desc">Tavsif: ${data.weather[0].description} 🌈</p>
                </div>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
            weatherInfo.innerHTML = "<p class='error'>❌Ob-havo maʼlumotlarini olishda xatolik yuz berdi. Iltimos keyinroq qayta urinib ko'ring!❌</p>";
        });
}

// Function to handle the button click event
function handleButtonClick() {
    const city = cityInput.value;
    getWeatherData(city);
}

// Add event listener for button click
searchButton.addEventListener('click', handleButtonClick);

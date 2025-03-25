  async function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) return;

     await fetch(` http://api.weatherapi.com/v1/current.json?key=75e25398c95a4269848114052240508&q=${city}&aqi=yes
`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
             document.getElementById('temperature').innerText = `${data.current.temp_c}°C`;
             document.getElementById('description').innerText = `${data.current.condition.text}`;
            document.getElementById('cityName').innerText = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
            document.getElementById('weatherIcon').src = `${data.current.condition.icon}`;
        })
        .catch(error => alert("City not found!"));
}
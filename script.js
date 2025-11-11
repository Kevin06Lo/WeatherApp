async function getWeather(city){
    const response = await fetch(`http://localhost:3000/weather?city=${city}`);
    const data = await response.json();

    console.log(data);
    document.querySelector('#result').textContent = 
    data.main ? `${data.name}: ${data.main.temp}°C` : data.error || 'City not found';
}

document.querySelector('#btn').addEventListener('click', () => {
    const city = document.querySelector('#city').value;
    getWeather(city);
});
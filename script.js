async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = 'c4ff24c82c491fdb0173fec6a4dbe804';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   
 try{
    const response = await fetch(url);
    const data = await response.json();

    if(data.cod == "404"){
        document.getElementById("weatherResult").innerHTML = "City not found";
    }else{
        document.getElementById("weatherResult").innerHTML = 
        `<h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].main}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        `;
    }
}   catch (error){
    document.getElementById("weatherResult").innerHTML = "Error fetching data";
    console.error( "Fetch error: ", error);
    console.log("API response: ", data);
 }
}
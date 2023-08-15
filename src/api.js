export {changeWeatherData, processData};
import { weatherData, currentLocation, setData} from ".";
//Returns weatherData object as json


async function changeWeatherData(e)
{
  e.preventDefault();
  currentLocation = document.getElementById('formlocation').value;
    fetch(`https://api.weatherapi.com/v1/current.json?key=6ad84aae75f24b31a40222612231108&q=${currentLocation}`,  {mode: 'cors'})
    .then(function(response) {
        return response.json();
      })
    .then(function(response) {
      weatherData = response.current;
      setData();
    })
}

function processData()
{
  let fahrenheit = weatherData.temp_f
  let celsius = weatherData.temp_c
  let wind = weatherData.wind_mph
  let humidity = weatherData.humidity
 return{
  fahrenheit, celsius, wind, humidity
 }
}

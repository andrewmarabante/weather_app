import { changeWeatherData } from "./api";
export {weatherData, currentLocation}
let weatherData;
let currentLocation;
const check = document.getElementById('check');
check.addEventListener('click', changeWeatherData);
const bla = document.getElementById('bla');
bla.addEventListener('click', blabla)


function blabla()
{
    console.log(weatherData);
}
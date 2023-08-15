import { changeWeatherData, processData } from "./api";
import { displayData } from "./dom";
export {weatherData, currentLocation, setData}
let weatherData;
let processedData;
let currentLocation;

const check = document.getElementById('check');
check.addEventListener('click', changeWeatherData);


function setData()
{
    processedData = new processData(weatherData);
    displayData(processedData);
}
import { changeWeatherData, processData } from "./api";
export {weatherData, currentLocation, setData}
let weatherData;
let processedData;
let currentLocation;

const check = document.getElementById('check');
check.addEventListener('click', changeWeatherData);
const bla = document.getElementById('bla');
bla.addEventListener('click', setData)


function setData()
{
    console.log(weatherData);
    processedData = new processData(weatherData);
    console.log(processedData);
}
export {displayData}

function displayData(data)
{   
    clearData();
    const datadiv = document.getElementById('data');
    const temp = document.createElement('div');
    const wind = document.createElement('div');
    const humidity = document.createElement('div');
    temp.innerHTML = 'Temperature: ' + data.fahrenheit + ' Fahrenheit';
    wind.innerHTML = 'Wind Speed: ' + data.wind + ' mph';
    humidity.innerHTML = 'Humidity: ' + data.humidity + '%';
    datadiv.appendChild(temp);
    datadiv.appendChild(wind);
    datadiv.appendChild(humidity);
}

function clearData()
{
    const datadiv = document.getElementById('data')
    while (datadiv.firstChild) {
        datadiv.removeChild(datadiv.firstChild);
    }
}
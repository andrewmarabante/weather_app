export {displayData}

function displayData(data)
{   
    clearData();
    const datadiv = document.getElementById('data');
    const temp = document.createElement('div');
    const wind = document.createElement('div');
    const humidity = document.createElement('div');
    temp.innerHTML = data.fahrenheit;
    wind.innerHTML = data.wind;
    humidity.innerHTML = data.humidity;
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
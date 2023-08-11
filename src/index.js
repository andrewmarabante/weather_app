const check = document.getElementById('check');
check.addEventListener('click', checkAPI);

function checkAPI()
{
    fetch('https://api.weatherapi.com/v1/current.json?key=6ad84aae75f24b31a40222612231108&q=temecula',  {mode: 'cors'})
    .then(function(response) {
        console.log(response.json());
      });
}
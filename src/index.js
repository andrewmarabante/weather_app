const check = document.getElementById('check');
check.addEventListener('click', checkAPI);

function checkAPI(e)
{
    const location = document.getElementById('formlocation').value;
    e.preventDefault();
    fetch(`https://api.weatherapi.com/v1/current.json?key=6ad84aae75f24b31a40222612231108&q=${location}`,  {mode: 'cors'})
    .then(function(response) {
        console.log(response.json());
      });
}
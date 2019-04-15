let weatherRequest = new XMLHttpRequest();
let apURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5784154&units=imperial&APPID=c5d7feb7062584451dcd1e98e37cb26f';
weatherRequest.open('Get', apURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('cc-current2').innerHTML = weatherData.weather[0].description;
    document.getElementById('cc-high2').innerHTML = weatherData.main.temp_max;
    document.getElementById('cc-wind2').innerHTML = weatherData.wind.speed;
    document.getElementById('cc-humidity2').innerHTML = weatherData.main.humidity;

   }
  
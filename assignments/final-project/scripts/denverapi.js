let weatherRequest2 = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=4463523&units=imperial&APPID=c5d7feb7062584451dcd1e98e37cb26f';
weatherRequest2.open('Get', apiURLstring, true);
weatherRequest2.send();

weatherRequest2.onload = function() {
    let weatherData = JSON.parse(weatherRequest2.responseText);
    console.log(weatherData);

    document.getElementById('cc-current').innerHTML = weatherData.weather[0].description;
    document.getElementById('cc-high').innerHTML = weatherData.main.temp_max;
    document.getElementById('cc-wind').innerHTML = weatherData.wind.speed;
    document.getElementById('cc-humidity').innerHTML = weatherData.main.humidity;

   }
  
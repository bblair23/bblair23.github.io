let weatherRequest4 = new XMLHttpRequest();
let apiURLstring4 = 'https://api.openweathermap.org/data/2.5/weather?id=4167147&units=imperial&APPID=c5d7feb7062584451dcd1e98e37cb26f';
weatherRequest4.open('Get', apiURLstring4, true);
weatherRequest4.send();

weatherRequest4.onload = function() {
    let weatherData = JSON.parse(weatherRequest4.responseText);
    console.log(weatherData);

    document.getElementById('cc-current4').innerHTML = weatherData.weather[0].description;
    document.getElementById('cc-high4').innerHTML = weatherData.main.temp_max;
    document.getElementById('cc-wind4').innerHTML = weatherData.wind.speed;
    document.getElementById('cc-humidity4').innerHTML = weatherData.main.humidity;

   }
  
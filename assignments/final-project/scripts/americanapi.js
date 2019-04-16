let weatherRequest3 = new XMLHttpRequest();
let apiURLstring3 = 'https://api.openweathermap.org/data/2.5/weather?id=5844096&units=imperial&APPID=c5d7feb7062584451dcd1e98e37cb26f';
weatherRequest3.open('Get', apiURLstring3, true);
weatherRequest3.send();

weatherRequest3.onload = function() {
    let weatherData = JSON.parse(weatherRequest3.responseText);
    console.log(weatherData);

    document.getElementById('cc-current3').innerHTML = weatherData.weather[0].description;
    document.getElementById('cc-high3').innerHTML = weatherData.main.temp_max;
    document.getElementById('cc-wind3').innerHTML = weatherData.wind.speed;
    document.getElementById('cc-humidity3').innerHTML = weatherData.main.humidity;

   }
  
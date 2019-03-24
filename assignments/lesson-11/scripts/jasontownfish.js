var article = document.querySelector('article');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
var townData = request.response;
homepage(townData);
}

function homepage(jsonObj) {
var data = jsonObj['towns'];
  
var i = 1       
    
var myArticle = document.createElement('article');
var myPara1 = document.createElement('h5');
var myPara2 = document.createElement('h5');
var myPara3 = document.createElement('h5');
var myPara4 = document.createElement('h5');

myPara1.textContent =  data[i].events[0];
myPara2.textContent =  data[i].events[1];
myPara3.textContent =  data[i].events[2];
myPara4.textContent =  data[i].events[3];

   
myArticle.appendChild(myPara1);
myArticle.appendChild(myPara2);
myArticle.appendChild(myPara3);
myArticle.appendChild(myPara4);

  
article.appendChild(myArticle);

}














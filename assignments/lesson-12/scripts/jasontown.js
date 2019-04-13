
    var article = document.querySelector('article');
    var request = new XMLHttpRequest();
    request.open("GET", "C:\Users\bblai\Documents\GitHub\bblair23.github.io\assignments\lesson-12\scripts\town.json");
    request.responseType = 'json';
    request.send();

    request.onload = function() {
    var townData = request.response;
    homepage(townData);
}

function homepage(jsonObj) {
  var data = jsonObj['towns'];
      
  for (var i = 0; i < data.length; i++) {
     
    var myArticle = document.createElement('div');
    var myH5 = document.createElement('h5');
    var myPara1 = document.createElement('h6');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myPara4 = document.createElement('p');
    var townImage = document.createElement('img');

    myH5.textContent = data[i].name;
    myPara1.textContent =  data[i].motto;
    myPara2.textContent = 'Year Founded: ' + data[i].yearFounded;
    myPara3.textContent = 'Current Population: ' + data[i].currentPopulation;
    myPara4.textContent = 'Average Rainfall ' + data[i].averageRainfall;
        
    
    myArticle.appendChild(myH5);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(townImage);
        if (i == 0)
            townImage.src = 'images/img1.jpg'
            townImage.setAttribute( 'class', 'townImg' )
        if (i == 1)
            townImage.src = 'images/img2.jpg'
            townImage.setAttribute( 'class', 'townImg' )
        if (i == 2)
            townImage.src = 'images/img3.jpg'
            townImage.setAttribute( 'class', 'townImg' )
        if (i == 3)
            townImage.src = 'images/img3.jpg'
            townImage.setAttribute( 'class', 'townImg' )
        
    article.appendChild(myArticle);
  }

}
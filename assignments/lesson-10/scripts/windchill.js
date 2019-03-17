
    
    var t = parseInt(document.getElementById('currentTemp').innerHTML);
    var s = parseInt(document.getElementById('wind').innerHTML);
    
    var chill = 35.74 + (.6215 * t) - 35.75 * Math.pow(s,0.16) + (.4275 * t * Math.pow(s,.16));
	
	var digits = 0;
    var multiplier = Math.pow(10, digits);
    chill = Math.round(chill * multiplier) / multiplier;
	
    document.write(chill);
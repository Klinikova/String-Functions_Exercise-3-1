// Initialize variables
var cityItem = "Chicago";   //Global Variable
var cityItem = "Boston";   //Global Variable
var cityItem = "Toronto";  //Global Variable
var cityItems = "";        //Global Variable

var $ = function (id) {
    return document.getElementById(id);
}

var searchCity = function ()
{
    var cities = $("cities").value;
	
	
	var citiesLower = cities.toLowerCase();
	var citiesEnteredLower = citiesEntered.toLowerCase();
    
   	var foundStartPos = citiesEntered.indexOf(cities);
	
	if (foundStartPos >= 0)
	{
        var cityLen = cities.length;
        
        var firstPart = citiesEntered.substr(0, foundStartPos);
        var lastPart = citiesEntered.substr(foundStartPos + cityLen);
                var chicagoMsg = "Chicago was on the list!"
		
		$("msg").innerHTML = firstPart + lastPart + chicagoMsg;
		
	}
	else
	{
		$("msg").innerHTML = "Chicago was NOT found in the list!<br><br>" + citiesEntered;
	}
               
    $("cities").value = "";
    $("cities").focus();  
}

window.onload = function ()
{
	$("mysearchbutton").onclick = searchItem;  
    $("item").focus();   
}
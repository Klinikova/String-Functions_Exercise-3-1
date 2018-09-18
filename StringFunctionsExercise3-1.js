var $ = function (id) {
    return document.getElementById(id);
}

var searchCity = function ()
{
    var cities = ['Chicago', 'Boston', 'Toronto'];
    var inputCity = $("city").value;
    var outputCity = capitalizeFirstLetter(inputCity);
    
   	var foundStartPos = cities.indexOf(outputCity);
	
	if (foundStartPos >= 0)
	{   
		$("msg").innerHTML = outputCity + " was found in the list!";
		
	}
	else
	{
		$("msg").innerHTML = outputCity +  " was NOT found in the list!";
	}
    $("cities").innerHTML = cities.join(", ");         
    $("city").value = ""; 
}

function capitalizeFirstLetter(string) {
    string = string.split(' ');

    for (var i = 0; i < string.length; i++) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1).toLowerCase(); 
    }
    return string.join(' ');
}

window.onload = function ()
{
	$("mysearchbutton").onclick = searchCity;  
      
}
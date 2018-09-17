// Initialize variables
var cityItem = "Chicago";   //Global Variable
var cityItem = "Boston";   //Global Variable
var cityItem = "Toronto";  //Global Variable
var cityItems = "";        //Global Variable

var $ = function (id) {
    return document.getElementById(id);
}
	
	if (cityItem == "Chicago")
	{
		
		$("msg").innerHTML = $("msg").innerHTML = item + " was found in the list!"; //firstPart + middlePart + lastPart;
		
	}
	else
	{
		$("msg").innerHTML = item + " was NOT found in the list!";
	}
               
    $("item").value = "";
    $("item").focus();  
}

window.onload = function ()
{
	$("mysearchbutton").onclick = searchItem;  
    $("item").focus();   
}
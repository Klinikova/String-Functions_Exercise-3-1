var cityItem = "Chicago";  //Global Variable
var cityItem = "Boston"; 
var cityItem = "Toronto"; 
var cityItems = "";

var $ = function (id) {
    return document.getElementById(id);
}

var searchItem = function ()
{
    var item = $("item").value;
	
	
	var itemLower = item.toLowerCase();
	var cityItemsLower = cityItems.toLowerCase();
    
   	var foundStartPos = cityItemsLower.indexOf(itemLower);
	
	if (foundStartPos >= 0)
	{
		var itemLen = item.length;
		
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
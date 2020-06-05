function GetSelectedRadioValue(name){
	var options = document.getElementsByName(name);
	for(var i =0; i < options.length; i++){
		if(options[i].checked == true){
			return options[i].value;
		}
	}
	return null;
}
function GetSelectedRadioIndex(name){
	var options = document.getElementsByName(name);
	for(var i =0; i < options.length; i++){
		if(options[i].checked == true){
			return i;
		}
	}
	return null;
}
function GetSelectedRadio(name){
	var options = document.getElementsByName(name);
	for(var i =0; i < options.length; i++){
		if(options[i].checked == true){
			return options[i];
		}
	}
	return null;
}
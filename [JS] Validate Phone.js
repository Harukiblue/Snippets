
function convertToPhone(val){
	if(val == null || val == ""){return null;}
	var RTN = false;
	var original = val;
	val = val.replace(/\s/g,"").replace(/\(/g,"").replace(/\)/g,"").replace(/\./g,"").replace(/-/g,"");
	if(val.length > 3 && val.length < 12){
		var pattern;
		if(val.length > 3 && val.length < 8){
			pattern = "xxx-xxxx";
		}else if(val.length > 7 && val.length < 11){
			pattern = "(xxx) xxx-xxxx";
		}else{
			pattern = "x(xxx) xxx-xxxx";
		}
		for(var i = 0; i < val.length; i++){
			pattern = pattern.replace("x",val.substring(i,i+1));
			//console.log(pattern, val.substring(i,i+1));
		}
		//remove extra characters
		pattern = pattern.replace(/x/g,"");
		return pattern;
	}else{
		//there are too many characters
		return original;
	}
}
function validatePhone(elementValue){
	return /^[0-9]?[ |\.]?[\(]?[0-9]{3}[\)]?[ |\-|\.]?[0-9]{3}[-|\.]?[0-9]{4}$/.test(elementValue)
}
function patternReplace(text, key, value){
	var regExp = new RegExp(key, "g");
	return text.replace(regExp, value);	
}

var regExp = new RegExp(myString, "g");
text.replace(regExp, '');
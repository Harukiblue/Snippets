function Radio(name){
	this.name = name;
	this.options = document.getElementsByName(name);
}
Radio.prototype.GetValue = function(){
	for(var i =0; i < this.options.length; i++){
		var option = this.options[i];
		if(option.checked === true){
			return options.value;
		}
	}
	return null;
}
Radio.prototype.GetIndex = function(){
	for(var i =0; i < this.options.length; i++){
		var option = this.options[i];
		if(option.checked === true){
			return i;
		}
	}
	return null;
}
Radio.prototype.GetOption = function(){
	for(var i =0; i < this.options.length; i++){
		var option = this.options[i];
		if(option.checked === true){
			return option;
		}
	}
	return null;
}
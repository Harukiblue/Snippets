function Select(id){
	this.id = id;
	this.elem = document.getElementById(id);
}
Select.prototype.GetValue = function(){
	return this.elem.options[this.elem.selectedIndex].value;
}
Select.prototype.SetValue = function(value){
	for(var i = 0; i < this.elem.options.length; i++){
		if(this.elem.options[i].innerHTML === value || this.elem.options[i].value === value){
			this.elem.selectedIndex = i;
		}
	}
}

function Phone(value){
	if(value !== undefined) this.value = this.convertToPhone(value);
}
Phone.prototype.convertToPhone = function(value){
    if(value === undefined || value === null || value === ""){return null;}
    var original = value;
    value = value.replace(/\s/g,"").replace(/\(/g,"").replace(/\)/g,"").replace(/\./g,"").replace(/-/g,"");
    if(value.length > 3 && value.length < 12){
        var pattern;
        if(value.length > 3 && value.length < 8){
            pattern = "xxx-xxxx";
        }else if(value.length > 7 && value.length < 11){
            pattern = "(xxx) xxx-xxxx";
        }else{
            pattern = "x(xxx) xxx-xxxx";
        }
        for(var i = 0; i < value.length; i++){
            pattern = pattern.replace("x",value.substring(i,i+1));
        }
        pattern = pattern.replace(/x/g,"");
        return pattern;
    }else{
        return original;
    }
};
Phone.prototype.Validate = function(){
    return /^[0-9]?[ |\.]?[\(]?[0-9]{3}[\)]?[ |\-|\.]?[0-9]{3}[-|\.]?[0-9]{4}$/.test(this.value)
}
Phone.prototype.AddPhones = function(className){
	var ctx = this;
	className = (className === undefined || className === null || className === "") ? "currency" : className;
	var phones = document.getElementsByClassName(className);
	for(var i = 0; i < phones.length; i++){
		phone = phones[i];
		phone.addEventListener("change", function(e){
			var target = e.srcElement || e.target;
			var value = target.value;
			var result = ctx.convertToPhone(value);
			target.value = result === 0 ? "" : result;
		});
    }
}
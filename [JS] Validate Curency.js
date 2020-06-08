/**
* Currency
**/
function Currency(value){
	this.value = covertToCurrency(value);
}

Currency.prototype.convertToFloat = function(value){
	var RTN = parseFloat(value.replace(/[,|$]/g,""));
	return isNaN(RTN) ? 0.00: RTN;
}
Currency.prototype.covertToCurrency = function(value){
	var RTN = "" + convertToFloat(value);
	RTN = RTN.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
	return RTN.indexOf(".") == -1 ? RTN + ".00" : RTN;
}
Currency.prototype.Validate = function(value){
	return /(?=.)^\$?(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+)?(\.[0-9]{1,2})?$/.test(value);
}
Currency.prototype.AddCurrencies = function(){
	var ctx = this;
	var currencies = document.getElementsByClassName("currency");
	for(var i = 0; i < currencies.length; i++){
		//default Value
		currencies[i].value = (currencies[i].value === "" || currencies[i].value === null || currencies[i].value === undefined) ? "0.00" : currencies[i].value;
		//On Focus
		currencies[i].addEventListener("focus", function(e){
			var target = e.srcElement || e.target;
			var val = target.value;
			var RTN = ctx.convertToFloat(val);
			target.value = RTN === 0 ? "" : RTN;
		});
		//On Blur
		currencies[i].addEventListener("blur", function(e){
			var target = e.srcElement || e.target;
			var val = target.value;
			target.value = ctx.covertToCurrency(val);
		});
	}
}
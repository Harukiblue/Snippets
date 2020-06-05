function DOMModifier(){
	
}
DOMModifier.prototype.Select = function(s){
	if(s === undefined || s === null || typeof(s) !== "string"){
		s = "";
	}else{
		s = s.trim();
	}		
	var result = document.querySelectorAll(s);
	this.selector = s;
	this.selected = result;
	return this;
}
DOMModifier.prototype.removeClass = function(clss){
	this.selected.forEach(function(elem){
		var RTN = "";
		var origClass = elem.getAttribute("class");
		if(origClass === null || origClass === undefined){origClass = "";}
		RTN = " " + origClass + " ";
		RTN = RTN.replace(new RegExp(" " + clss + " ", "g")," ");
		RTN = RTN.trim();
		if(RTN !== ""){
			elem.setAttribute("class", RTN);
		}else{
			elem.removeAttribute("class");
		}
		return RTN;
	});
}
DOMModifier.prototype.addClass = function(clss){
	this.selected.forEach(function(elem){
		var origClass = elem.getAttribute("class");
		if(origClass === null || origClass === undefined){origClass = "";}
		origClass = origClass.trim();
		if(origClass.indexOf(clss) == -1){
			var newClass = origClass + " " + clss
			newClass = newClass.trim();
			elem.setAttribute("class", newClass);
		}
		return elem.getAttribute("class");

	});
}

var DM = new DOMModifier();
var $ = DM.Select.bind(DM); //optional Facade
/**
Example
**/
$(".item").addClass("add");
$(".item").removeClass("remove");

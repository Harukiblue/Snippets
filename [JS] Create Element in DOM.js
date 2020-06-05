function DOMModifier(){
	this.browser = new this.BrowserDetector();
}
DOMModifier.prototype.Select = function(s, i){
	if(s === undefined || s === null || typeof(s) !== "string"){
		s = "";
	}else{
		s = s.trim();
	}	
	var result = document.querySelectorAll(s);
	this.selector = s;
	this.selected = result;
	this.selectedIndex = i !== undefined ? i: result.length === 0 ? -1 : 0;
	this.hasSelected = (this.selected.length > 0 && this.selectedIndex > -1);
	this.selectedElem =  this.hasSelected ? this.selected[this.selectedIndex] : document;
	return this;
}
DOMModifier.prototype.add = function(obj){
	if(obj === undefined){return;}
	if(obj.tag === undefined){return;}
	if(obj.par === undefined && this.hasSelected ){obj.par = this.selectedElem;}
	if(obj.par === undefined && !this.hasSelected ){return;}
	
	var elem = document.createElement(obj.tag);
	var par = obj.par;
	if(obj.id){elem.setAttribute("id", obj.id);}
	if(obj.clss){elem.setAttribute("class", obj.clss);}
	if(obj.type){elem.setAttribute("type", obj.type);}
	if(obj.value){elem.setAttribute("value", obj.value);}
	if(obj.innerHTML){elem.innerHTML = obj.innerHTML;}
	
	par.appendChild(elem);
}
DOMModifier.prototype.remove = function(elem){
	if(typeof(elem) === "string"){this.Select(elem); elem = undefined;}
	if(elem === undefined && this.hasSelected ){elem = this.selectedElem;}
	if(elem === undefined && !this.hasSelected ){return;}
	elem.parentNode.removeChild(elem);
}
/**
Instantiate
- optional Facade
**/
var DM = new DOMModifier();
var $ = DM.Select.bind(DM);
/* 
//Create element
	$(".item").add({
		tag: "TEXTAREA",
		id: "test1",
		clss: "test",
		value: "P",
		innerHTML: "THIS IS A TEST",
	});
	$(".item").add({
		tag: "INPUT",
		id: "test2",
		clss: "test",
		type: "text",
		value: "THIS IS A TEST",
	});
*/
/*
//remove
	$(".item").remove();
*/
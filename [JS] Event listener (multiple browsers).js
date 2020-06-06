function addEvent(elem, evnt, funct){
	if(elem === null || elem === undefined){return;}
	if (elem.attachEvent){
    return elem.attachEvent('on'+evnt, funct);
  }
  return elem.addEventListener(evnt, funct, false);
}

addEvent(document.getElementById("elem"), "click", function(e){
  var target = e.srcElement || e.target;  
});
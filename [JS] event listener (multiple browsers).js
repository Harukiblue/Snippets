function addEvent(el, evnt, funct){
	if(el === null || el === undefined){return;}
	if (el.attachEvent)
		return el.attachEvent('on'+evnt, funct);
	else
		return el.addEventListener(evnt, funct, false);
}



function recreateNode(el, withChildren) {
  if (withChildren) {
    el.parentNode.replaceChild(el.cloneNode(true), el);
  }
  else {
    var newEl = el.cloneNode(false);
    while (el.hasChildNodes()) newEl.appendChild(el.firstChild);
    el.parentNode.replaceChild(newEl, el);
  }
}

//Remove event listeners on one element:
recreateNode(document.getElementById("btn"));
//Remove event listeners on an element and all of its children:
recreateNode(document.getElementById("list"), true);

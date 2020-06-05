function GetSelectedValue(sel){
	return sel.options[sel.selectedIndex].value;
}

function SelectByValue(sel, val){
	for(var i = 0; i < sel.options.length; i++){
		if(sel.options[i].innerHTML == val){
			sel.selectedIndex = i;
		}
	}
}
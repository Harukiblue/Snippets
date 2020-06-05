function CopyToClipboard(elemId){
	var selectText = function(containerid) {
		if (document.selection) {
			var range = document.body.createTextRange();
			range.moveToElementText(document.getElementById(containerid));
			range.select();
		} else if (window.getSelection) {
			window.getSelection().removeAllRanges()
			var range = document.createRange();
			range.selectNode(document.getElementById(containerid));
			window.getSelection().addRange(range);
		}
	};
	
	selectText(elemId);
	try {
		var successful = document.execCommand('copy');
	} catch (err) {
	}
	window.getSelection().removeAllRanges();
}
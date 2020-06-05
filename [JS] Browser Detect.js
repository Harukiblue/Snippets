function BrowserDetector(){
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    this.version = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	this.isIE = true;
	return this;
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    var rv = ua.indexOf('rv:');
    this.version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	this.isIE = true;
	return this;
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    this.version = parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	this.isIE = true;
	return this;
  }
  this.version = "";
  this.isIE = false;
}
/**
Example
**/
var Browser = new BrowserDetector();
// console.log(Browser.isIE);
// console.log(Browser.version);
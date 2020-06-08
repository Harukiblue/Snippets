function RegReplace(text, pattern, value,options){
	options = options === undefined ? "g" : options;
	text.replace(new RegExp(pattern, options), value);
}
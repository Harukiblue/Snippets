function RegReplace(text, key, value,options){
	options = options === undefined ? "g" : options;
	text.replace(new RegExp(key, options), value);
}
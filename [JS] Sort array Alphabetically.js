function ObjectArray(arr){
	this.array = arr === undefined ? new Array() : arr;
}
ObjectArray.prototype.Sort = function(key){
	key = key === undefined ? Object.keys(arr)[0] : key;
	this.array = this.array.sort(function(a, b){
		if(a[key] < b[key]) return -1;
		if(a[key] > b[key]) return 1;
		return 0;
	});
	return this.array;
}

//Example
var t1 = [{property: "c"}, {property: "b"}, {property: "a"}];
var t2 = new ObjectArray(t1);
var t3 = new ObjectArray(t1);

console.log(t1);
console.log(t2.Sort());
console.log(t3.Sort("property"));
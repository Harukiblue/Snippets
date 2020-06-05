/**
* sortArrayAlpha
*	
*/
function sortArrayAlpha(arr, key){
	arr.sort(function(a, b){
		if(a[key] < b[key]) return -1;
		if(a[key] > b[key]) return 1;
		return 0;
	});
	return arr;
}
/**
* Example
*	
*/
var t1 = [{property: "c"}, {property: "b"}, {property: "a"}];
var t2 = [{property: "c"}, {property: "b"}, {property: "a"}];

//console the 2 arrays
console.log(t1);
console.log(sortArrayAlpha(t2,"property"));
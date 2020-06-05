var arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]; 

/*ITERATE OVER DATA*/
	//for loop
	var output = [];
	for(var i = 0; i < arr.length; i++){
		output.push(arr[i]);
	}
	console.log("[Iterate Over Data] for loop:", output);

	//for each  
	var output = [];
	arr.forEach(function(item){
		output.push(item);
	});
	console.log("[Iterate Over Data] for each:", output);
	
	//for each arrow function
	var output = [];
	arr.forEach(item => output.push(item));
	console.log("[Iterate Over Data] for each arrow function:", output);
	
/*FILTER DATA*/
	//filtered for loop
	var output = [];
	for(var i = 0; i < arr.length; i++){
		if(arr[i] > 5){
			output.push(arr[i]);
		}
	}
	console.log("[Filter Data] filtered for loop:", output);

	//filtered for each
	var output = [];
	arr.forEach(function(item){
		if(item > 5){
			output.push(item);
		}
	});
	console.log("[Filter Data] filtered for each:", output);

	//filtered for each arrow function
	var output = [];
	arr.forEach(item => {if(item > 5) output.push(item)});
	console.log("[Filter Data] filtered for each arrow function:", output);

	//filter function
	var output = arr.filter(function(item){
		if(item > 5){
			return true;
		}
	});
	console.log("[Filter Data] filter function:", output);

	//filter arrow function
	var output = arr.filter(item => item > 5);
	console.log("[Filter Data] filter arrow function:", output);
	
/*TRANSFORM DATA*/
	//for loop data transform
	var output = [];
	for(var i = 0; i < arr.length; i++){
		output.push(arr[i] * 2);
	}
	console.log("[Transform Data] for loop data transform:", output);
	
	//for each data transform
	var output = [];
	arr.forEach(function(item){
		output.push(item * 2);
	});
	console.log("[Transform Data] for each data transform:", output);
	
	//for each arrow function data transform
	var output = [];
	arr.forEach(item => output.push(item * 2))
	console.log("[Transform Data] for each arrow function data transform:", output);
	
	//map data transform
	var output = arr.map(function(item){
		return item * 2;
	});
	console.log("[Transform Data] map data transform:", output);
	
	//map arrow function data transform
	var output = arr.map(item => item * 2);
	console.log("[Transform Data] map arrow function data transform:", output);

/* SORT DATA*/
	//data sort
	var output = arr.sort(function(a,b){
		if(a < b){
			return 1
		}else{
			return -1
		}
	});
	console.log("[Sort Data] data sort:", output);
	
	//data sort ternary
	var output = arr.sort(function(a,b){
		return (a > b) ? 1: -1;
	});
	console.log("[Sort Data] data sort ternary:", output);
	
	//data sort ternary arrow function
	var output = arr.sort((a,b) => (a > b) ? 1: -1);
	console.log("[Sort Data] data sort ternary arrow function:", output);
	
	//data sort shortcut arrow function 
	var output = arr.sort((a,b) => a - b);
	console.log("[Sort Data] data sort arrow function shortcut:", output);
	
/*SUMMARIZE DATA*/
	//for loop summary
	var sum = 0;
	for(var i = 0; i < arr.length; i++){
		sum += arr[i]
	}
	console.log("[Summarize Data] for loop summary:", sum);
	
	//for each summary
	var sum = 0;
	arr.forEach(function(item){
		sum += item
	});
	console.log("[Summarize Data] for each summary:", sum);
	
	//for each arrow function summary
	var sum = 0;
	arr.forEach(item => sum += item);
	console.log("[Summarize Data] for each arrow function summary:", sum);
	
	//reduce
	var sum = arr.reduce(function(total, item){
		return total + item;
	}, 0);
	console.log("[Summarize Data] reduce summary:", sum);
	
	//reduce arrow function
	var sum = arr.reduce((total, item) => total + item, 0);
	console.log("[Summarize Data] reduce arrow function summary:", sum);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

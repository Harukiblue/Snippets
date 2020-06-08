// traditional switch
var condition = 1;
switch(condition){
	case 1:
		console.log("one");
	break;
	case 2:
		console.log("two");
	break;
	case 3:
		console.log("three");
	break;
	case 4:
		console.log("four");
	break;
}

// switch alternative
var condition = 1;
var collection = new Array();
collection.push({condition: 1, log: function(){console.log("one")}});
collection.push({condition: 2, log: function(){console.log("two")}});
collection.push({condition: 3, log: function(){console.log("three")}});
collection.push({condition: 4, log: function(){console.log("four")}});
collection.forEach(function(item){
	if(item.condition === condition){
		item.log();
	}
});

// switch alternative with fat arrow functions
var condition = 1;
var collection = new Array();
collection.push({condition: 1, log: => console.log("one")});
collection.push({condition: 2, log: => console.log("two")});
collection.push({condition: 3, log: => console.log("three")});
collection.push({condition: 4, log: => console.log("four")});
collection.forEach((item) => {
	if(item.condition === condition){
		item.log();
	}
});

// Swtich class to handle switch statements with object oriented apporach
function Switch(){
	this.collection = new Array();
}
Switch.prototype.Add = function(condition, callback){
	this.collection.push({_condition:  condition, _callback: callback});
}
Switch.prototype.DoIf = function(condition){
	for(var i = 0; i < this.collection.length; i++){
		if(this.collection[i]._condition === condition) return this.collection[i].callback();
	}
	return null;
}

/**
 * Example
 */
var condition = 1;
var handleCase = new Switch();
handleCase.Add(1, function(){console.log("one");});
handleCase.Add(2, function(){console.log("two");});
handleCase.Add(3, function(){console.log("three");});
handleCase.Add(4, function(){console.log("four");});
var results = handleCase.DoIf(condition);
/**
 * Example with fat arrows
 */
var condition = 1;
var handleCase = new Switch();
handleCase.Add(1,()=> console.log("one"));
handleCase.Add(2,()=> console.log("two"));
handleCase.Add(3,()=> console.log("three"));
handleCase.Add(4,()=> console.log("four"));
var results = handleCase.DoIf(condition);
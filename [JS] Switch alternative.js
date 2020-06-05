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

// switch alternative with arrow functions
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

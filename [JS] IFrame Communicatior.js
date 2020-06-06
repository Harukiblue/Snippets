/* place this in the parent page's top.js (or equivelant). 
The child will send messages to the parent, and the parent 
will switch the messages to conditionaly choose what to do 
based on the message recieved. */
function addEvent(elem, evnt, funct){
	if(elem === null || elem === undefined){return;}
	if (elem.attachEvent){
	return elem.attachEvent('on'+evnt, funct);
  }
  return elem.addEventListener(evnt, funct, false);
}
addEvent(window,"message", function(e) {
	IFRAMEMessageProcessor(e.data);
});
function IFRAMEMessageProcessor(data){
    switch(data){
		case "MESSAGE TO SEND 1":
			FunctionToDo1();
		break;
		case "MESSAGE TO SEND 2":
			FunctionToDo2();
		break;
		case "MESSAGE TO SEND 3":
			FunctionToDo3();
		break;
	}
}
/* place this in the child page. The "MESSAGE TO SEND" is what the parent will recieve. */
parent.postMessage("MESSAGE TO SEND", "*");
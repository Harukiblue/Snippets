<script> 
/* place this in the parent page's top.js (or equivelant). 
The child will send messages to the parent, and the parent 
will switch the messages to conditionaly choose what to do 
based on the message recieved. */
window.addEventListener("message", function(event) {
		note(event.data);
	IFRAMEMessageProcessor(event.data);
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
</script> 

<script> 
/* place this in the child page. The "MESSAGE TO SEND" is what the parent will recieve. */
	parent.postMessage("MESSAGE TO SEND", "*");
</script>
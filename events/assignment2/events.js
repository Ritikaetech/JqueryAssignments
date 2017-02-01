

$(document).ready(function(){

	jQuery('#click').click(function(){
   	 alert("The Link was clicked.");
   	 
	});

	$("#hover").hover(function(){
     alert('the link says google.com');

	});

	jQuery('#doubleclick').dblclick(function(){
   	 alert("The Link was double clicked.");
   	
	});
	$("#hover").hover(function(){
     alert('the link says google.com');

	});
	$("#mouseenter").mouseenter(function(){
     alert('this event is mouseenter');

	});
	$("#mouseout").mouseout(function(){
     alert('this event is mouseout');

	});
	$("#focus").focus(function(){
     $("#focus").css("color", "yellow");

	});
	
	$("#preventevent").click(function(event){
     event.preventDefault();

	});
});
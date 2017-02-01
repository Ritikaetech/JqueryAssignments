
$(document).ready(function(){

		$(".childspan").click(function(){
		var a=parent();
		return a;
	});
		$(".childspan2").click(function(){
		var b=parent2();
		return b;
	});
		$(".childspan3").click(function(){
		var c=parent3();
		return c;
	});
		$(".childspan4").click(function(){
		var d=parent4();
		return d;
	});


		$("#property").click(function(){
		if ($("#property").prop("checked")) {
			var w= checkall();

		}
		else{
			var w= uncheckall();
			
		}
		return w;
	});


		$("#property").click(function(){
		if ($("#property").prop("checked")) {
			var w= checkall();

		}
		else{
			var w= uncheckall();
			
		}
		return w;
	});


$("#property").click(function(){
		if ($("#property").prop("checked")) {
			var w= checkall();

		}
		else{
			var w= uncheckall();
			
		}
		return w;
	});


$("#testimonials").click(function(){
		if ($("#testimonials").prop("checked")) {
			var y= checkall2();

		}
		else{
			var y= uncheckall2();
			
		}
		return y;
	});

$("#users").click(function(){
		if ($("#users").prop("checked")) {
			var y= checkall3();

		}
		else{
			var y= uncheckall3();
			
		}
		return y;
	});

$("#Membership").click(function(){
		if ($("#Membership").prop("checked")) {
			var y= checkall4();

		}
		else{
			var y= uncheckall4();
			
		}
		return y;
	});






	function checkall()
	{
			$(".childspan").prop('checked',true);
		
	
	};
	function uncheckall()
	{
			$(".childspan").prop('checked',false);
		
	
	};	
	function checkall2()
	{
			$(".childspan2").prop('checked',true);
		
	
	};
	function uncheckall2()
	{
			$(".childspan2").prop('checked',false);
		
	
	};

	function checkall3()
	{
			$(".childspan3").prop('checked',true);
		
	
	};
	function uncheckall3()
	{
			$(".childspan3").prop('checked',false);
		
	
	};

	function checkall4()
	{
			$(".childspan4").prop('checked',true);
		
	
	};
	function uncheckall4()
	{
			$(".childspan4").prop('checked',false);
		
	
	};	


	function parent()
		{
	if(($("#editproperty").prop("checked")||$("#addproperty").prop("checked")||$("#removeproperty").prop("checked"))){
			$("#property").prop("checked",true);
			return true;	
		}
		else{
			$("#property").prop("checked",false);
			return true;
		}
		};	


		function parent2()
		{
	if(($("#edit").prop("checked")||$("#view").prop("checked")||$("#add").prop("checked")||$("#remove").prop("checked"))){
			$("#testimonials").prop("checked",true);
			return true;	
		}
		else{
			$("#testimonials").prop("checked",false);
			return true;
		}
		};
		function parent3()
		{
	if(($("#edituser").prop("checked")||$("#viewuser").prop("checked")||$("#adduser").prop("checked"))){
			$("#users").prop("checked",true);
			return true;	
		}
		else{
			$("#users").prop("checked",false);
			return true;
		}
		};
		function parent4()
		{
	if(($("#editmembership").prop("checked")||$("#addmembership").prop("checked")||$("#removemembership").prop("checked"))){
			$("#Membership").prop("checked",true);
			return true;	
		}
		else{
			$("#Membership").prop("checked",false);
			return true;
		}
		};
});


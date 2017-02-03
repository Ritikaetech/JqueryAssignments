$(document).ready(function()
{
    $("#add").click(function()
	{
    	event.preventDefault();
        $(".content").append("<div class='content2'><input type='search'></input><input type='file'></input><select><option>SEcondary Image</option></select><a href='#' class='remove'> remove</a><br><br></div>");
   	});
  
    $(document).on("click", ".remove", function()
	{
    	event.preventDefault();
	$(this).parent("div").remove();
	});
});

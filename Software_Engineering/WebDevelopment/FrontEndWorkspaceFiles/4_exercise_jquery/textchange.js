/*
TODO: Currently, the opacity of the ul element is set to zero.
You can see this in the style.css file. Hence, the tasks are not showing up.

Write jQuery code that does the following:
- when clicking on the word "tasks" in the sentence, "these are my tasks", fade in the ul element
- hint: if you look at the html, the word tasks is surrounded by a span element with an id called "fade_in_tasks".
- hint: https://api.jquery.com/id-selector/
- hint: https://api.jquery.com/click/
- hint: http://api.jquery.com/fadein/
- hint: Don't forget to write code that waits for the html document to load. Re-watch the javascript screencast if you're stuck.
$( "#fade_in_tasks" ).click(function() {
$( "#main-content").fadeIn("slow", function() {


});
});
*/

$(document).ready(function () {
   $("body").hide().fadeIn("slow");
});
  
$(document).ready(function() {
   $("h1").click(function() {
    $("img").fadeOut("slow");
 });
});

 $(document).ready(function() {
   $( "img").click(function() {
    $("h1").text("yoyo check it out");
});
});

$(document).ready(function() {
	$( "#fade_in_tasks").click(function() {
	$( "ul").fadeIn("slow"); 
});
});



$(document).ready(function(){

	$("#menu").click(function(){
		
		$(".menu-container").addClass("menu-active");
			$("body").addClass("no-scroll");

			});
	/*	if ($(".sidebar-container").hasClass("sidebar-active")) {
			alert("hay");
		}
		else
		{
			$(".sidebar-container").addClass("sidebar-active");
			$("body").addClass("no-scroll");
		}
*/
	$("#x").click(function(){

		$("body").removeClass("no-scroll");
  		$(".menu-container").removeClass("menu-active");

	});

	$("#about").click(function(){
		$("#aboutsub").addClass("show");
	});


		
/*	
if ($(".sidebar-container").hasClass("sidebar-active")) {

  $("body").removeClass("no-scroll");
  $(".sidebar-container").removeClass("sidebar-active");
  
}
else {
  $(".sidebar-container").addClass("sidebar-active");
  $("body").addClass("no-scroll");
  alert("hello");
 */

$(window).scroll(function(){

var offsetY = $(window).scrollTop();
var waypoint = $("#contentWrapper").offset().top;
var progress = offsetY / waypoint;
var translate = -240 * progress;
var zoom= 1 + 0.2 *progress;
if (progress>= 0 && progress<=1) {
$("#landing").css("transform", "translateY("+translate+"px)");
$("#landing").css("transform", "scale("+zoom+")");

}

});
	/*
	$("#contentWrapper").waypoint(function(direction){

		alert("!");
	});
*/
});
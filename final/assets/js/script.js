$(document).ready(function(){

	$("#menu-button").click(function(){
		$(".menu-container").addClass("menu-active");
	});

	$("#x").click(function(){
  		$(".menu-container").removeClass("menu-active");
	});
/*
  $("a").click(function () {

    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href')).offset().top
      }, 1000);
  })
*/
});
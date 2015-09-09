/*
$(window).load(function() {
		$(".se-pre-con").fadeOut("slow");;
	});
*/
$(document).ready(function(){

	$(".menu").click(function(){
			
		$(".menu-container").addClass("menu-active");
			$("body").addClass("no-scroll");

		});
		

		$(".x").click(function(){

			$("body").removeClass("no-scroll");
	  		$(".menu-container").removeClass("menu-active");

		});

			// for ingredients
		$(".ing-square").click(function(){
			
	      	$("#intro-desc").addClass("text-inactive");
	      	
			var name = $(this).attr('id');
			var desc = ".for[id='" + name + "-text']";
			$(".for").removeClass("text-active");
			$(".ing-square").removeClass("ing-active");
			$("#" + name).addClass("ing-active");
			$(desc).addClass("text-active");
		});

			// for products
		$(".prod-icon").click(function(){

			var prodname = $(this).attr('id');
			var proddesc = ".square[id='" + prodname + "']";
			$(".square").addClass("darken");
			$(proddesc).removeClass("darken");
			$(".prod-icon").removeClass("selected");
			$("#" + prodname).addClass("selected");
		});

	var w = window.innerHeight;
	var nav = $("nav");
	if (w < 900) {
		$(window).scroll(function(){
			if($(window).scrollTop() > 500  && $(".logo").hasClass("show") == false){
			    $(".logo").addClass("show");
			  }
		  else {
		  	return false;
		  }
			});
		
		$(window).scroll(function(){
			if($(window).scrollTop() > 800  && $(".about-section").hasClass("show") == false){
			    $(".about-section").addClass("show");
			  }
		  else {
		  	return false;
		  }
			});

		$("#about").click(function(){
			$("#aboutsub").addClass("show");
		});




		$("#clear").click(function(){
			$(".square").removeClass("darken");
			$(".prod-icon").removeClass("selected");
		});


	$(window).scroll(function(){
	  
		var offsetY = $(window).scrollTop();
		var waypoint = $(".content-wrapper").offset().top;
		var progress = offsetY / waypoint;
		var translate = -240 * progress;
		var zoom= 1 + 0.2 *progress;
		var light= 1 - (1.2 * progress);
		if (progress>= 0 && progress<=1) {

		$(".landing").css("opacity", light);
		}
		else {
			return false;
		}
	});


	var nav_container = $("#icon-wrapper");
	
	
		
	nav_container.waypoint({
	    handler: function(direction) {
	      	nav.toggleClass('sticky', direction=='down');
	      	if (direction == 'down')
	  			nav_container.css({ 'height': 60 });
			else
	  			nav_container.css({ 'height':'auto' });

	    }

	  });

	
}/* else {
	
	var ingredients = $("#ing-desc-wrapper");
	
	ingredients.waypoint({
	    handler: function(direction) {
	      	nav.toggleClass('sticky', direction=='down');
	      	if ($(".for").hasClass("text-active")== true) {
	      		$("#intro-desc").addClass("text-inactive");
	      	}

	      	if (direction == 'down')
	  			nav_container.css({ 'height': 10 });
			else
	  			nav_container.css({ 'height':'auto' });

	    }

	  });
	
}*/

});


$(document).ready(function(){

	$(window).scroll(function(){
		if($(window).scrollTop() > 500  && $(".logo").hasClass("show") == false){
		    $(".logo").addClass("show");
		  }
	  else {
	  	return false;
	  }
		});

	$(window).scroll(function(){
		if($(window).scrollTop() > 1200  && $(".about-section").hasClass("show") == false){
		    $(".about-section").addClass("show");
		  }
	  else {
	  	return false;
	  }
		});
	$(".menu").click(function(){
		
		$(".menu-container").addClass("menu-active");
			$("body").addClass("no-scroll");

			});
	

	$(".x").click(function(){

		$("body").removeClass("no-scroll");
  		$(".menu-container").removeClass("menu-active");

	});

	$("#about").click(function(){
		$("#aboutsub").addClass("show");
	});

// for ingredients
	$(".ing-square").click(function () {
		var name = $(this).attr('id');
		var desc = ".for[id='" + name + "-text']";
		$(".for").removeClass("text-active");
		$(".ing-square").removeClass("ing-active");
		$("#" + name).addClass("ing-active");
		$(desc).addClass("text-active");

	})

// for products
	$(".prod-icon").click(function () {
		var prodname = $(this).attr('id');
		var proddesc = ".square[id='" + prodname + "']";
		$(".square").addClass("darken");
		$(proddesc).removeClass("darken");
		$(".prod-icon").removeClass("selected");
		$("#" + prodname).addClass("selected");

	})

	$("#clear").click(function() {
		$(".square").removeClass("darken");
		$(".prod-icon").removeClass("selected");
	})

// for about carousel
  $("#carousel-next").click(function() {
    var count = (parseInt($('#carousel').css('margin-left').replace("px", "")));
    if (count <= -3648) {
      $("#carousel").css("margin-left", 0);
      return false;
    } else {
    $("#carousel").css("margin-left", (count - 912).toString() + "px");
	}
  })

  $("#carousel-prev").click(function() {
    var count2 = (parseInt($('#carousel').css('margin-left').replace("px", "")));
    if (count2 >= 0) {
      $("#carousel").css("margin-left", -3648);
      return false;
    } else {
    $("#carousel").css("margin-left", (count2 + 912).toString() + "px");
	}
  })


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

});

var nav_container = $("#icon-wrapper");
var nav = $("nav");
	
nav_container.waypoint({
    handler: function(direction) {
      	nav.toggleClass('sticky', direction=='down');
      	if (direction == 'down')
  			nav_container.css({ 'height': 60 });
		else
  			nav_container.css({ 'height':'auto' });

    }

  });

});


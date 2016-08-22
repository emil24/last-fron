$(function(){
	$(".container").animate({
		"opacity":"1"
	}, 2000);


	var homeHeight = $("#home").height();
	var logoHeight = $("#logo").height();
	var aboutHeight = $("#about").height();

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if(scroll > homeHeight/2){
			$("#logo .col-md-2:odd img").fadeIn().animate({"top":"0"}, 500);
			$("#logo .col-md-2:even img").fadeIn().animate({"top":"0"}, 500);

			$(".ab .col-md-6:odd").animate({"left":"0"});
			$(".ab .col-md-6:even").animate({"left":"0"});
		}
	});
	

	$("ul.atab li:first").addClass('aktiv');
	$("#about .ab").hide().filter(":first").show();
	$("ul.atab li").click(function(){
		$("ul.atab li").removeClass('aktiv');
		$(this).addClass('aktiv');

		var indis = $(this).index();

		$("#about .ab").hide();
		$("#about .ab:eq("+indis+")").fadeIn();

		$(".ab .col-md-6:odd").css({left: "-100%"}).animate({"left":"0"});
		$(".ab .col-md-6:even").css({right: "-100%"}).animate({"left":"0"});
	});

});
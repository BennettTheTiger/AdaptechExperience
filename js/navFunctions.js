// JavaScript Document

$( document ).ready(function() {
    console.log( "ready!" );
	$('.navHolder').hide();
	$('#myCanvas').hide();
	//defalt starting background
	$('body').css('background-image','url(assets/imgs/woods.jpg)')
	$('#woods').addClass('active');
	//removes all of the elements and prepares it for the next page
	 $("#beginButton").click(function(){
        $('.mainContainer').fadeOut(1000);
		$('.bgVideo').fadeOut(2000,menuSetup);
    });
	
	//when the done button is clicked 
	$('.done').click(function(){
		$('.navHolder').fadeOut(2000);
		$('#myCanvas').fadeOut(1500);
		$('.mainContainer').fadeIn(2000);
		$('.bgVideo').fadeIn(2000);
	});
	

	//fades the nav in
	function menuSetup(){
		$('.navHolder').fadeIn(1000);
		$('#myCanvas').fadeIn(1500);
  		console.log("draw the new nav");
	};
	
	//When the snow button is clicked
	$('#snow').click(function(){
		$(this).addClass('active');
		$('#woods').removeClass('active');
		$('#tree').removeClass('active');
		$('body').css('background-image','url(assets/imgs/snow.jpg)')
	});
	
	//when the woods button is clicked
	$('#woods').click(function(){
		$(this).addClass('active');
		$('#snow').removeClass('active');
		$('#tree').removeClass('active');
		$('body').css('background-image','url(assets/imgs/woods.jpg)')
	});
	
	//when the tree button is clicked
	$('#tree').click(function(){
		$(this).addClass('active');
		$('#snow').removeClass('active');
		$('#woods').removeClass('active');
		$('body').css('background-image','url(assets/imgs/treeLine.jpg)')
	});
	
	});
	
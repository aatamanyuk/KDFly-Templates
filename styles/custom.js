jQuery(document).ready(function() {
	$('.next-button').delay(4000).show(1000);
	jQuery('.next-button').click(function() {
		jQuery('#secondPage').css('display','block');
		jQuery('#firstPage').css('display','none');
	});
	
	
/*	jQuery('.next-button').delay(7000).fadeIn(function() {
		jQuery('.connect-button').delay(3000).fadeIn(400);
	});*/


});

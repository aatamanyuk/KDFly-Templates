jQuery(document).ready(function() {

	jQuery('.next-button').click(function() {
		jQuery('#secondPage').css('display','block');
		jQuery('#firstPage').css('display','none');
	});
	jQuery('.next-button').delay(3000).fadeIn(function() {
		jQuery('.connect-button').delay(3000).fadeIn(400);
	});

});
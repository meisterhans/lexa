$(document).ready(function() {

	$('select:not(.multiple)').niceSelect();
	// $('select.multiple').multipleSelect();
	$('.step').hide();
	$('.step.step1').show();
	$('.btn').click(function(){
		$(this).closest('.step').hide();
		$(this).closest('.step').next().show();
	});
});
$(document).ready(function() {

	$('select:not(.multiple)').niceSelect();
        $('select.multiple').multipleSelect();

        $('select.multiple option:selected:not(:disabled)').each(function(index, el){
            var append = $(el).html();
            var value = $(el).val();
            $('select.multiple').siblings('.chosen').append($('<span class="closable close" data-value="' + value + '">' + append + '</span>'))
        });

        function onSpanClick(e) {
            var element = e.target;
            var value = 'option[value=' + $(element).data('value') + ']';
            var options = $(element).closest('.form_column').find('select.multiple').val();
            options = options.filter(function(el) {
               return el != $(element).data('value');
            });
            $('select.multiple').multipleSelect('setSelects', options);
       }
        
       $('select.multiple').change(function(e) {
            $('select.multiple').siblings('.chosen').html('');
            var html = '';
            $(this).find('option:selected:not(:disabled)').each(function(index, el){
                html = $('select.multiple').siblings('.chosen').html();
                var append = $(el).html();
                var value = $(el).val();
                var span = '<span class="closable close" data-value="' + value + '">' + append + '</span>';                
                $('select.multiple').siblings('.chosen').html(html + span);      
                $('select.multiple').siblings('.chosen').find('.closable').click(onSpanClick);
            });
       });       

       $('select.multiple').siblings('.chosen').find('.closable').click(onSpanClick);
       
	$('.step').hide();
	$('.step.step1').show();
	$('.btn').click(function(){
		$(this).closest('.step').hide();
		$(this).closest('.step').next().show();
	});
});
$(document).ready(function() {	

    
    var video = document.querySelector('.video-js');
    var player = null;
    if(video) {
        player = videojs(document.querySelector('.video-js'));
        $('.video_popup').click(function(e){
            e.preventDefault();
            $('body').css({'overflow-y':'hidden'});
            player.pause();
            $('#video_modal').addClass('open');
            player.src($(this).data('video'));
            player.load();

        });
        $(".close, .modal_wrapper").click(function(){
          $('#video_modal').removeClass('open');
          $("body").css({"overflow-y": "auto"});
        });
    }    

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

        $('.copy').click(function() {
                var copyText = $(".company_form .step2 .content_link input")[0];

              /* Select the text field */
              copyText.select();
              copyText.setSelectionRange(0, 99999); /*For mobile devices*/

              /* Copy the text inside the text field */
              document.execCommand("copy");
        });
    

    $('.company_form input[type=file]').change(function(e) {
        $('.company_form .file_info').css({'display': 'block'});
    });
    
});



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
    
});



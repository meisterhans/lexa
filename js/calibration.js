$(document).ready(function() {	

    $('.calibration .test').click(function() {
        $('.calibration .watch_wrap').show();
        $(this).addClass('active');
        $('.calibration_window .calibration_image .calibration_indicator').hide();
    });

    var onPositionChanged = function(){
        var position = $('.calibration .watch_wrap').position().left;
        var top = $('.calibration .watch_wrap').position().top;
        if($('.calibration .watch_wrap').hasClass('top_wrap')) {
            $('.calibration_inner > .top > span').first().width(position - 50);
            $('.calibration_inner > .top > span').last().width($('.calibration_inner').width() - $('.calibration .watch_wrap').width() - position - 50 );
        }        
        if($('.calibration .watch_wrap').hasClass('right_wrap')) {
            $('.calibration_inner > .right > span').first().height(top - 20);
            if($(window).height() <= 800) {
                $('.calibration_inner > .right > span').last().height($('.calibration_inner').height() - top - 30);
            } else {
                $('.calibration_inner > .right > span').last().height($('.calibration_inner').height() - top + 20);
            }
            
        }
        if($('.calibration .watch_wrap').hasClass('bottom_wrap')) {
            $('.calibration_inner > .bottom > span').first().width(position - 50);
            $('.calibration_inner > .bottom > span').last().width($('.calibration_inner').width() - $('.calibration .watch_wrap').width() - position - 50 );
        }
        if($('.calibration .watch_wrap').hasClass('left_wrap')) {
            $('.calibration_inner > .left > span').first().height(top - 20);
            if($(window).height() <= 800) {
                $('.calibration_inner > .left > span').last().height($('.calibration_inner').height() - top - 30);
            } else {
                $('.calibration_inner > .left > span').last().height($('.calibration_inner').height() - top + 20);
            }            
        }
    };
    var counter = 0;
    var counter1 = 0;
    var counter2 = 0;
    var counter3 = 0;
    var counter4 = 0;
    var counter5 = 0;

    $('.calibration .end_test').click(function() {
        counter = 0;
        counter1 = 0;
        counter2 = 0;
        counter3 = 0;
        counter4 = 0;
        counter5 = 0;
        $('.calibration .test').show();
        $(this).hide();
        $('.calibration_inner > .bottom > span').width('100%').css('font-size', '0');
        $('.calibration_inner > .top > span').width('100%').css('font-size', '0');
        $('.calibration_inner > .right > span').height('100%').css('font-size', '0');
        $('.calibration_inner > .left > span').height('100%').css('font-size', '0');
        $('.calibration .watch_wrap').removeClass('right_wrap').removeClass('bottom_wrap').removeClass('left_wrap').addClass('top_wrap');
        $('.calibration .watch_wrap').removeClass('nohover').css({'left': '-1.5%', 'top' : '0%', 'transition-duration': '1s'});
        var old_element = $('.calibration .watch_wrap')[0];
        var new_element = old_element.cloneNode(true);
        old_element.parentNode.replaceChild(new_element, old_element);
        $('.calibration .watch_wrap').on('mouseenter', mouseOver);
        $(".calibration .watch_wrap").onPositionChanged(onPositionChanged);
    });

    

    function hover1() {
        $('.calibration .watch_wrap').addClass('nohover').css({'left': '92%', 'top': '100%', 'transition-duration': '0.6s'});
        if(counter2 < 1) {
            $('.calibration .watch_wrap')[0].addEventListener('transitionend', transitionend2, {once: true});
            ++counter2;
        }
    }
    function hover2() {
        $('.calibration .watch_wrap').removeClass('nohover');
        $('.calibration_inner > .bottom > span').css('font-size', '0');
        $('.calibration_inner > .left > span').css('font-size', 'inherit');
        $('.calibration .watch_wrap').removeClass('bottom_wrap').addClass('left_wrap');
        $('.calibration_inner > .bottom > span').width('100%');
        $('.calibration .watch_wrap').addClass('nohover').css({'left': '-1.5%', 'top' : '0%', 'transition-duration': '.6s'});
        if(counter3 < 1) {
            $('.calibration .watch_wrap')[0].addEventListener('transitionend', transitionend3, {once: true});
            ++counter3;
        }
    }
    function transitionend1() {
        $('.calibration .watch_wrap').removeClass('nohover');
        $('.calibration_inner > .top > span').width('100%').css('font-size', '0');
        $('.calibration_inner > .right > span').css('font-size', 'inherit');
        $('.calibration .watch_wrap').removeClass('top_wrap').addClass('right_wrap');
        hover1();
    }
    function transitionend2() {   
        $('.calibration .watch_wrap').removeClass('nohover'); 
        $('.calibration_inner > .right > span').css('font-size', '0');
        $('.calibration_inner > .bottom > span').css('font-size', 'inherit');
        $('.calibration .watch_wrap').removeClass('right_wrap').addClass('bottom_wrap');
        $('.calibration_inner > .right > span').height('100%');     
        $('.calibration .watch_wrap').css({'left': '-1.5%', 'top' : '100%', 'transition-duration': '1s'});
        $('.calibration .watch_wrap')[0].addEventListener('transitionend',function() {
            hover2();
        },{once: true});
         
    }
    function transitionend3() {       
        $('.calibration .watch_wrap').removeClass('nohover');
        $('.calibration_inner > .left > span').css('font-size', '0');
        $('.calibration .watch_wrap').removeClass('left_wrap').addClass('top_wrap');
        $(this).css({'transition-duration': '1s'});
        $('.calibration_inner > .left > span').height('100%');    
        counter = 0;    
        counter1 = 0;
        counter2 = 0;
        counter3 = 0;
        counter4 = 0;
        counter5 = 0;
        $('.calibration .watch_wrap').on('mouseenter', mouseOver);
        $('.calibration .end_test').hide();
        $('.calibration .test').show();
    }

    function mouseOver() {
        $('.calibration .test').hide();
        $('.calibration .end_test').show();
        $('.calibration .watch_wrap').addClass('nohover').css("animation", "none");
        if(counter == 0){
            console.log('here')
            $('.calibration .watch').closest('.calibration_inner').addClass('watching');
            $('.calibration .watch').html('Следите за плашкой');
            $('.calibration .watch_wrap').css({'left': '92%', 'transition-duration': '1s'});
            $('.calibration .watch_wrap').addClass('top_wrap');
            $('.calibration_inner > .top > span').css('font-size', 'inherit');
            if(counter1 < 1) {
                $('.calibration .watch_wrap')[0].addEventListener('transitionend', transitionend1,{once: true}, false);
                ++counter1;
            }            
            ++counter;
        }                       
    }
    
    $('.calibration .watch_wrap').on('mouseenter', mouseOver);
    
     jQuery.fn.onPositionChanged = function (trigger, millis) {
        if (millis == null) millis = 20;
        var o = $(this[0]); // our jquery object
        if (o.length < 1) return o;

        var lastPos = null;
        var lastOff = null;
        setInterval(function () {
            if (o == null || o.length < 1) return o; // abort if element is non existend eny more
            if (lastPos == null) lastPos = o.position();
            if (lastOff == null) lastOff = o.offset();
            var newPos = o.position();
            var newOff = o.offset();
            if (lastPos.top != newPos.top || lastPos.left != newPos.left) {
                $(this).trigger('onPositionChanged', { lastPos: lastPos, newPos: newPos });
                if (typeof (trigger) == "function") trigger(lastPos, newPos);
                lastPos = o.position();
            }
            if (lastOff.top != newOff.top || lastOff.left != newOff.left) {
                $(this).trigger('onOffsetChanged', { lastOff: lastOff, newOff: newOff});
                if (typeof (trigger) == "function") trigger(lastOff, newOff);
                lastOff= o.offset();
            }
        }, millis);

        return o;
    };
    $(".calibration .watch_wrap").onPositionChanged(onPositionChanged);
    
});



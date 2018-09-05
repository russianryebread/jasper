/**
 * Main JS file for Jasper behaviours
 */

if (typeof jQuery == 'undefined') {
    document.write('<script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.1.min.js"></' + 'script>');
}

(function ($) {
    "use strict";

    // Header Parallax and Fade
    $(window).on('scroll', function() {
    
        var scroll_top = $(this).scrollTop();
        var top_offset = 600;
        
        $('#site-head-content').css({
            'opacity' : (1-scroll_top/top_offset),
            'top' : (scroll_top*-.2)
        });
        
        /*
        // Background Image Parallax
        $('#site-head').css({
            'background-position' : 'center ' + (scroll_top*-.07) + 'px'
        });
        */
    
    });

    // Shameless self-promotion
    console.log("Yo, fellow dev. Check out our homepage, and find out about our other goodies: http://www.farmsoftstudios.com")

}(jQuery));
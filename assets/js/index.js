/**
 * Main JS file for Jasper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

        // On the home page, move the blog icon inside the header 
        // for better relative/absolute positioning.

        //$("#blog-logo").prependTo("#site-head-content");
        
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
		    
        
        // Disqus Comments
        
        $('.showDisqus').on('click', function(){   // click event of the show comments button
			var disqus_shortname = 'shilohstream';
			//var disqus_identifier = '{{url absolute="true"}}'; // needs to be unique...

			$.ajax({
		         type: "GET",
		         url: "http://" + disqus_shortname + ".disqus.com/embed.js",
		         dataType: "script",
		         cache: true
		    });
	
		    $(this).fadeOut();  // remove the show comments button
		});
        
        // Shameless self-promotion
        console.log("Yo, fellow dev. Check out our homepage, and find out about our other goodies: http://www.farmsoftstudios.com")

}(jQuery));
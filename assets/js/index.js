/**
 * Main JS file for Jasper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

        // On the home page, move the blog icon inside the header 
        // for better relative/absolute positioning.

        //$("#blog-logo").prependTo("#site-head-content");
        
        // Fade on scroll
		$(window).on('scroll', function() {
			var st = $(this).scrollTop();
			var top_offset = 600
			$('#site-head-content').css({
				'opacity' : (1-st/top_offset),
				'top' : (st*-.2)
			});
		});
		    
        
        // Disqus Comments
        
        $('.showDisqus').on('click', function(){   // click event of the show comments button
			var disqus_shortname = '';
			//var disqus_identifier = '{{url absolute="true"}}'; // needs to be unique...

			$.ajax({
		         type: "GET",
		         url: "http://" + disqus_shortname + ".disqus.com/embed.js",
		         dataType: "script",
		         cache: true
		    });
	
		    $(this).fadeOut();  // remove the show comments button
		});
        

}(jQuery));
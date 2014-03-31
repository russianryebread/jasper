/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        // On the home page, move the blog icon inside the header 
        // for better relative/absolute positioning.

        //$("#blog-logo").prependTo("#site-head-content");
        
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
        
    });

}(jQuery));
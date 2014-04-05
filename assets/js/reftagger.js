var refTagger = {
	settings: {
		bibleVersion: "ESV",
		socialSharing: [],
		roundCorners: true,			
		tagChapters: true,
		customStyle : {
			heading: {
				backgroundColor : "#d9d9d9",
				color : "#666666",
				fontFamily : "'Source Sans Pro', Tahoma, Verdana, sans-serif",
				fontSize : "14px"
			},
			body   : {
				color : "#919191",
				fontFamily : "Tahoma, Verdana, sans-serif",
				fontSize : "12px",
				moreLink : {
					color: "#d9d9d9"
				}
			}
		}
	}
};
(function(d, t) {
	var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
	g.src = "//api.reftagger.com/v2/RefTagger.js";
	s.parentNode.insertBefore(g, s);
}(document, "script"));

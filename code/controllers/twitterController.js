function init(){

	var twitterLink = document.createElement("a"),
		socialContainer = document.getElementById("social");

	twitterLink.href = "https://twitter.com/share";
	twitterLink.className = "twitter-share-button";
	twitterLink.dataset.via = "3VOT";
	twitterLink.dataset.count = "none";

	socialContainer.appendChild(twitterLink);

	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

	

}

module.exports = init()
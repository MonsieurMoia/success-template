function init(){


	var fbRoot = document.createElement("div");
	fbRoot.setAttribute("class","fb-root")
	document.body.appendChild(fbRoot);
	
	(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
  	if (d.getElementById(id)) return;
  	js = d.createElement(s); js.id = id;
  	js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.0";
  	fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

	function addShareButton (){
		var fbDiv = document.createElement("div"),
			socialContainer = document.getElementById("social"),
			currentUrl = document.URL;

		fbDiv.className = "fb-share-button";
		fbDiv.dataset.width = 100;
		fbDiv.dataset.href = currentUrl;
		fbDiv.dataset.layout = "button";

		socialContainer.appendChild(fbDiv);

	};

	addShareButton();

}




module.exports = init();
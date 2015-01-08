function init(){
	// var videoContainer = document.getElementById("video-successcase"),
	// 	btnToggleSize = document.getElementById("toggleSize"),
	resizeContainer = document.getElementById("resize-container");

	// btnToggleSize.addEventListener("click",function(){
	// 	
	// });
	
	var toggleOpen = document.getElementById("openVideoButton");
	var toggleClose = document.getElementById("closeVideoButton");
	var successIntroDom = document.getElementById('success-intro');

	toggleOpen.onclick = function(){
		var dataset = this.dataset.visib;
		toggleVideo(dataset);
	};

	toggleClose.onclick = function(){
		var dataset = this.dataset.visib;
		toggleVideo(dataset);
	};

	function toggleVideo(state) {
	    // if state == 'hide', hide. Else: show video 
	    var div = document.getElementById("popupVid");
	    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
	    // toggleOpen.style.display = state;
	    if (state == ''){
	    	toggleOpen.style.opacity = 0;
	    	toggleOpen.style.zIndex = 0;
			resizeContainer.classList.toggle('col-md-12');
			resizeContainer.classList.toggle('col-md-6');
			toggleClose.style.display = 'block';
			successIntroDom.style.margin = '1em 0';
			successIntroDom.classList.add("text-center");
			successIntroDom.classList.toggle('col-md-6')
			successIntroDom.classList.toggle('col-md-12');
	    }else{
	    	toggleOpen.style.opacity = 1;
	    	toggleOpen.style.zIndex = 1;
	    	resizeContainer.classList.toggle('col-md-12');
			resizeContainer.classList.toggle('col-md-6');
			toggleClose.style.display = 'none';
			successIntroDom.style.margin = '0';
			successIntroDom.classList.remove("text-center");
			successIntroDom.classList.toggle('col-md-6')
			successIntroDom.classList.toggle('col-md-12');
	    };

	    // div.style.display = state == 'hide' ? 'none' : '';
	    func = state == 'hide' ? 'pauseVideo' : 'playVideo';
	    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}','*');
	}


}


module.exports= init();
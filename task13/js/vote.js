
var audioDiv = document.getElementById("js-audioDiv");
var audio = document.getElementById("js-audio");
var onOff = true;

audioDiv.onclick = function(){
	if(onOff){
		this.style.backgroundPosition = "-0.02rem -2.79rem";
		audio.play();
	    onOff = !onOff;
	}else{
		this.style.backgroundPosition = "-0.02rem -2.23rem";
		audio.pause();
		onOff = !onOff;
	}
}
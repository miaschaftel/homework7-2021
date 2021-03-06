var video = document.querySelector("#player1");
var volslider = document.querySelector("#slider");
var voloutput = document.querySelector("#volume");
var mute = document.querySelector("#mute");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	video.play()
	voloutput.innerHTML = volslider.value + "%";						
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
	console.log("Pause Video");
	});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * .95;
	console.log("The new slower playback speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.05;
	console.log("The new faster playback speed is " + video.playbackRate + " seconds");
});

// ----ERROR!!!!!!
// -6: Video not skipping ahead by the right amount and/or not restarting correctly.

document.querySelector('#skip').addEventListener("click", function(){
	console.log("The video was at " + video.currentTime + " seconds");
	video.currentTime+=15;
	console.log("The videos is now at " + video.currentTime + " seconds");

	if (video.currentTime>=video.duration){
		video.currentTime=0;
		console.log("The videos is restarting from the beginning and currently at " + video.currentTime + " seconds");
	}
});


document.querySelector("#mute").addEventListener("click", function() {
    if (video.muted === false) {
		video.muted = true;
		mute.textContent = "Unmute";
	}
	else {
		video.muted=false;
		mute.textContent = "Mute";
	}

	console.log("Mute Video");

    });


document.querySelector("#slider").addEventListener("click", function() {
	voloutput.innerHTML = this.value + "%";
	video.volume = volslider.value / 100
    console.log("The video volume slide is " + this.value);
});


document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Playing the Vintage Video" + video.classList)
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Playing the Original Video" + video.classList)
});
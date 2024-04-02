window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

/* Declaring variables */
var video = document.querySelector("video");
var volume = document.querySelector("#volume");
var muteButton = document.querySelector("#mute");
var slider = document.querySelector("#slider");

/* Stop loading the video automatically  */
window.onload = stopVideo();

function stopVideo() {
	video.removeAttribute("autoplay");
	video.removeAttribute("loop");
  };


/* Play video & set the volume information */
document.querySelector("#play").addEventListener("click", function() {
	video.play();
	volume.innerHTML = slider.value + "%";
	console.log("Play Video");
});

/* Pause video */
document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

/* Slow down */
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= 0.1;
	console.log("The current video speed is: " + video.playbackRate);
});

/* Faster */
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.1;
	console.log("The current video speed is: " + video.playbackRate);
});

/* Skip ahead */
document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
		console.log("Video started from the beginning, the skipped time extended the video duration.")
	} else {
		video.currentTime = video.currentTime + 10;
	}
});

/* Mute/unmute */
muteButton.addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		muteButton.innerHTML = "Mute";
	} else {
		muteButton.innerHTML = "Unmute";
		video.muted = true;
	}
});

/* Slider */
slider.addEventListener("change", function(e) {
	video.volume = e.currentTarget.value / 100;
	volume.innerHTML = e.currentTarget.value + "%";
});

/* Oldschool */
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

/* Original */
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});

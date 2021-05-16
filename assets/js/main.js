document.addEventListener("DOMContentLoaded", function() {
	const swiper = new Swiper('.swiper-container', {
		loop: true,
		navigation: {
			nextEl: '.workers__arrow-next',
			prevEl: '.workers__arrow-prev',
		}
	});

	// Video
	const videoWrapper = document.getElementById("video-wrapper");
	const videoPlay = document.getElementById("video-play");
	const video = document.getElementById("video");
	videoPlay.addEventListener("click", function() {
		videoWrapper.classList.add("active");
		video.play();
		video.setAttribute("controls", "controls");
	});
});
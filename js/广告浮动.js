var adIntervalID = 1;
var stepX = 5;
stepY = 5;

function floadAd() {
	var ad = document.getElementById("ad");
	var adW = 160;
	var adH = 90;
	var w = window.innerWidth;
	var h = window.innerHeight;
	if ((ad.offsetLeft + adW + stepX) > w || (ad.offsetLeft + stepX) < 0) {
		stepX = -stepX;
	}
	if ((ad.offsetTop + adH + stepY) > h || (ad.offsetTop + stepY) < 0) {
		stepY = -stepY;
	}
	var goX = ad.offsetLeft + stepX;
	ad.style.left = goX + "px";
	var goY = ad.offsetTop + stepY;
	ad.style.top = goY + "px";
}
window.onload = function() {
	adIntervalID = setInterval(floadAd, 100);
}

function stopAd() {
	clearInterval(adIntervalID);
}

function startAd() {
	adIntervalID = setInterval(floadAd, 100);
}
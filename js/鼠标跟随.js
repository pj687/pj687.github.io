function mouseFollow() {
	var x = event.clientX;
	var y = event.clientY;

	var mousePos = document.getElementById("showMousePos");
	mousePos.innerHTML = "当前鼠标位置：(" + x + "," + y + ")";
	mousePos.style.left = x + "px";
	mousePos.style.top = y + "px";
}
window.onload = function() {
	document.body.addEventListener("mousemove", mouseFollow, true);
}
let data = [
	["  欢迎来到中国凤景网  ", "#1"],
	["欢迎您来注册", "#2"],
	["一起观赏世界的美景吧", "#3"]
];

window.onload = () => {
	const marqueeVertical = document.getElementById("marquee-vertical");
	data.forEach((item) => {
		const li = document.createElement("li");
		const a = document.createElement("a");
		a.setAttribute("href", item[1]);
		a.innerText = item[0];
		li.appendChild(a);
		marqueeVertical.appendChild(li);
	});
	const classList = marqueeVertical.classList;
	const animCls = "marquee-vertical-anim";
	let marqueeIntervalId = setInterval(() => {
		if (classList.contains(animCls)) {
			classList.remove(animCls);
			//firstChild等价于children[0]
			//const firstChild = marqueeVertical.firstChild;
			const firstChild = marqueeVertical.children[0];
			marqueeVertical.removeChild(firstChild);
			marqueeVertical.appendChild(firstChild);
		} else {
			classList.add(animCls);
		}
		//这里的时间单位为毫秒，设置为动画时间的两倍，可以让文字有停顿的时间
	}, 1000);
}
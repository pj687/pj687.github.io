			window.onload=function(){
				let sz=[...document.querySelectorAll('#banner>li')];
				let szdiv=[...document.querySelectorAll('#banner>li')];
				let left=document.querySelector('.left')
				let right=document.querySelector('.right')
				for(let i=0;i<szdiv.length;i++){
					szdiv[i].name=i+1;
					szdiv[i].style.left=86*(i+1)+"px";
					if((i+1)!=10){
						sz[i].id=10-(i+1);
					}else{
						sz[i].id=10;
					}
				}
				
				//切换效果公共效果
				function effect(){
					for(let i=0;i<sz.length;i++){
						sz[i].style.zIndex=i;
						sz[i].style.transform="scale(1)";
					}
					sz[len-2].style.left='0';
					sz[len-1].style.zIndex=100
					sz[len-1].style.left="300px";
					sz[len-1].style.transform="scale(1.3)"
					sz[len-1].style.opacity=1;
					sz[len].style.left="700px";
					sync_szdiv()
				}
				
				//切换上一张方法
				function get_pre(){
					let give_up=sz[0];
					sz.shift()
					sz.push(give_up)
					effect();
				}
				
				//切换下一张方法
				function get_next(){
					let give_up=sz[len];
					sz.pop()
					sz.unshift(give_up)
					effect();
				}
				
				//开始为5s为一周期切换下一张
				let timer=setInterval(get_next,5000)
				
				//为左切换图片赋值点击操作
				left.onclick=function(){
					clearInterval(timer);
					get_pre();
					timer=setInterval(get_next,3000)
				}
				
				//为右切换图片赋值点击操作
				right.onclick=function(){
					clearInterval(timer);
					get_next();
					timer=setInterval(get_next,3000)
				}
				
				let len=sz.length-1;
				effect();
				//小按钮悬停切换方法开始
				szdiv[0].style.background="black"
				for(let i=0;i<szdiv.length;i++)
				{
					szdiv[i].onmoouseenter=function(){
						clearInterval(timer);
						let len1=sz[len-1].id;
						let len2=szdiv[i].name;
						let dis=Math.max(len1,len2)-Math.min(len1,len2)
						if(len1>len2){
							while(dis--)
							get_pre()
						}else{
							while (dis--)
							    get_next()
						}
						timer=setInterval(get_next,3000)
					}
				}
				
				//小按钮换颜色
				function sync_szdiv(){
					for(let i=0;i<szdiv.length;i++){
						if(szdiv[i].name==sz[len-1].id){
							szdiv[i].style.background="black";
						}else{
							szdiv[i].style.background="while";
						}
					}
				}
			}
			
			
			
			
// var lis = document.getElementsByClassName("images");
// var anNiu = document.getElementsByClassName("anNius");
// var index = 0;
// var time = null;

// function dong(){
// 	chuShiZhi();
// 	zhengChang();
// 	anNiu[index].style.backgroundColor = "grey";
	
// 	if(index == 0){
// 		indexDengYu0();
// 	}else if(index == lis.length-1){
// 		indexDengYuChangDu();
// 	}else{
// 		elseShi();
// 	}
// 	index++;
// 	if(index == lis.length){
// 		index = 0;
// 	}
// }

// time = setInterval("dong()",2000);

// function rig(){
// 	chuShiZhi();
// 	zhengChang();
// 	anNiu[index].style.backgroundColor = "grey";
// 	if(index == 0){
// 		indexDengYu0();
// 	}else if(index == lis.length-1){
// 		indexDengYuChangDu();
// 	}else{
// 		elseShi();
// 	}
// }

// function dianJi(num){
// 	clearInterval(time);
// 	if(num == 0){
// 		console.log(index)
// 		dong();
// 	}else{
// 		index--;
// 		console.log(index)
// 		if(index == -1 || index == -2){
// 			index = lis.length-1;
// 		}
// 		rig();
// 	}
// 	time = setInterval("dong()",2000);
// }

// function anNius(num){
// 	clearInterval(time);
// 	console.log(num)
// 	index = num;
// 	dong();
// 	time = setInterval("dong()",2000)
// }


// $(function (){
// 	$("li").hover(function (){
// 		clearInterval(time);
// 	},function (){
// 		clearInterval(time);
// 		time = setInterval("dong()",2000);
// 	})
// 	$("p").hover(function (){
// 		clearInterval(time);
// 	},function (){
// 		clearInterval(time)
// 		time = setInterval("dong()",2000);
// 	})
// })

// //index等于0时调用此方法
// function indexDengYu0(){
// 	lis[lis.length-1].style.left = "-800px";
// 	lis[lis.length-1].style.opacity = 1;
// 	lis[lis.length-1].style.transform = "scale(0.4)";
// 	lis[lis.length-1].style.filter = "blur(15px)";
// 	lis[lis.length-1].style.top = "-100px";
// 	lis[index+1].style.opacity = 1;
// 	lis[index+1].style.right = "-800px";
// 	lis[index+1].style.transform = "scale(0.4)";
// 	lis[index+1].style.filter = "blur(15px)";
// 	lis[index+1].style.top = "-100px";
	
// }

// //index等于数组长度时调用此方法
// function indexDengYuChangDu(){
// 	lis[0].style.opacity = 1;
// 	lis[0].style.right = "-800px";
// 	lis[0].style.transform = "scale(0.4)";
// 	lis[0].style.filter = "blur(15px)";
// 	lis[0].style.top = "-100px";
// 	lis[index-1].style.left = "-800px";
// 	lis[index-1].style.opacity = 1;
// 	lis[index-1].style.transform = "scale(0.4)";
// 	lis[index-1].style.filter = "blur(15px)";
// 	lis[index-1].style.top = "-100px";
// }

// //index不等于0跟长度时调用的方法
// function elseShi(){
// 	lis[index-1].style.left = "-800px";
// 	lis[index-1].style.opacity = 1;
// 	lis[index-1].style.transform = "scale(0.4)";
// 	lis[index-1].style.filter = "blur(15px)";
// 	lis[index-1].style.top = "-100px";
// 	lis[index+1].style.opacity = 1;
// 	lis[index+1].style.right = "-800px";
// 	lis[index+1].style.transform = "scale(0.4)";
// 	lis[index+1].style.filter = "blur(15px)";
// 	lis[index+1].style.top = "-100px";
// }
// //每运行一次不显示的都恢复默认值
// function chuShiZhi(){
// 	for(let i = 0; i < lis.length; i++){
// 		lis[i].style.opacity = 0;
// 		lis[i].style.left = "0px";
// 		lis[i].style.right = "0px";
// 		lis[i].style.transform = "scale(1)";
// 		lis[i].style.zIndex = 0;
// 		lis[i].style.boxShadow = "";
// 		lis[i].style.top = "0px";
// 		anNiu[i].style.backgroundColor = "white";
// 	}
	
// }
// //正常在中间显示的图片
// function zhengChang(){
// 	lis[index].style.opacity = 1;
// 	lis[index].style.zIndex = 3;
// 	lis[index].style.left = "0px";
// 	lis[index].style.boxShadow = "0px 0px 20px black";
// 	lis[index].style.filter = "blur(0)";
// 	lis[index].style.transform = "scale(1.2)";
// 	lis[index].style.top = "100px";
// }

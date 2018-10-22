//获取九个小方格
var wrap = document.querySelector(".wrap");
var squares = wrap.querySelectorAll("div");

//获取开始按钮
var start = document.querySelectorAll("button")[0];

//获取结束按钮
var stop = document.querySelectorAll("button")[1];
var timer = null;

//点击开始按钮开始闪
start.onclick = function() {
	//清除定时器
	clearInterval(timer);
	timer = setInterval(shine, 800);
	this.className = "active";
	stop.className = "";
}

//点击结束按钮结束闪
stop.onclick = function() {
	clearInterval(timer);
	clearColor(); //所有小方格的颜色还原为橘黄色
	this.className = "active";
	start.className = "";
}

//闪光函数
function shine() {	
	var arrColor = []; //准备空数组盛放随机生成的颜色
	var arrSqr = [];  //准备空数组盛放随机生成的数字

	//随机生成三种不同的颜色
	while (arrColor.length < 3) { //随机获取三种颜色，并存入数组
		if (arrColor.indexOf(randomColor()) === -1) {
			arrColor.push(randomColor());
		}
	}

	//获取三个不同的随机数字
	while (arrSqr.length < 3) {
		//随机产生0-8之间的数字；
		var num = Math.floor(Math.random()*9);
	    //判断随机数是否在数组内，若不在则添加；
		if(arrSqr.indexOf(num) == -1){
			arrSqr.push(num);	
		}
	}
    
    //在为选中的小方格添加颜色之前需要将所有颜色还原
    clearColor();
  
    //连接小方格数组和颜色数组；
	for (var i = 0; i < 3; i++) {
		squares[arrSqr[i]].style.backgroundColor = arrColor[i];
	}
}


//获取随机颜色的函数
function randomColor() {
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r + "," + g + "," + b + ")";
}


// 将小方格的颜色还原为橘黄色
function clearColor() {
	for(var i = 0; i < squares.length; i++) {
    	squares[i].style.backgroundColor = "orange";
    }
}





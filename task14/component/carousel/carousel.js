//获取整个轮播wrap
var carousel = document.querySelectorAll(".carousel");

//获取轮播项目
var carouselItem = document.querySelector("#js-carouselItem");
var carouselItem1 = document.querySelector("#js-carouselItem1");

//获取左右箭头
var prev = document.querySelector("#js-left");
var next = document.querySelector("#js-right");

//获取小圆点
var indicator = document.querySelector("#js-indicator");
var indicator1 = document.querySelector("#js-indicator1");
var dots = indicator.querySelectorAll("li");
var dots1 = indicator1.querySelectorAll("li");

//计数器
var num = 0;

//定时器
var timer = null;

//点左击箭头向左切换图片
prev.onclick = function() {
	num --;
	if(num < 0) {
		num = 3;
	}
	slid(-num, 10);
}

//点右击箭头向右切换图片
next.onclick = function() {
	num ++;
	if(num > 3) {
		num = 0;
	}
	slid(-num, 10);
}

//点击小圆点切换到相应的图片
for(var i = 0; i < dots.length; i++) {
	dots[i].index = i;  //为每个dot设置索引
	dots[i].onclick = function() {
		num = this.index;
		slid(-num, 10);
	}
}

//点击小圆点切换到相应的图片
for(var i = 0; i < dots1.length; i++) {
	dots1[i].index = i;  //为每个dot设置索引
	dots1[i].onclick = function() {
		num = this.index;
		slid(-num, 10);
	}
}

autoPlay();

//自动播放函数
function autoPlay() {
	timer = setInterval(function() {
		num ++;
		num %= 4;
		slid(-num, 10);
	}, 2000)
}

for(var i = 0; i < carousel.length; i++) {
	//鼠标移到图像上时自动播放结束
	carousel[i].onmouseover = function() {
		clearInterval(timer);
	}

	//鼠标移开自动播放继续
	carousel[i].onmouseout = autoPlay;
}

/*核心代码*/
function slid(fin_x, interval) {
	var width = parseInt(getStyle(carouselItem, "width")) / 4;
	var x = parseInt(getStyle(carouselItem, "marginLeft"));
	var dist = 0;

	if(carouselItem.move) {
		clearTimeout(carouselItem.move);
	}

	if(x == width * fin_x) {
		return true;
	}

	if(x < width * fin_x) {
		dist = Math.ceil((width * fin_x - x) / 10);
		x += dist;
	}

	if(x > width * fin_x) {
		dist = Math.ceil((x - width * fin_x) / 10);
		x -= dist;
	}

	carouselItem.style.marginLeft = x + "px";
	carouselItem1.style.marginLeft = x + "px";
	carouselItem.move = setTimeout("slid(" + fin_x + ","+ interval + ")", interval);

	clearColor(dots);
	clearColor(dots1);
}

function clearColor(id) {
	//清除所有小圆点上的颜色
	for(var i = 0; i < id.length; i++) {
		id[i].className = "";
	}
	//为当前的圆点添加颜色
	id[num].className = "carousel_active";
}

//获取元素的非行内属性值的函数
function getStyle(obj, attr) {
	return obj.currentStyle? obj.currentStyle[attr] : getComputedStyle(obj)[attr];

}
/*获取元素*/
var inputs = document.getElementsByTagName("input");
var text = document.getElementsByTagName("p")[0];
var imgNum = document.querySelector(".count");
var img = document.querySelector("img");
var imgDes = document.querySelector(".text");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var imgArr = ["1.png", "2.png", "3.png", "4.png", "5.png"];
var textArr = ["虹桥千步廊，半在水中央",
               "接岸桥通何处路？倚栏人是阿谁家",
               "自嫌野物将何用？土木形骸麋鹿心",
               "藤树谁知先后生，万年相倚共枯荣",
               "红叶黄花秋意晚，千里念行客"];

var num = 0;

init();
/*初始化*/
function init() {
	imgNum.innerHTML = num + 1 + " / " + imgArr.length;
	imgDes.innerHTML = textArr[num];
	img.src = "img/" + imgArr[num];
}

/*默认为循环切换模式*/
circle();

/*点击切换循环切换模式*/
inputs[0].onclick = function () {
	text.innerHTML = "图片可在第一张和最后一张之间相互切换";
	circle();
}

/*循环切换模式函数*/
function circle() {
	/*点击左箭头，向前切换图片*/
	prev.onclick = function() {
		num --;
		if(num < 0) {
			num = imgArr.length - 1;
		}

		init();
	}

	/*点击右箭头，向后切换图片*/
	next.onclick = function () {
		num ++;
		if(num == imgArr.length) {
			num = 0;
		}
		init();
	}
}

/*顺序切换模式*/
inputs[1].onclick = function() {

	text.innerHTML = "图片只能到第一张或最后一张，无法循环。"

	prev.onclick = function() {
		if(num > 0) {
			num --;
		}else {
			alert("新图片新开始!");
		}

		init()
	}

	next.onclick = function(){
		if(num < imgArr.length -1) {
			num ++;
		}else {
			alert("前方无路请回头！");
		}

		init()
	}
}

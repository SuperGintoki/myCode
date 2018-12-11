/*获取元素*/
var content = document.querySelector(".content");
var avater = document.getElementById("avater");
var input = document.getElementById("input");
var emoji = document.getElementById("emoji");
var send = document.getElementById("send");
var package = document.getElementById("package");
var imgs = package.getElementsByTagName("img");

/*点击图片切换头像*/
var onOff = false;
avater.onclick = function() {
	if(onOff) {
		this.src = "img/1.jpg";
		onOff = false;
	}else {
		this.src = "img/2.jpg";
		onOff = true;
	}
}

/*点击发送按钮，将输入框内容输出到屏幕上*/
send.onclick = function() {
	/*判断输入框时否为空,通过判断onOff当前的值来判断当前的头像*/
	if(input.value && onOff) {
		content.innerHTML = "<li class='right'>" + "<img src='img/2.jpg'>" + "<span>" + input.value + "</span>" + "</li>" + "</br>" + content.innerHTML;
		input.value = "";

	}else if(input.value && !onOff) {
		content.innerHTML = "<li class='left'>" + "<img src='img/1.jpg'>" + "<span>" + input.value + "</span>" + "</li>" + "</br>" + content.innerHTML;
		input.value = "";

	}else {
		alert("无字天书看不懂！")
	}
}

sw = true;
emoji.onclick = function() {
	/*点击emoji图像，出现表情库,在此点击，表情库隐藏*/
	if(sw) {
		unfold(package, "height", 140);
		sw = false;
	}else {
		unfold(package, "height", 0);
		sw = true;
	}
	for(var i = 0; i < imgs.length; i++) {
		imgs[i].index = i;
		imgs[i].onclick = function() {
			input.value = "[" + (this.index + 1) + "]";
		}
	}
}


function unfold(ele, attr, value) {
	if(!ele.style[attr]) {
		ele.style[attr] = "0px"
	}
	var x = parseInt(ele.style[attr])
	if (ele.timer) {
		clearInterval(ele.timer)
	}

	ele.timer = setInterval(function(){

        if(x == value) {
        	clearInterval(ele.timer)
        }else if(x < value) {
			x += Math.ceil((value - x) / 10);
		}else {
			x -= Math.ceil((x - value) / 10);
		}

		ele.style[attr] = x + "px";

	}, 20)
}
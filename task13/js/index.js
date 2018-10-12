var headMenu = document.querySelector("#js-headMenu");
var dropMenu = document.querySelector("#js-headDrop");
var main = document.querySelector("#js-main");
var flag = true;
var timer = null;

headMenu.onclick = function(){
	if(flag){
	
		this.className = "head_menu head_animate1 head_change";
		slid(dropMenu, main, 10);
		flag = false;

	}else{

		this.className = "head_menu head_animate2";
		slid(dropMenu, main, -10);
		flag = true;
	}
}

function getStyle(obj, attr){
	return getComputedStyle? getComputedStyle(obj)[attr] : obj.currentStyle[attr];
}

function slid(obj1, obj2, dir){
	clearInterval(timer);

    timer = setInterval(function(){
        
        var width = window.innerWidth;
        var left1 = parseInt(getStyle(obj1, "left"));
        var left2 = parseInt(getStyle(obj2, "left"));

        if(left1 >= 0 && dir > 0){
        	left1 = -10;
        }else if(left1 <= -0.6*width && dir < 0){
        	left1 = -0.6*width + 10;
        }

        if(left2 >= 0.6*width && dir > 0){
        	left2 = 0.6*width;
        }else if(left2 <= 0 && dir < 0){
        	left2 = 10;
        }

        obj1.style.left = left1 + dir + "px";
        obj2.style.left = left2 + dir + "px";

		if(left1 >= 0 && dir > 0 || left1 < -0.6*width && dir < 0){
			clearInterval(timer);
		}

		if(left2 >= 0.6*width && dir > 0 || left2 <= 0 && dir < 0){
			clearInterval(timer);
		}

	}, 15);
}

/*function slidmain(dir){
	clearInterval(timer);

    timer = setInterval(function(){

        var left = parseInt(getStyle(main, "left"));

        if(left >= 0.6*width + 15 && dir > 0){
        	left = 0.6*width +15;
        }else if(left <= 0 && dir < 0){
        	left = 10;
        }

        main.style.left = left + dir + "px";

		if(left >= 0.6*width + 15 && dir > 0 || left <= 0 && dir < 0){
			clearInterval(timer);
		}

	}, 15);
}*/









/*function slid(dir){
	clearInterval(timer);

    timer = setInterval(function(){

        var left = parseInt(getStyle(dropMenu, "left"));

        if(left >= 0 && dir > 0){
        	left = -10;
        }else if(left <= -0.6*width && dir < 0){
        	left = -0.6*width+15;
        }

        dropMenu.style.left = left + dir + "px";

		if(left >= -10 && dir > 0 || left < -0.6*width + 15 && dir < 0){
			clearInterval(timer);
		}

	}, 15);
}

function slidmain(dir){
	clearInterval(timer);

    timer = setInterval(function(){

        var left = parseInt(getStyle(main, "left"));

        if(left >= 0.6*width + 15 && dir > 0){
        	left = 0.6*width +15;
        }else if(left <= 0 && dir < 0){
        	left = 10;
        }

        main.style.left = left + dir + "px";

		if(left >= 0.6*width + 15 && dir > 0 || left <= 0 && dir < 0){
			clearInterval(timer);
		}

	}, 15);
}*/



/*var slipIn = function(){
	clearInterval(timer);

	var timer = setInterval(function(){
       
		if(dropMenu.offsetLeft <= 0){

			dropMenu.style.left = -0.6*width + i + "px";
		    i+=5;
		}
	}, 15);
}*/


/*var slipOut = function(){
	clearInterval(timer);

	var timer = setInterval(function(){
   
		if(dropMenu.offsetLeft >= -0.6*width){

			dropMenu.style.left = 0 - j + "px";
			console.log(dropMenu.style.left);
		    j += 5;
		}

	}, 15);
}*/
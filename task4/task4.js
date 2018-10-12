var phoneNumber = document.getElementById("phoneNum");
var re = /[0-9]/g;


phoneNumber.oninput = function(){
	if(!re.test(this.value)&& this.value.length < 12){
		alert("请输入11位手机号码！");
		this.value = "";		
	}
}
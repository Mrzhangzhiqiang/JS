var Obtn = document.getElementById("btn");
	body = document.getElementsByTagName("body")[0];
	Obox = document.getElementById("box");
	img1 = document.getElementById("tu1");
	img2 = document.getElementById("tu2");
	img3 = document.getElementById("tu3");
	var i =0;
	var index = 4;
	index = getCookie("Bjtu");
	if(index ){
		body.style.background = "url(img/bg"+index+".jpg) no-repeat";

	}
Obtn.onclick = function(){
	i++;
	if(i%2 ==1){
		Obox.style.display = "block" ;
	}else if(i %2 ==0){
		Obox.style.display = "none" ;
	}
}
img1.onclick =function(){
	body.style.background = "url(img/bg"+1+".jpg) no-repeat";
	index = 1;
	setCookie("Bjtu",index,setCookieDate(7))
}
img2.onclick =function(){
	body.style.background = "url(img/bg"+2+".jpg) no-repeat";
	index = 2;
	setCookie("Bjtu",index,setCookieDate(7))
}
img3.onclick =function(){
	body.style.background = "url(img/bg"+3+".jpg) no-repeat";
	index = 3;
	setCookie("Bjtu",index,setCookieDate(7))
}

var x=0;
var y=0;
var step=10;
var fon = document.getElementById("fon");
var fly = document.getElementById("fly");

var fonW = fon.width;
var fonH = fon.height;
var flyW = fly.width;
var fleH = fly.height;

function fly(){
	fly.style.left = x;
	if(x >= fonW+flyW)
		x = 0;
	else x+=step;
		
}
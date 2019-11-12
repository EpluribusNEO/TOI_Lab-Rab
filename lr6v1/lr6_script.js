function pixOver(str){
	let message = str;
	switch(str){
		case 'mazda-rx7':
			message += '  4800$';
			break;
		case 'skyline-r34':
			message += '  5000$'
			break;
		case 'mitsubishi-eclipse':
			message += '  4200$'
			break;
		case 'honda-2000':
			message += '  3900$'
			break;
		default:
			message = "[no data]";
				
	}
		document.getElementById("aboutCar").value = message;

}

function pixOut(){
	document.getElementById("aboutCar").value = '';
}


let slider = ['honda-2000.jpg','mazda-rx7.jpg','mitsubishi-eclipse.jpg','skyline-r34.jpg'];
let frame = 0;
function next(){
	frame++;
	if(frame > slider.length-1) {frame = 0;}
	setPic(slider[frame]);
}
function previous(){
	frame--;
	if(frame < 0)
		frame = slider.length-1;
	setPic(slider[frame]);
}

function setPic(picURL){
	document.getElementById("pics").src='pix/'+picURL;
}


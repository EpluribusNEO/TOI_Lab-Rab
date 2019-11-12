function lr3z3(){
    let x = document.getElementById("X").value;
    x = parseInt(x);
    
    let y = document.getElementById("Y").value;
    y = parseInt(y);
    
    let x_pow2 = Math.pow(x,2);
    let y_pow2 = Math.pow(y,2);
    
    let result = Math.sqrt(x_pow2 + y_pow2);
    
	document.getElementById("distance").value = result;
}

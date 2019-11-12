
function daysAfterBorn(){
	let day = parseInt(document.getElementById('day').value);
	let month = parseInt(document.getElementById('month').value);
	let year = parseInt(document.getElementById('year').value);
	
	let dateNow = new Date().getTime();
	let birthday = new Date(year, month-1, day).getTime();
	
	let milSec = dateNow - birthday;
    let countDays = Math.floor(milSec/86400000);
	
	document.getElementById("countDays").value = countDays;
}
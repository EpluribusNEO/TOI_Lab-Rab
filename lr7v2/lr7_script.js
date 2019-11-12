/* задания 1 */
var isRed = true;
function changeColor(){
	if(isRed){
		document.getElementById("btnColor").value = "Сменить цвет на красный";
		document.getElementById("suqre").style.backgroundColor = "#00aaff"; }
	else{
		document.getElementById("btnColor").value = "Сменить цвет на голубой";
		document.getElementById("suqre").style.backgroundColor = "#ff0000"; }
	isRed = !isRed;
}
/* /задания 1 */

/* задание 2 */
function hideAndShow(objID, btnID){
	let obj = document.getElementById(objID);
	let btn = document.getElementById(btnID);
	if(obj.style.display == 'none'){
		obj.style.display = 'block';
		btn.value = "Спряч меня";  }
	else{
		obj.style.display = 'none';
		btn.value = "Покажи меня"; }
}
/* /задание 2 */

function aboutMySelf(){
	let name = document.getElementById("name").value;
	let surname = document.getElementById("surname").value;
	let year = document.getElementById("year").value;
	let prof = document.getElementById("profession").value;
	let city = document.getElementById("city").value;
	let hobby = document.getElementById("hobby").value; 
	let hate = document.getElementById("hate").value;
	
	let header = '<h1 style="text-align: center;">'+'About my self'+'</h1><hr>'
	let content = '<p style="font-size: 14pt;">Я, ' + surname +' '+name+' я '+prof +' родился в '+year+ '. ' + 'Живу в городе ' + city + '.<br>' + 'Больше всго я люблю '+hobby + ', не люблю ' + hate + '.' +
			   ' Было бы замечательно, всю жизнь только '+hobby+ ', но к сожаление приходится иногда и ' + hate + ' . . .</p><br><hr>';
	
	let btn = '<input style="font-size:14pt;" type="button" value="Закрыть" onClick="window.close();">'; 
	
	let win = window.open("","", "width=600, height=300");
    win.document.open();
    win.document.write(header);
    win.document.write(content);
    win.document.write(btn);
}

/*End Of Line*/
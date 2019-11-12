
const aivazovsky = "Родился 29 июля 1817 Феодосия, Таврическая губерния";
const repin = "Родился 29 сентября 1930 Куоккала, Выборгская губерния";
const tropinin = "Родился 19 марта 1776 в селе Карпово Новгородской губерни";
const nodata = "nodata";

var BIO = 'nodata';
var ART = 'noname'
var PATH = '"pix/poster/';
var POSTER_PATH = PATH+'noimg.jpg"';

function selected(artist){    
   switch(artist){
        case "opt1":
           document.getElementById("signature").value = aivazovsky;
           BIO = aivazovsky;
           ART = 'Айвазовский';
           POSTER_PATH = PATH + 'aivazovsky.jpg"';
           break;
        case "opt2":
           document.getElementById("signature").value = repin;
           BIO = repin;
           ART = 'Репин';
           POSTER_PATH = PATH + 'repin.jpg"';
           break;
        case "opt3":
           document.getElementById("signature").value = tropinin;
           BIO = tropinin;
           ART = 'Тропинин';
           POSTER_PATH = PATH + 'tropinin.jpg"';
           break;
        default:
           document.getElementById("signature").value = '<nodata>';
           BIO = nodata;
           ART = 'noname'
           POSTER_PATH = PATH + 'noimg.jpg"';
    }
}


function show(){
    let theStyle = 'style="';
    
    BIO = document.getElementById("signature").value;
	
    if( document.getElementById("c_ital").checked  == true){    
        theStyle += 'font-style: italic; ';}
    if(document.getElementById("c_unrd").checked == true){
        theStyle += 'text-decoration: underline; ';}
    if(document.getElementById("c_bold").checked == true){
         theStyle += 'font-weight: bolder; '; }
    
    
    if(document.getElementById("rad1").checked == true)
        theStyle += ' background-image: url(\'pix/bg/forest.jpg\');';
    else if (document.getElementById("rad2").checked == true)
        theStyle += ' background-image: url(\'pix/bg/222.jpg\');';
    else if (document.getElementById("rad3").checked == true)
        theStyle += ' background-image: url(\'pix/bg/bg16.jpg\');';
    else
        theStyle += ' ';
    

    theStyle += '"';

    
    let header = '<body ' +theStyle+ '><h1>' + ART + '</h1>';
    let pic = '<img src='+ POSTER_PATH +' alt="[ПОСТЕР] width="auto" height="350"\>';
    let bio = '<p style="font-size:14pt;">' + BIO + '</p>';
    let btn = '<input style="font-size:14pt;" type="button" value="Закрыть" onClick="window.close();" ></body>'; 
    
    let win = window.open("","", "width=700, height=550");
    
    win.document.open();
    win.document.write(header);
    win.document.write(pic);
    win.document.write(bio);
    win.document.write('<hr>');
    win.document.write(btn);
}

function reset(){
    document.getElementById("c_ital").checked = false;
    document.getElementById("c_unrd").checked = false;
    document.getElementById("c_bold").checked = false;
    
    document.getElementById("rad1").checked = true;
    
    document.getElementById("my_selector").options[0].selected = 'selected';  
    
    document.getElementById("signature").value = "";
    
}




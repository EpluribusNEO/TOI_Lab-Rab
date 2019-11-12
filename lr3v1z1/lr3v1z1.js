
const months = new Array("Января",
                         "Февраля",
                         "Марта",
                         "Апреля",
                         "Мая",
                         "Июня",
                         "Июля",
                         "Августа",
                         "Сентября",
                         "Октября",
                         "Ноября",
                         "Декабря"
                        );


const days = new Array("Воскресенье",
                       "Понедельник",
                       "Вторник",
                       "Среда",
                       "Четверг",
                       "Пятница",
                       "Суббота"
                      );

function loadePage(){
    let date = new Date();
    
    let min   = date.getMinutes();
    let hour  = date.getHours() +1;
    let dayNumb = date.getDate();
    let dayOfWeek = days[date.getDay()]; 
    let month = months[date.getMonth()]; 
    let year  = date.getFullYear();
    
    let strDate = "Время: " + hour + ":" + min + "\r\nДата: "+ dayOfWeek + " "  + dayNumb + " " + month + " " + year + " год. ";
                  
    document.getElementById("currentDate").textContent = strDate;
}
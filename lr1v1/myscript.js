/* Класс, для хранения данных, для первого задания */
class Person{
    constructor(name, surname, patronymic){
        this.name = name;
        this.surname = surname;
        this.patronymic = patronymic;
        
    }

    getFullName(){
        return "" + this.surname + " " +this.name + " " + this.patronymic;
    }
}
/* /Класс, для хранения данных, для первого задания */

/* Класс, моё время, для второго задания */
class myTime{
    constructor(hour, min){
        this.hour = hour;
        this.min  = min;
        this.selfControl();
    }
    
    minUp(){
        if(this.min < 59)
            this.min++;
        else{
            this.min = 0;
            this.hourUp();
        }
    }
    
    hourUp(){
        if(this.hour < 23)
            this.hour++;
        else{
            this.hour = 0;
        }
    }
    
    selfPrint(){
        return "" + this.hour + " : " + this.min;
    }
    
    selfControl(){
        if(this.hour > 23)
            this.hour = 23;
        if(this.hour< 0)
            this.hour = 0;
        
        if(this.min<0)
            this.min = 0;
        while(this.min >59){
            this.min -= 59;
            this.hourUp();
        }
    }
}
/* /Класс, для хранения данных, для первого задания */

/* фугкция обработки данных, для первого задания */
function first(){
    let _snam = prompt("Введите фамилию", "Nodata");
	let _name = prompt("Введите имя", "Nanome");
    let _ptrn = prompt("Введите отчество", "Nodata");
    
   let person = new Person(_name, _snam, _ptrn);
    
   let isTrust = confirm(person.getFullName() + "\n\nДанные верны?");
    
   if(isTrust){
       alert("Молодец,\n" + person.getFullName() + "\nТак держать!");
   }else{
       alert("Ошибка данных!");
   }
}
/* /фугкция обработки данных, для первого задания */

/* фугкция для вторового задания */
function second(){
    let _hour = document.getElementById("hour").value;
    let _min = document.getElementById("min").value;
    let theTime = new myTime(_hour, _min);
	document.getElementById("you").value = theTime.selfPrint();
	theTime.minUp();
	document.getElementById("afterMin").value = theTime.selfPrint();
}
/* /фугкция для вторового задания */

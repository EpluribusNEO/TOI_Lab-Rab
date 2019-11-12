/* Класс, для хранения и обработки данных "время" */
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
        if(this.hour == null)
            this.hour = 0;
        
        if(this.min<0)
            this.min = 0;
        while(this.min >59){
            this.min -= 59;
            this.hourUp();
        }
    }
}
/* /Класс, для хранения и обработки данных "время" */

/* обработка данных. Вариант 1*/
function lr2v1(){
    let _hour = prompt("Введите часы:")
    let _min = prompt("Введине минуты:");
    let theTime = new myTime(_hour, _min);
    alert("Вы задали время: " + theTime.selfPrint());
    theTime.minUp();
    alert("Чурез минуту будет: " + theTime.selfPrint()); 
}
/* /обработка данных. Вариант 1*/

/* Вариант 2 */
function lr2v2(){
    let left = prompt("Введите первое значение:");
    let right = prompt("Введине второе значение:");
    let operand = prompt("Введите операнд (+, -, *, /):");
    let result = 0.0;
    left = parseFloat(left);
    right = parseFloat(right);
    
    switch(operand){
        case '+':
            result = left + right;
            break;
        case '-':
            result = left - right;
            break;
        case '*':
            result = left * right;
            break;
        case '/':
            if(right !=0.0 )
                result = left / right;
            else
                result = null;
            break;
        default:
            alert("Ошибка!\nВведён не верный операнд!");
            result = null;
    }
    if(result != null)
        alert(":> "+left + " " + operand + " " + right + " = " + result);
    else
        alert("Ошибка ввода данных!\nВозможна попытна деления на 0");
}
/* /Вариант 2 */
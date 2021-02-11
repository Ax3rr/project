"use strict"


let num = prompt("Введите число");

let endNum = {
    десятки:Math.floor (num/10%10),
    единицы:Math.floor (num%10),
    сотни:Math.floor (num/100%10)

};

if (num<=999) {
    console.log(endNum);

}

else {
    console.log("ERROR")
};
"use strict"


let num = prompt("Введите число");

let endNum = {
    tens:Math.floor (num/10%10),
    units:Math.floor (num%10),
    hundreds:Math.floor (num/100%10)

};

if (num<=999&num>9) {
    console.log(endNum);

}

else if (num<=9) {
console.log ("Количество единиц:" + endNum.units);
}

else {
    console.log("ERROR!")
};

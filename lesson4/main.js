"use strict"

function Person(name,lastname,year) {
    this.name = name;
    this.lastname = lastname;
    this.age = 2021-year;
}

let people = [
    new Person('John','Doe',1985),
    new Person('Jane','Doe',1993),
    new Person('Sam','Doe',1974),
    new Person('Kate','Doe',2005),
]

function getAge(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
    sum += arr[i][`age`];
}
return sum / arr.length;
}

console.log (getAge(people));

let n = 245;

let num = [
    ed = n%10,
    des=n%,
    console.log(ed),
    console.log(des)

]
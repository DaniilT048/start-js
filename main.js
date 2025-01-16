'use strict';

//#1

let clientAge = 32;
console.log(clientAge);

let firstBoughtClient = 'microwave';
console.log(firstBoughtClient);

let isClientBoughtByCreditCard = true;
console.log(isClientBoughtByCreditCard);

let clientNovember = ['Mark', 'John', 'Viktor', 'Liza'];
console.log(clientNovember);

const topSale = {
    firstName: 'John',
    lastName: 'Johnson',
}
console.log(topSale);

//#2

let decimal2 = clientAge.toFixed(2)
console.log(decimal2);

//#3

let i = 1;

console.log(i++);

console.log(i--);

console.log(--i);

console.log(++i);

// #4

let myTest = 20;

myTest += clientAge;
console.log(myTest);

myTest -= clientAge;
console.log(myTest);

myTest *= clientAge;
console.log(myTest);

myTest /= clientAge;
console.log(myTest);

myTest %= clientAge;
console.log(myTest);


// #5

const myPi = Math.PI;
console.log(myPi);

const myRounded = Math.round(89.279)
console.log(myRounded);

const myRandom = Math.round(Math.random()*10);
console.log(myRandom);

const myPow = Math.pow(3, 5);
console.log(myPow);


// #6


const strObj = {
    str: 'Мама мыла раму, рама мыла маму',
    length: 'Мама мыла раму, рама мыла маму'.length
}
console.log(strObj);


// #7


const isRamaPos = strObj.str.indexOf("рама");
const isRama = isRamaPos !== -1;
console.log(isRama);

// #8

const strReplace = strObj.str
    .replace("мыла", "моет")
    .replace("рама", "Рама держит");
console.log(strReplace);


// #9

const someStr = "some STRING";
const upperStr = someStr.toUpperCase();
console.log("upperStr:", upperStr);

const lowerStr = someStr.toLowerCase();
console.log("lowerStr:", lowerStr);
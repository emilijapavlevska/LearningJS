/* Rabota so Datumi
const d = new Date();
document.getElementById("demo").innerHTML = d.toUTCString();

Se opredeluva datum vo new Date i go zema mesecot od nizata
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date("2023-07-25");
let month = months[d.getMonth()];
document.getElementById("demo").innerHTML = month;

GET
const d = new Date ();
document.getElementById("demo").innerHTML = d.getDate();

SET
const d = new Date ();
d.setFullYear(2020);
document.getElementById("demo").innerHTML = d;

MATH
document.getElementById("demo").innerHTML = Math.ceil(5.7);
document.getElementById("demo").innerHTML = Math.floor(5.7);
negative/positive/null
document.getElementById("demo").innerHTML = Math.sign(5);

document.getElementById("demo").innerHTML = Math.pow(2,3);
document.getElementById("demo").innerHTML = Math.sqrt(64);

document.getElementById("demo").innerHTML = Math.floor(Math.random() * 100);

IS ENOUGH OLD TO VOTE OR NOT 
    
1. 

function myFunction () {
    let age = document.getElementById("age").value;
    let vote = (age < 18) ? "Is too young":"Old enough";
    document.getElementById("demo").innerHTML = vote + " to vote";



    2. 

    function myFunction() {
    let vote;
    let age = Number(document.getElementById("age").value);
    if (isNaN(age)) {
        vote = "Input is not a number";
    }
    else {
        let vote = (age < 18) ? "Is too young" : "Old enough";

    }
        document.getElementById("demo").innerHTML = vote + " to vote";
    
}

}

IF ELSE

const time = new Date().getHours();
let greeting;

if (time < 10) {
    greeting = "good morning";
}
else if (time < 20) {
    greeting = "good day";
}
else {
    greeting = "good evening";
}
document.getElementById("demo").innerHTML = greeting;

SWITCH
switch (new Date().getDay()) {

    case 0:
        day = "Sunday";
        break;

    case 1:
        day = "Monday";
        break;

    case 2:
        day = "Tuesday";
        break;

    case 3:
        day = "Wednesday";
        break;
    
    case 4:
        day = "Thursday";
        break;
    
    case 5: 
        day = "Friday";
        break;

    case 6:
        day = "Saturday";
}

    document.getElementById("demo").innerHTML = "Today is " + day;

    SWITCH - DEFAULT

    let text;

switch(new Date().getDay()) {

    default:
        text = "Vikend ";
        break;

        case 3:
            text = "Denes e Sreda";
            break;

            case 4:
                text = "Denes e Cetvrtok";

}
document.getElementById("demo").innerHTML = text;

LOOP FOR

1.

const fruits = ["apple", "banana", "orange", "kiwi"];

let txt =""; 
for (
    let f = 0; f < fruits.length; f++)
    {
        txt += fruits[f] + "<br>";
    }

document.getElementById("demo").innerHTML = txt;

2.


const fruits = ["banana", "apple", "kiwi", "mango"];

let i, leng, txt;

for (i = 0, leng=fruits.length, txt=""; i < leng; i++) 
{
        txt += fruits[i] + "<br>";
    }

    document.getElementById("demo").innerHTML = txt;

    const person1 = {fname:"John", lname:"Doe", age:25}; 
const person2 = {first:"Mario", last: "Trump", age:30};
let txt = "";
for (let x in person1) {
  txt += person1[x] + " ";
}
for (let y in person2) {
    txt += person2[y] + " ";
}

document.getElementById("demo").innerHTML = txt;

*/

/*We have a list of names:

Ana,  Simona, Beti, Zoran, Vlade, Martin, Mitre, Mirko, Viktor.

We have a list of fruits:

Orange, Apple, Banana, Cherry, Pineapple.


We need to create a new list that contains Name and Fruit order alphabetically :

Ex: Ana_Apple, Beti_Banana, Martin_Cherry. 


let arr1 = ["Ana",  "Simona", "Beti", "Zoran", "Vlade", "Martin", "Mitre", "Mirko", "Viktor"]; //kreirani se dve nizi arr1 i arr2 so stringovi 
let arr2 = ["Orange", "Apple", "Banana", "Cherry", "Pineapple"];
let arr3 = arr1.concat(" ", arr2).sort(); /*kreirame treta niza arr3 kade shto kje ni gi ispechati dvete listi vo edna
t.e arr1 join arr2 - so concat, potoa za sortiranjeto po azbuchen redosled 
se koristi sort funkcija


document.getElementById("demo").innerHTML = arr3; //go zema id-to demo koe e zadadeno vo html i ja koristime tretata niza arr3 za da ni go prikazi rezultatot kade shto mu se zadadeni chekorite.



2. nacin so LOOP FOR - ovde go pechati sekoe vo nov red

let arr1 = ["Ana",  "Simona", "Beti", "Zoran", "Vlade", "Martin", "Mitre", "Mirko", "Viktor"];
let arr2 = ["Orange", "Apple", "Banana", "Cherry", "Pineapple"];
let arr3 = arr1.concat(" ", arr2).sort();
let i, len, text;

for(
    i = 0, len = arr3.length, text =" "; i < len; i++) {
        text += arr3[i] + "<br>";
      };
document.getElementById("demo").innerHTML = text;


let arr1 = ["Ana",  "Simona", "Beti", "Zoran", "Vlade", "Martin", "Mitre", "Mirko", "Viktor"];
let arr2 = ["Orange", "Apple", "Banana", "Cherry", "Pineapple"];
let arr3 = arr1.concat(" ", arr2).sort();
let i= 0;
let text = "";

for(;arr3[i];) {
    text += arr3[i] + " ";
    i++;
      };
document.getElementById("demo").innerHTML = text;  //vo eden red.


for (let i = 1; i <= 5; i++){
    arr.push(i)
}


*/

/*
let names = ["Ana", "Simona", "Beti", "Zoran", "Vlade", "Martin", "Mitre", "Mirko", "Viktor"];
let fruits = ["Orange", "Apple", "Banana", "Cherry", "Pineapple"];

// Sort the names and fruits arrays alphabetically
names.sort();
fruits.sort()

// ["Ana", "Beti", "Martin", "Mirko", "Mitre", "Simona", "Viktor", "Vlade", "Zoran"]
// ["Apple", "Banana", "Cherry", "Orange", "Pineapple"]

let name_index = 0;
let fruit_index = 0;


let max_items = Math.max(names.length, fruits.length);
let new_list = [];

for (let i = 0; i < max_items; i++) { 
    new_list.push(names[name_index] + "_" + fruits[fruit_index]);

    name_index++;
    fruit_index++;

    if (name_index >= names.length) name_index = 0;
    if (fruit_index >= fruits.length) fruit_index = 0;
}

/**
 * i = 0
 * new_list = ["Ana_Apple"]
 * name_index = 1, fruit_index = 1
 * 
 * i = 1
 * x    
 *  
 * 
 *  
 */
/*
let arr1 = ["Andrea", "David", "Emilija", "Vesna", "Valentina"];
let arr2 = ["Apple", "Banana", "Kiwi", "Mango"];

let arr3 = [];

document.getElementById("demo").innerHTML = new_list;

LOOPS

let x = 5;
let y = 7;

function myFunction(a, b) -- parametri {
    let z = a + a + 2 * b - b;

    return z;
};


for (let i = 1; i <= 5; i++) {
    let br1 = myFunction(i, i) -- argumenti sho gi zema; //3 , 6 

    let br2 = myFunction(i + 1, i + 1); // 6 deka i e 1 plus 1 = 2 i gore 2kata se dodeli na a i b, 9

    let br3 = myFunction(10, i); //21, 22

    let br4 = myFunction(br1, br2); //12, 21, 
    
    console.log(br1, br2, br3, br4);

     * 3
 * 6
 * 21
 * 12  
}

*/

/*
let names = ["Ana", "Simona", "Beti", "Zoran", "Vlade", "Martin", "Mitre", "Mirko", "Viktor"];
let fruits = ["Orange", "Apple", "Banana", "Cherry", "Pineapple"];

// Sort the names and fruits arrays alphabetically
names.sort();
fruits.sort()

// ["Ana", "Beti", "Martin", "Mirko", "Mitre", "Simona", "Viktor", "Vlade", "Zoran"]
// ["Apple", "Banana", "Cherry", "Orange", "Pineapple"]

let name_index = 0;
let fruit_index = 0;


let max_items = Math.max(names.length, fruits.length);
let new_list = [];

for (let i = 0; i < max_items; i++) { 
    new_list.push(names[name_index] + "_" + fruits[fruit_index]);

    name_index++;
    fruit_index++;

    if (name_index >= names.length) name_index = 0;
    if (fruit_index >= fruits.length) fruit_index = 0;
}
document.getElementById("demo").innerHTML = new_list;

*/

/* 


*/



/* den, mesec, godina...

const d = new Date();

console.log(new Date());



console.log("Vneseniot datum pagja vo " + d.getDay());
*/ 

/* Na vnesen iden datum pr. 30/06/2023 da prikazi vo console 30/06/2023 e Petok. Toa e za 5 dena od denes broi 0 from today, niza result, i broi se dodeka dojdi do 30 */

/* vnesvam datum so limit primer 30/06/2023, i da mi ispecati deka e Petok ako go nadmini limitot posle 6ti da ispecati nevaliden deka e 

function getDayOfWeek(dateString) {
    const date = new Date(dateString);
  
    // Check if month is after June (months are zero-based, so July is month index 6)
    const isAfterJune = date.getMonth() > 5;
  
    if (isAfterJune) {
      return 'Invalid date';
    }
  
    const options = { weekday: 'long' };
    const dayOfWeek = date.toLocaleDateString(undefined, options);
    return dayOfWeek;
  }
  
  // Example usage:
  const inputDate = prompt("Enter a date (YYYY-MM-DD):");
  const dayOfWeek = getDayOfWeek(inputDate);
  console.log(dayOfWeek);
  

  FUNKCII

  function zdravo(name){
    return 'Hi' + name + '!';
}

let x = zdravo('Ema');
let y = zdravo('Pavlevska');
let result = x + ' ' + y;
prompt(result);

Na vnesen iden datum pr. 30/06/2023 da prikazi vo console 30/06/2023 e Petok. Toa e za 5 dena od denes

*/

/*
vnesen datum vo string
const inputDate = prompt('enter date: ');
const enteredDate = new Date(inputDate);

const dayIndex = enteredDate.getDay();

const arr1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const result = dayIndex[arr1];

alert("Day " + enteredDate.toDateString());
*/

//kalkulator
/*
const operator = prompt('enter operator: ');

const firstNumber = Number(prompt('enter first number: '));
const secondNumber = Number(prompt('enter second number'));

let result;

if(operator == '+'){
    result = firstNumber + secondNumber;
}
else if (operator == '-') {
    result = firstNumber - secondNumber;
}
else if (operator == '*') {
    result = firstNumber * secondNumber; 
}
else if (operator == '/')  {
    result = firstNumber / secondNumber;
}
else {
    prompt('Invalid input')
}

prompt('The result with ' + operator + ' is ' + result);

*/

/* switch kalkulator

const operator = prompt('choose / * + -');

const n1 = parseFloat(prompt('vnesi prv broj'));
const n2 = parseFloat(prompt('vnesi vtor broj:'));

let result;

switch(operator) {
    case '+':
        result = n1 + n2;
        console.log(`${n1} + ${n2} = ${result}`);
        break;
    case '-':
        result = n1 - n2;
        console.log(`${n1} - ${n2} = ${result}`);
        reak;

    case '*':
        result = n1 * n2;
        console.log(`${n1} * ${n2} = ${result}`);
        break;

    case '/':
        result = n1 / n2;
        console.log(`${n1} / ${n2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}

*/



//funckija sho prima niza i vrakja suma na brojojte od nikzata

/*
let arr1 = [1,2,3];
let sum = 0;

for (let  i = 0; i < i.length; i++) {
   sum += arr1[i];
}

console.log(sum);
*/

/*
function myFunction(a, b) {
    let z = a + a + 2 * b - b;

    return z;
};

function goThroughItems() {

    
    for (let i = 1; i <= 5; i++) {
        let br1 = myFunction(i, i)  //3 , 6 
        
        let br2 = myFunction(i + 1, i + 1); // 6 deka i e 1 plus 1 = 2 i gore 2kata se dodeli na a i b, 9
        
        let br3 = myFunction(10, i); //21, 22
        
        let br4 = myFunction(br1, br2); //12, 21, 
        
        console.log(br1, br2, br3, br4);
        
        
        
    }
}

goThroughItems()

zbir na broevi vo niza

let arr1 = [1,2,3,4,5];
let sum = 0;

for(let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
}
console.log(sum);

*/ 

// JavaScript exercises

//Write Js to display current day and time Today is Tue, 10pm:30
 /*
let d = new Date();

const dname = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
function dayAndTim
e() {
    return {
        day: d.getDay(),
        hours: d.getHours()
    };
    
}

for(let i = 0; i < dname.length; i++)
console.log('Today is ' + dname[dayAndTime().day] + ' and the time is' + dayAndTime().hours);
*/ 

/*
let presentDay = new Date('2023/06/26');

let d2 = new Date(prompt('vnesi datum '));

function days(presentDay, d2) {

let difference = presentDay.getTime() - d2.getTime();

let totalDays = Math.ceil(difference / (1000 * 3600 * 24));

return totalDays;
};
console.log('TOtal days' + totalDays);
*/


/*
let date_1 = new Date();
let date_2 = new Date(prompt('vnesi datum'));

const days = (date_1, date_2) =>{
    let difference = date_1.getTime() + date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
}
console.log(days(date_1, date_2) +" days to world cup");

*/

/*
let currentDate = new Date();
let date2 = new Date(prompt('Enter a date: '));

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function myFunction() {
  let difference = date2.getTime() - currentDate.getTime();
  let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return totalDays;
}

function formatDate(date) {

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const dayOfWeek = days[date.getDay()];

  
  return `${day}/${month}/${year} - ${dayOfWeek}`;
}


if(date2 >= currentDate) {
console.log('Today is ' + formatDate(currentDate) + ', the difference is ' + myFunction() + ' days.');
console.log('Input date is ' + formatDate(date2));
}  

else {
    console.log('The date is unvalid!');
}

*/
/*
let eventHandlers = new Map();

function onClick() {
  console.log('Button clicked!');
}

function onHover() {
  console.log('Mouse hovered over the element!');
}

eventHandlers.set('click', onClick);
eventHandlers.set('hover', onHover);

let eventType = 'click';
let handler = eventHandlers.get(eventType);

if (handler) {
  handler();
}
*/

/* RABOTA SO DATUMI

let currentDate = new Date();
let date2 = new Date(prompt('Enter a date: '));

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function myFunction() {
  let difference = date2.getTime() - currentDate.getTime();
  let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return totalDays;
}
function formatDate(date) {

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const dayOfWeek = days[date.getDay()];

  
  return `${day}/${month}/${year} - ${dayOfWeek}`;
}
const denesenDenVoMilisekundi = Date.now()
const razbirlivaData = new Date( denesenDenVoMilisekundi)

console.log('denes e ', razbirlivaData)


if(date2 >= currentDate) {
console.log('Today is ' + formatDate(currentDate) + ', the difference is ' + myFunction() + ' days.');
console.log('Input date is ' + formatDate(date2));
}  

else {
    console.log('The date is unvalid!');
}

*/

/*

function triple(a) {
    let triple = a + a + a;
    return triple;
}
let triple1 = triple(2);
let triple2 = triple("ho ");
console.log(triple1);
console.log(triple2);

let x = 0.5;
let y = 0.7;

let z = (x * 10 + y * 10) / 100;

console.log(z);

let m = 'Tic';
m = m + 'Tac';
m = m + m;

alert(m);
*/

//Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum

/*
function myFunction(a,b) {

    if (a == b) {
        let result = 3 * (a + b);
        return result;
    }
    else {
        return (a + b);
    }
}
console.log(myFunction(1,2));
console.log(myFunction(2,2));
*/

//Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.


//OBJEKTI
/*const obj = {
    name: 'John',
    age: 50,
    surname: 'Doe',

    cars: {
        car1: 'BMW',
        car2: 'Audi'
    }

}

let p1 = 'cars';
let p2 = 'car2';

console.log(obj.name + ' ' + obj.surname + ' drives ' + obj[p1][p2]);
*/

//Delete object
/*
const student = {
    name : "David Ray",
    sclass: "VI",
    rollno: 12
};

console.log(student)

delete student.rollno;

console.log(student);
*/

//Object length
/*
const stud = {
    name : "David Ray",
    sclass: "VI",
    rollno: 12
};

function count() {
    for (let i = 0; i < stud.sclass.length; i++) {
        return i;
    }
}

console.log(stud.sclass.length);
*/

//Objekti so true false status
/*
const biblioteka = [
{
    avtor: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
},
{
    avtor: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
},
{
    avtor: 'Suzanne Collins',
    title: 'Mockingay',
    readingStatus: false
}
];

    for(let i = 0; i < biblioteka.length; i++) {

        let kniga = "'" + biblioteka[i].title + ' by ' + biblioteka[i].avtor + '.';

        if(biblioteka[i].readingStatus) {
            console.log('Vie ja imate procitano ovaa kniga' + kniga);
        }
        else {
            console.log('Ne ja imate procitano ovaa kniga' + kniga);
        }

    }


*/

//THIS OBJECT
/*
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 48
}

person.fullName = function() {
    return (this.firstName + ' ' + this.lastName).toUpperCase();
}

console.log(person.fullName());

*/


 // JSON strings - STRINGIFY
 /*
const person = {
    name: 'John',
    lastName: 'Doe',
    age: 35
}

let myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString;
*/
/*
const person = {
    age: 50,
    date: new Date()
}

let myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString;
*/
/*
const recipes = {
    title: 'Cake',
    servings: 4,
    ingridients: ['eggs', 'flour', 'cinnamon', 'cocoa']
}


console.log('Title: '+ recipes.title);
console.log('Servings: ' + recipes.servings);
console.log('Ingridients: ');

for (let i = 0; i < recipes.ingridients.length; i++) {
    console.log(recipes.ingridients[i]);
}
*/
/*
const readingList = [

    {
    title: 'ABC',
    author: 'Jas',
    readingStatus: true
    },
    {
        title: 'Makedonija',
        author: 'Goce Delcev',
        readingStatus: false
    }
];

for (let i = 0; i < readingList.length; i++) {

    const book = ' ' + readingList[i].title + ' ' + readingList[i].author;
    
    if(readingList[i].readingStatus){
        console.log("Ja imas procitano " + book);
    }
    else {
        console.log("ne ja imas procitano " + book);
    }
}
*/

/*GET AND SET

// Define an object
const obj = {counter : 0};

// Define Setters and Getters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

// Play with counter:
obj.reset;
obj.add = 6;
obj.subtract = 1;
obj.increment;
obj.decrement;
document.getElementById("demo").innerHTML = obj.counter;
*/

/*
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.yearAge = age;
    this.eyeColor = eye;

    this.name = function() {
        return this.firstName + ' ' + this.lastName + ' ' + this.eyeColor
    };
}

const person1 = new Person ('Marco', 'Williams', 20, 'blue');

console.log(person1.name());
*/
/* proba da se dodaj i tret broj so drug operator
const operator = prompt('enter operator: ');

const firstNumber = Number(prompt('enter first number: '));
const secondNumber = Number(prompt('enter second number'));

let result;

if(operator == '+'){
    result = firstNumber + secondNumber;
}
else if (operator == '-') {
    result = firstNumber - secondNumber;
}
else if (operator == '*') {
    result = firstNumber * secondNumber; 
}
else if (operator == '/')  {
    result = firstNumber / secondNumber;
}
else {
    prompt('Invalid input')
}


prompt('do you want to continue y or n?');


const operator1 = prompt('enter operator: ')
const thirdNumber = Number(prompt('enter third number: '));
let result1;
if(operator == '+'){
result1 = result + thirdNumber;
}
else if (operator1 == '-') {
    result1 = result - thirdNumber;
}
else if (operator1 == '*'){
    result1 = result * thirdNumber;

}
else if (operator1 == '/') {
    result1 = result / thirdNumber;
}
else {
    prompt('Invalid input')
}

prompt('The result with ' + operator1 + ' is ' + result1);

*/
/* THIS OBJ
function chovek(ime, prezime, godini) {
    this.celosnoIme = ime;
    this.celosnoPrezime = prezime;
    this.nGodini = godini;

    this.kredencijali = function () {
        return this.celosnoIme + ' ' + this.celosnoPrezime + ' ' + this.nGodini
    };

}

const covek1 = new chovek('Ema', 'P', 23);
const covek2 = new chovek('Kika', 'M', 23);

document.getElementById('demo').innerHTML = covek2.kredencijali();
*/
/*
const operator = prompt('enter operator: ');

const firstNumber = Number(prompt('enter first number: '));
const secondNumber = Number(prompt('enter second number'));

let result;


if(operator == '+'){
    result = firstNumber + secondNumber;
}
else if (operator == '-') {
    result = firstNumber - secondNumber;
}
else if (operator == '*') {
    result = firstNumber * secondNumber; 
}
else if (operator == '/')  {
    result = firstNumber[i] / secondNumber[i];
}
else {
    prompt('Invalid input')
}


prompt('The result with ' + operator + ' is ' + result);

*/

/*
let currentDate = new Date();
let date2 = new Date(prompt('Enter a date: '));

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function myFunction() {
  let difference = date2.getTime() - currentDate.getTime();
  let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return totalDays;
}

function formatDate(date) {

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const dayOfWeek = days[date.getDay()];

  
  return `${day}/${month}/${year} - ${dayOfWeek}`;
}


if(date2 >= currentDate) {
console.log('Today is ' + formatDate(currentDate) + ', the difference is ' + myFunction() + ' days.');
console.log('Input date is ' + formatDate(date2));
}  

else {
    console.log('The date is unvalid!');
}
*/
/*
const operator = prompt('enter operator: ');

const firstNumber = Number(prompt('enter first number: '));
const secondNumber = Number(prompt('enter second number'));

let result;

if(operator == '+'){
    result = firstNumber + secondNumber;
}
else if (operator == '-') {
    result = firstNumber - secondNumber;
}
else if (operator == '*') {
    result = firstNumber * secondNumber; 
}
else if (operator == '/')  {
    result = firstNumber / secondNumber;
}
else {
    prompt('Invalid input')
}


prompt('do you want to continue y or n?');


const operator1 = prompt('enter operator: ')
const thirdNumber = Number(prompt('enter third number: '));
let result1;
if(operator == '+'){
result1 = result + thirdNumber;
}
else if (operator1 == '-') {
    result1 = result - thirdNumber;
}
else if (operator1 == '*'){
    result1 = result * thirdNumber;

}
else if (operator1 == '/') {
    result1 = result / thirdNumber;
}
else {
    prompt('Invalid input')
}

prompt('The result with ' + operator1 + ' is ' + result1);*/


/*
const operator = prompt('enter operator: ');
const numbers = [];
numbers.push(Number(prompt('Enter num1:')));
numbers.push(Number(prompt('Enter num2:')));
numbers.push(Number(prompt('Enter num3:')));
numbers.push(Number(prompt('Enter num4:')));
numbers.push(Number(prompt('Enter num5:')));

let result;

for(let i = 0; i < numbers.length; i++)

if(operator === '+'){
    result += numbers[i] ;
}
else if (operator === '-') {
    result -= numbers[i] ;
}
else if (operator === '*') {
    result *= numbers[i] ;
}
else if (operator === '/')  {
    result /= numbers[i] ;
}
else {
    prompt('Invalid input')
}

prompt('The result with ' + operator + ' is ' + result);

*/
/*
const numbers = [];
numbers.push(Number(prompt('Enter num1:')));
numbers.push(Number(prompt('Enter num2:')));
numbers.push(Number(prompt('Enter num3:')));
numbers.push(Number(prompt('Enter num4:')));
numbers.push(Number(prompt('Enter num5:')));

const operator = prompt('Enter operator:');

let result;

for (let i = 0; i < numbers.length; i++) {
  if (result === undefined) {
    result = numbers[i];
  } else {
    if (operator === '+') {
      result += numbers[i];
    } else if (operator === '-') {
      result -= numbers[i];
    } else if (operator === '*') {
      result *= numbers[i];
    } else if (operator === '/') {
      result /= numbers[i];
    } else {
      alert('Invalid operator');
      result = undefined;
      break;
    }
  }
}

if (result !== undefined) {
  alert('The result with ' + operator + ' is ' + result);
}
*/
//let a;
//let b;

/*
const operator = (prompt('Vnesi operator / * + - '));

let numbers = [];
numbers.push(Number(prompt('Vnesi prv broj: ')));
numbers.push(Number(prompt('Vnesi vtor broj: ')));
numbers.push(Number(prompt('Vnesi tret broj: ')));
numbers.push(Number(prompt('Vnesi chetvrt broj: ')));
numbers.push(Number(prompt('Vnesi petti broj: ')));

let result = 0;

for(let i = 0; i < numbers.length; i++)

if(operator === '+') {
    result += numbers[i];
}
else if (operator === '-') {
    result -= numbers[i];
}
else if (operator === '*') {
    result *= numbers[i] ;
}
else if (operator === '/') {
    result /= numbers[i] ;
}
else {
    alert('Invalid input');
    result = undefined
    break;
}

alert('Dobieniot rezultat e:' +  result + ' so koristenje na operator' + operator);
*/
/*
const operator = prompt('Vnesi operator / * + - ');

let numbers = [];
numbers.push(Number(prompt('Vnesi prv broj: ')));
numbers.push(Number(prompt('Vnesi vtor broj: ')));
numbers.push(Number(prompt('Vnesi tret broj: ')));
numbers.push(Number(prompt('Vnesi chetvrt broj: ')));
numbers.push(Number(prompt('Vnesi petti broj: ')));

let result;

if (operator === '+') {
  result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
} else if (operator === '-') {
  result = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    result -= numbers[i];
  }
} else if (operator === '*') {
  result = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    result *= numbers[i];
  }
} else if (operator === '/') {
  result = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    result /= numbers[i];
  }
} else {
  alert('Invalid input');
  result = undefined;
}

document.getElementById('demo').innerHTML = numbers && result;

// da gi ispechati vo tabela vnesenite brojki i sumata

*/

//CALLBACK function
/*
function myFunction(name, surname) {
    console.log('Moeto ime e ' + name);
    surname();
}

function callMeLater() {
    console.log('A moeto prezime e Pavlevka');
}

myFunction('Emma', callMeLater);

*/

/* callback, timeout
function myFunction(a){
    a = 2;
    console.log(a * a);
    
}

function povikajMe(b,d){
    
    console.log(b * d);

}

setTimeout(myFunction, 3000);
povikajMe(2,5);
*/

// Promise
/*
const count = true;

let countValue = new Promise (function (resolve, reject) {
    if (count) {
        resolve('there is a count value');
    }
    else {
        reject('there is not a count value');
    }
}
);

countValue
.then(function successValue(result){
    console.log(result);
}
)

.then(function successValue1(){
    console.log('you can call multiple functions')
} )
 */
/*
const operator = prompt('Vnesi operator / * + - ');

let numbers = [];
numbers.push(Number(prompt('Vnesi prv broj: ')));
numbers.push(Number(prompt('Vnesi vtor broj: ')));
numbers.push(Number(prompt('Vnesi tret broj: ')));
numbers.push(Number(prompt('Vnesi chetvrt broj: ')));
numbers.push(Number(prompt('Vnesi petti broj: ')));

let result;

if (operator === '+') {
  result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
} else if (operator === '-') {
  result = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    result -= numbers[i];
  }
} else if (operator === '*') {
  result = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    result *= numbers[i];
  }
} else if (operator === '/') {
  result = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    result /= numbers[i];
  }
} else {
  alert('Invalid input');
  result = undefined;
}

let numNres = '<ul>';
for (let i = 0; i < numbers.length; i++) {
    numNres += '<li>' + numbers[i] + '</li>';
}
numNres += '<li> Rezultat: ' + result + '</li>';
numNres += '</ul>';
document.getElementById('demo').style.fontSize = "20px";
document.getElementById('demo').style.color = "pink";
document.getElementById('demo').innerHTML = numNres;

*/

/*

const students = ['Trajko Trajkovski', 'Petko Petkovski', 'Milka Bijelik'];


for (let i = 0; i < students.length; i++){
 if(students[i]==='Milka Bijelik')
 console.log(students[i] +' your ID is ' + i );
}
*/
const operator = prompt('Vnesi operator / * + - ');

let numbers = [];
numbers.push(Number(prompt('Vnesi prv broj: ')));
numbers.push(Number(prompt('Vnesi vtor broj: ')));
numbers.push(Number(prompt('Vnesi tret broj: ')));
numbers.push(Number(prompt('Vnesi chetvrt broj: ')));
numbers.push(Number(prompt('Vnesi petti broj: ')));

let result;

if (operator === '+') {
  result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
} else if (operator === '-') {
  result = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    result -= numbers[i];
  }
} else if (operator === '*') {
  result = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    result *= numbers[i];
  }
} else if (operator === '/') {
  result = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    result /= numbers[i];
  }
} else {
  alert('Invalid input');
  result = undefined;
}

let numNres = '<ul>';
for (let i = 0; i < numbers.length; i++) {
    numNres += '<li>' + numbers[i] + '</li>';
}
numNres += '<li> Rezultat: ' + result + '</li>';
numNres += '</ul>';
document.getElementById('demo').style.fontSize = "20px";
document.getElementById('demo').style.color = "pink";
document.getElementById('demo').innerHTML = numNres;


















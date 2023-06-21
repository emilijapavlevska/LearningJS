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

*/










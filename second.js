console.log("hello world");
//Aruthmatic operator
let a = 5;
let b = 5;
let c = a + b;
console.log("a+b=", a + b);
console.log("a-b=", a - b);
console.log("a*b", a * b);
console.log("a/b", a / b);
console.log("a%b", a % b);
console.log("a**b", a ** b);


//uranry operator

a = ++a;
console.log("a++", a);
console.log("a+1", a);
console.log("a++", a++);
console.log(a);
//console.log("a+1", a+1);
//console.log("")

//Assignment oparator

let x = 5;
let y = 2;
x -= 4;
y += 4;

console.log("x=", x);
console.log("y=", y);

//comparison Operator

console.log("5==3", a == b);//returns false

let p = 5;
let q = "5";
console.log("p==q", p == q);
console.log("a>=b", a >= b);

//Logical Operator

let m = 5;
let n = 5;

let con1 = m >= n;
let con2 = m === n;

console.log("con1 && con2", con1 || con2);

console.log("!(m==5)", !(m == 5));



//contitional stattement 1

let age = 24;

if (age >= 18) {
    console.log("you can vote");
}

else {
    console.log("you can not vote");
}

//contional statement 2

let mode = "black";
let color;

if (mode === "dark") {
    color = "black";
}
else {
    color = "white";
}

console.log(color);

//condition statement 3

let num = 8;

if (num % 2 === 0) {
    console.log(num, " is Even");
}

else {
    console.log("odd");
}

//else if condition

//it is used to check multiple conditions

let modee = "blue";
let colur;

if (modee === "dark") {
    colur = "black";
    console.log(colur);
}
else if (modee === "blue") {

    colur = "blue";
    console.log(colur);

}
else {
    colur = "white";
    console.log(colur);
}

if (mode === "dark") {
    console.log(mode);
}

age = 25;

let result = age >= 18 ? "adult" : "not adult";
console.log(result);

age >= 18 ? console.log("adult") : console.log("not adult");

//Switch Statement

let k = 1;

switch (k) {
    case 1:
        console.log("The value of k=1");
        break;
    case 2:
        console.log("The value of k=2");
        break;
    case 3:
        console.log("The value of k=3");
        break;
    }
//use of alert
//by the use of alert we give the popup msg
//alert("Welcome come");

//use of prompt

//let name=prompt("hello! Kanchan");
//console.log(name);

let number=prompt("Enter Number");
if(number%15==0)
{
    console.log(number ,"Number is divisible by 15");
}
else{
    console.log(number ,"Number is not Divisible by 15");
}

//let score=prompt("Enter  value 1-100");

if(score>=90 && score<=100)
{
    console.log("A grade");
}
else if(score>=70 && score<=89)
{
    console.log("B grade");
}
else if(score>=60 && score<=69)
{
    console.log("C grade");
}
else if(score>=50 && score<=59)
{
    console.log("D grade")
}











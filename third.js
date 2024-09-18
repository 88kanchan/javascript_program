//apna colage

for(let i=1; i<=10; i++)
{
    console.log("Apna collage");
}

//sum of number 1-5
let sum=0;
for(let j=1; j<=5; j++)
{
sum=sum+j;
}
console.log("sum = " , sum);

//while loop

let l=1;

while(l<=5)
{
    console.log("k =", l);
    l++;
}


//do-while Loop
let o=20;
 do{
    console.log("m =", o);
    o++;
 }while(o<=10);

 //for-of-loop

 //it is used to print charter
 //it is used for iterator

 let str="ApnaCollage"; 
 let size=0;

 for(let v of str)
 {
    console.log(v);
    size++;
 }
 console.log("size of ="+ size);

 let str2="JavaScript";
 let size2=0;

 for(let val of str2)
 {
    console.log(val);
    size2++;
 }

 console.log("size of="+size2);

 //for in loop

 let Student={
    full_name:"Kanchan Mahajan",
    Age1:20,
    cgpa:8.6,
    ispass:true

 };

 for(let key in Student)
 {
    console.log("key =", key , "value =" , Student[key]);
 }

 let person={
    full_Name:"Sanjay Mahajan",
    Age_1:25,
    work:"personal",
    salary:85
 };

 for(let ke in person)
 {
    console.log("key =", ke ,"value =", person[ke]);
 }

 //practic Question 1
 //print even number

 for(let d=1; d<=100; d++)
 {
    if(d%2==0)
    {
        console.log("Even number =" ,d);
    }
    else{
        console.log("Odd Numbe =" , d);
    }
 }

 //practic Question 2


 let gameNum=25;
 //let userNum=prompt("Enter the game Number");


 while(userNum != gameNum)
 {
    userNum=prompt("you entered wrong number");

 }
 console.log("You entered right number");

 //Strings => strings is a squence of chracter
//to ways to create strings

let str1="Apna College";
let str3="kanchan mahajan";

console.log(str1);

console.log(str1[6]);
console.log(str3);

//Template Literals
//Use of backtis

//Example 1
let spicalstring =`This is a template literals ${1+2+3}`;
console.log(typeof spicalstring);
console.log(spicalstring);

//Example 2

let obj={
   item:"pen",
   price:10,
};

let output=`the cost of ${obj.item} is ${obj.price} rupees`;
output=`the cost of ${obj.item} is ${obj.price} reppuees`;
console.log(output);
console.log(output); 

console.log("the cost of" , obj.item , "is" , obj.price , "rupees");

let str4="Apna\tcollage";
console.log(str.length);

let str5=("Apna \n Collage");
console.log(str5);
let str6=("Apna \t Collage");
console.log(str6);

///String Methods

let str7="Apna Collage";
let newstr=str7.toUpperCase();
let newstr2=str7.toLowerCase();
console.log(str7);

console.log(newstr);

//String trim
//is used to remove white spaces

let str8="    Apna Collage   ";
console.log(str8);
console.log(" Afetr trim ",str8.trim())


//string sciles

let str9="0123456";
console.log(str9.slice(2,5));

console.log(str9.concat(str8));

let res=str1+str2+str3+str4;

console.log(res);


//Practice Question on String

let username=prompt("Enter Full name");
let len=username.length;

console.log("@"+username+username.length);




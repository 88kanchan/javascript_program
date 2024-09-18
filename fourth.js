//Arrays
//Number Arrays

let marks=[97 , 82, 75, 64, 36];
console.log(marks);
console.log(typeof marks);
console.log(marks[0]);
 console.log(marks[1]);
 console.log(marks[5]);
 marks[0]=55;
 console.log(marks);

//String Arrays
///iterator using for loop
let hero=['Shyam' , 'Ahetsham'];

for(let ind=0; ind<hero.length; ind++)
{
    console.log(hero[ind]);
}

//for of 

for(let h of hero)
{
    console.log(h);
}
console.log(hero);
console.log(hero[0]);
console.log(hero[1]);

//print cities

let cities=["pune", "mumbai" , "Bengal" , "kolkata"];

for(let city of cities)
{
    console.log(city.toUpperCase());
}

let arr=[85, 97 ,44 ,37 ,76 ,60];

sum=0;
let ar;
for(let valu of arr)
{
    sum=sum+valu;
}
console.log(sum);

let avg=sum/arr.length;

console.log("Average of arr  = " , avg);

console.log(`Average of arr =${avg}`);

//Practice Question 2

let priceProduct=[250,645,300,900,50];

for(let index=0; index<priceProduct.length; index++)
{
    console.log(`price of iteams before offer apply${priceProduct[index]}`)
    let offer=priceProduct[index]/10;
    let finalprice=priceProduct[index]-offer;

    console.log(`final price of index ${index} ${finalprice}`);
}

let foodItems=['potato','apple','litche'];
foodItems.push('chips','kurkure');
console.log(foodItems);
foodItems.pop();
console.log(foodItems);
console.log(foodItems.toString());

//concat function

let mc_heroes=["thor","spiderman","ironman" ,"antman"];
let dc_heroes=["superman" , 'batman'];

let heroes=mc_heroes.concat(dc_heroes);
console.log(mc_heroes);
console.log(dc_heroes);
console.log(heroes);

console.log(mc_heroes.shift());
console.log(mc_heroes.unshift());
console.log(mc_heroes.slice());

//practice Question

let Company=["Bloomberg" , "microsoft" , "uber" ,"Google","IBM"];
console.log(Company.shift());
console.log(Company);

console.log(Company.splice(2,1,"Amazon"));
console.log(Company.push("nexfelx"));












 
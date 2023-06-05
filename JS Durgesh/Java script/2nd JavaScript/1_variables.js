/*

Variables are let,var,const.

*/
/*
//declaration
let message;
//assignment
message="Hey, How are you?";
console.log(message);
*/

//declaration + assignment
let message="Hey, I am fine";
console.log(message);

let a=12,
    b=65, 
    c=949;

console.log(a);
console.log(b);
console.log(c);
//main proprty, here message variable can be declaraed twice
message="He how are you";
console.log(message);

const user="Amol";
console.log(user);
//declaration const twice is not possible
//const user="shubham";

if(5>2){
    console.log("inside block");
    let address="jabalpur";
    console.log(address);
    var city="jabalpur";
    console.log(city);
}
//Here let can not work out of the scope block so address is undefined out of scope
//console.log(address);
//var has no block scope
console.log(city);
//var toerate the redeclaration which  is not good
var x=56;
var x=32;
console.log(x);

z=55;
console.log("value of z is:", z);
var z;

//naming rule
/*
1. alphabate, but it can not start from digit
2. name must contain only letters, digits or symbol-($ and _)
3. keyword can not used as variable name
4. it is a case sensitive
*/

//point num 2
//let var=55;

//V is capital so it wiil not be considered as variable keyword 
let Var=55;
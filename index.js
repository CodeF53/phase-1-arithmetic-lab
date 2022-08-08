/*

    Create a variable called multiply set to an equation that will multiply the variables num1 and num2; the result of the multiplication should be 62.
    Create a variable called random that will generate a random integer greater than 0.
    Create a variable called mod set to an equation that will calculate the remainder of dividing variable num3 by num4; the remainder should be 4.
    Create a variable called max that finds the highest number in a set; the value returned should be 20.

*/
let num1=1;
let num2=62;

let num3=14;
let num4=10;

let set = [1,2,3,20,15,7];

const multiply = num1*num2;
const random = parseInt(Math.random()*10)+1;
const mod = num3%num4;
const max = Math.max(...set);
console.log("hello world");
//Exercise 1:  Write a program that calculates the area of a rectangle.

var length :number = 14;
var weidth : number = 10;

var area : number = length * weidth;
// var area : number = 14 * 10;

console.log(area);

// Exercise 2: Write a program that takes input and calculates 
//the volume of a cube.

var input : number = 5;
var volume : number = 4;

// var result : number = 5**3;
// Math.pow() for power function

console.log("cube",Math.pow(volume,input));

// Exercise 3:  Write a program that checks if a given number is positive, negative, or zero.

var given_number : number = 10
if(10 >0){
    console.log("num1 is positive");
}
else if(10<0){
    console.log('num1 is negitive');
}
else{
    console.log('num1 is Zero');    
}

//Exercise 4:   Write a program that checks if a given number is even or odd.

var num4 : number = 8;
if(num4%2==0){
    console.log("num4 is even");    
}
else{
    console.log("num4 is odd");
}

// Exercise 5:  Write a program that determines if a person is eligible to 
// vote based on their age.

var age : number = 18;
if(age>=18){
    console.log("age is grater than 18");
}
else{
    console.log("age is lessthan 18");
    
}

// Exercise 6:  Write a program that calculates the result of a mathematical expression.	
//((10 + 5) * 3 - 2) / (4 % 3)  - 7) 

var expression : number = ((10 + 5) * 3 - 2) / (4 % 3)  - 7
{
    console.log(expression);   
}








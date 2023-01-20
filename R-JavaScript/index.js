// ***********************************************************************************************************
                                   //    JavaScript
// **********************************************************************************************************
/*
 what is javascript?
 javascript is a scripting programmimg language used  both  client side and server side that allow user to make web page interactive.

 why javascript?
 javascript improve user experience of the web page by converting it from static web page into interactive


 var myName = "Rutvik Makvana"
 var --> variable
 myName --> variable name
 Rutvik Makvana --> value


// ***********************************************************************************************************
                                   //    Naming variables RULES
// **********************************************************************************************************
Start them with a letter, underscore _, or dollar sign $.

After the first letter, you can use numbers, as well as letters, underscores, or dollar signs.

Don’t use any of JavaScript’s reserved keywords.

// difference types of cases in programming
1. camelCase 
2. snake_case
3. kebab-case
4. PascelCase
5. flatcase(all small)


example:
var camelCase = "lowercase word, then uppercase";
var rutvik2Go = "pizza";
var I_AM_HUNGRY = true;
var _Hello_ = "what a nice greeting"
var $_$ = "money eyes";

 */

// ***********************************************************************************************************
                                   //    Data-type
// **********************************************************************************************************

// var myName = "Rutvik Makvana"
// console.log(myName);

//types of data types:-

//string
// var myName = "Rutvik Makvana"
// console.log(typeof(myName));

//number
// var myAge = 20;
// console.log(typeof(myAge));

//boolean
// var iAmRutvik = true;
// console.log(typeof(iAmRutvik));

//undefined
// means not defined a variable



// ***********************************************************************************************************
                                   //    Expression And Operator
// **********************************************************************************************************

/*
5 + 20 - Expression
     5 - Operand
     + - Operator
     20 - Operand

Expression : combination of operand and operator

 > Assignment Operators -> =
 > Arithmetic Operators -> + , - , / , * , %
        modulos operator(%) retuerns the divison remainder
 > Increment and Decrement Operators -> x++ or ++x || x-- or --x

        var num = 15;
        var newNum = num++;
        console.log(num);  --> 16
        console.log(newNum); --> 15

        var num = 15;
        var newNum = ++num;
        console.log(num);  --> 16
        console.log(newNum); --> 16

 > Comparison Operators ->  ==, !=, > , < ,>= ,<=

 > Logical Operators -> &&(AND) , ||(OR) , !(NOT)
         &&(AND) -- all are true
         ||(OR) -- at least one are true
         !(NOT) -- take truth to falsity and vice versa

 > String Concatenation Operators -> +
  the string operator(+) concatenates two string values together
        console.log("hello" + " world") --> helloworld

        var myName = "rutvik";
        console.log(myName + "makvana"); -->rutvikmakvana

> Exponentiation Operators -> **
         2**3 -- 8
         9**2 -- 81
         10**-1 -- 0.1


*/


// ***********************************************************************************************************
                                   //    Control Statement And Loops
// **********************************************************************************************************
/*
 
🤍🤍   if else

// if raining = raincoat
// else no raincoat


var tomr == "rain";

if(tomr == "rain")
{
       console.log('take a raincoat');
}
else
{
       console.log('no need to take a raincoaat');
}
*/



/*

🔴 write a program that works out whether if  given year is a leap year or not?
hint : A noraml year has 365 days ,leap year have 366 with an extra day in fabruary.

var year = 2020;

if (year % 4 === 0){
       if (year % 100 === 0){
              if(year % 400 === 0){
                     onsole.log("THe year " + year + " is a leap year")
              }else{
                     console.log("THe year " + year + " is not a leap year")
              }
       }

       else{
       console.log("THe year " + year + " is a leap year")
       }
}
 else{
       console.log("THe year " + year + " is not a leap year")
}

*/

/*
 
🔴What is truthy and falsy values in javascript?
👉 we have total 5 falsy values in javascript
0
" "
undefined
null
NaN
false** 

if(0 ){
       console.log("OMG, we lose the game")
}else{
       console.log("Yeah, we won the game")
}

if( ){
       console.log("OMG, we lose the game")
}else{
       console.log("Yeah, we won the game")
}

if( undefined ){
       console.log("OMG, we lose the game")
}else{
       console.log("Yeah, we won the game")
}

if(null){
       console.log("OMG, we lose the game")
}else{
       console.log("Yeah, we won the game")
}

if(NaN){
       console.log("OMG, we lose the game")
}else{
       console.log("Yeah, we won the game")
}

---> above all statment given false output means given a else statement.


🤍🤍 Conditional (ternary) operator
---> this operator is the only javascript operator that takes three operands
---> shorter version of if...else statement

     variablename = (condition) ? value1 : value2


var  age = 17;
if(age >= 18){
       console.log("you can vote");
}else{
       console.log("you can not vote");
}


var age = 17;
console.log((age >= 18) ? "you can vote" : "you can not vote");

*/

/*
// 🤍🤍 Switch statement 

var area="circle";
var PI=3.142,l=5,b=4,r=3;
if(area=="circle"){ 
       console.log("the area of the circle is:" +PI*r**2);
}else if(area=="triangle"){
       console.log("the area of the triangle is:" +(l*b)/2);
}else if(area=="rectangle"){
       console.log("the area of the rectangle is: " +(l*b));
}
else{
       console.log("please enter valid data");
}


var area='circle';
var PI=3.142,l=5,b=4,r=3;
switch(area){
       case'circle':
              console.log("the area of the circle is: "+PI*r**2);
              break;
       case'triangle':
              console.log("the area of the triangle is: "+(l*b)/2);
              break;
       case'rectangle':
              console.log("the area of the rectangle is: " +(l*b));
              break;
       default:
              console.log("please enter valid data");
}
 
*/



/*

🤍🤍 While Loop statement

var num = 0;
// block scope
while(num <= 10){
       console.log(num); //infinite loop
       num++;
}

*/


/*
🤍🤍 Do-While Loop statement

var num = 0;

do{
       console.log(num); //infinite loop
       num++;
}while(num <= 10);

*/

/*
🤍🤍 for Loop statement

for( initializer; condition; iteration)
{
  // Code to be executed
}

for(var num=0; num<10; num ++){
    console.log(num);
}

 🔴 JavaScript program to print table for given number (8,9,12,15)using for Loop?

for (var num = 1; num<= 10; num++){
       var tableOf = 8;
       console.log(tableOf + "  * " + num + " = " + tableOf * num);
}

*/

/*

// ***********************************************************************************************************
                                   //    Function
// **********************************************************************************************************

👉 What is function?
--> A javascript function is a block of code designed to perform a particular task.

// Before we useafunction,we need to define it.

// A function definition(also calledafunction declaration,or function statement)
// consists of the function keyword,followed by:

// The name of the function.
// A list of parameters to the function, enclosed in parentheses and separated by commas.
// The JavaScript statements that define the function,enclosed in curly brackets,{...}.

SYNTAX: 
 function functionName()
       {
              //statement
       }


// var a = 10;
// var b = 20;
// var sum = a+b;
// console.log(sum);


function sum(){
       var a=10, b=20;
       var total = a+b;
       console.log(total);
}


👉 Calling Function :
 
// Defining a function does not execute it.
// A JavaScript function is executed when "something" invokes it (calls it).
 
function sum(){
       var a=10, b=20;
       var total = a+b;
       console.log(total);
} // function definition

sum(); // function call

         
🔴 What is the Difference Between  Function Parameter vs Function Arguments
--->
// Function Parameter vs Function Arguments
// Function parameters are the names listed in the function's definition.
// Function arguments are the real values passed to the function.

function sum(a,b){               // (a,b) => Parameters
       var total = a+b;
       console.log(total);
}
sum(20,30);                     // (20,30) => Arguments 



👉 Function expressions
//"Function expressions simply means
// create a function and put it into the variable "

function sum(a,b){
  var total=a+b;
 console.log(total);
}
var funExp =  sum(5,15);


👉 Return Keyword
// When JavaScript reaches a return statement,
// the function will stop executing.

// Functions often computeareturn value.
// The return value is "returned" back to the "caller"

function sum(a,b){
  return total = a+b;
}
var funExp =sum(5,15);
console.log(funExp);


👉 Anonymous Function
// AF is without name of function
// A function expression is similar to and has the same syntax
// as a function declaration One can define"named"
// function expressions (where the name of the expression might
// be used in the call stack for example)
// or "anonymous" function expressions.


var funExp=function(a,b){  
  return total=a+b;
}
console.log('the sum of two no is'+funExp);
 

*/      

// ***********************************************************************************************************
                                   //    ECMAScript
// **********************************************************************************************************

// ECMAScript 2015 / ES6
// ECMAScript 2016 / ES7
// ECMAScript 2017 / ES8
// ECMAScript 2018 / ES9
// ECMAScript 2019 / ES10
// ECMAScript 2020 / ES11

// ECMAScript 2015 / ES6 -->
      /*
     👉 LET and CONST 
     👉 Template strings
     👉 default arguments
     👉 rest operators
     👉 destructuring
     👉 object properties
     👉 arrow function 
     👉 spread operators
     */

       
 // Now It's Time for Modern JavaScripte

// Features of ECMAScript 2015 also known as ES6

// 🔴LET VS CONST vs VAR

/*
var myName="rutvik";
console.log(myName);
myName="keyur";
console.log(myName);

output : rutvik
         keyur
*/   

/*
let myName="rutvik";
console.log(myName);
myName="keyur";
console.log(myName);

output : rutvik
         keyur
*/  

/*
const myName="rutvik";
console.log(myName);
myName="keyur";
console.log(myName);

output : ERROR
*/  


// var --  Function scope
// let and const -- Block Scope  


/*
🔴 Template literals (Template strings)

// JavaScript program to print table for given number(8)?
/output:  8 * 1=8
          8 * 2=16(8*2)
          ⇒8*10=80
   
        for(let num=1;num≤10;num++){
        let tableOf=12;
       //  console.log(table0f+" * " +num + "=" +tableof * num);
         console.log(` ${tableOf} * ${num} = ${tableOf * num}  `);
}



🔴 Deafult Parameters :-
Default function parmeters allow named parameter to be
initialized with default values if no value or undefined is passed. 
 
function mult(a,b=5){
       return a*b;
}
console.log(mult(5));


🔴 Fat Arrow function :-

// normal way of writing function

console.log(sum());

function sum(){
       let a=5; b=6;
       let sum = a+b;
       return `the sum of the two number is ${sum}`;
}


// how to convert in into fat arrow function

const sum = () => {
       let a=5; b=6;
       let sum = a+b;
       return `the sum of the two number is ${sum}`;
}
console.log(sum());

//other : in fat arrow function only one line code then we can write this type :
const sum = () => `the sum of the two number is ${(a=5)+(a=6)}`;
console.log(sum());
                                          


// ***********************************************************************************************************
                                   //    Array
// **********************************************************************************************************                                               


// when we use var, we can stored only one value at a time.
var friend1 = 'aaaa';
var friend2 = 'bbbb';
var friend3 = 'cccc';


// when we feel like storig multiple values in one vaiable then
// instead of var, we will use an array.

// In javascript , we have an array class, and
// array are the prototype of this class.


var myFriends = ['A', 'B', 'C' , true, 52];

⚠ note :- other programming language in array store only one data type but javascript store any data type in array


  index:       0            1           2         3       
var Names = ["salman" ,   "shahrukh" , "aamir" , "akshay"]
          lower index /                          upper index/
         lower boundary                          upper boundary

--> in array all values are called Element.


// Traversal of an Array
// Searching and Filter in an Array
// How to Sort and Compare an Array
// How to Insert, Add, Replace and Delete Elements in Array(CRUD)
// Map(), Reduce(), Filter()


 🔴 Array Subsection 1 : Traversal in array
//navigate through an array

// if we want to get the single data at a time and also
// if we want to change the data
-->
var myFriends = ['vinod', 'ramesh', 'arjun', 'vishal'];
console.log(myFriends[1]);


// if we Want to check the length of elements of an array
-->
console.log(myFriends.length)
output: 4

console.log(myFriends[myFriends.length-1]);
output: vishal
        4


// we use for loop to navigate   

var myFriends = ['vinod', 'ramesh', 'arjun', 'vishal'];

for(var i=0; i<myFriends.length; i++){
       console.log(myFriends[i]);
}

 // After ES6 we have for..in and for..of loop too

 var myFriends = ['vinod', 'ramesh', 'arjun', 'vishal'];

for(let elements in myFriends){
   console.log(elements);    
}

for(let elements of myFriends){
   console.log(elements);    
}


// Array.prototype.forEach()
// Calls a function for each elements in the array.
 

var myFriends = ['vinod', 'ramesh', 'arjun', 'vishal '];
myFriends.forEach(function(element, index, array) {
       console.log(element + "index : " + index + " " + array);
});


myFriends.forEach((element, index, array) => {
      console.log(element + "index : " + index + " " + array); 
}



🔴 Array Subsection 2 : Searching and Filter in an array

<<< Searching >>>

Array.prototype.indexOf() :-->
forward serach
Returns the first (least) index of an element with in the array equal
to an elenent, or -1 if none is found. It search the elenent from the
0th index nunber

var myFriendNames = [vinod ", "bahadur", "thapa", "thapatechnical", "thapa " ];
 
console.log(myFriendNames.indexOf("thapa"));
output - 2

console.log(myFriendNames.indexOf("thapa",2));
output: 2

console.log(myFriendNames.indexOf("thapa",3));
output: 4

console.log(myFriendNames.indexOf("Thapa",3));
output: -1


Array. prototype. lastIndexOf() :-->
search backward
Returns the Last (greatest) index of an element within the array equal
to an element, or -1 1f none 1s found. It search the element last to first

var myFriendNames = [vinod ", "bahadur", "thapa", "thapatechnical", "thapa " ];
console.log(myFriendNames.lastIndexOf("Thapa",3));
output: -1


Array.prototype. includes () :-->
forward search
case sensitive
Determines whether the array contains a value,
returning true or false as appropriate.

var myFriendNames = ["vinod", "bahadur", "thapa", "thapatechnical", "thapa"];
console.log(myFriendNames.includes("thapa"));
 output : true

console.log(myFriendNames.includes("Thapa"));
 output : false

console.log(myFriendNames.includes("thapa",3));
output : true

var myFriendNames = ["vinod", "bahadur", "thapa", "thapatechnical"];
console.log(myFriendNames.includes("thapa",3));
output : false


Array. prototype . find() 
arr.find(callback(element [, index[, array]])[, thisArg])
Returns the found element in the array, if some element in the
array satisfies the testing function, or undefined if not found.
Only problem is that it return only one element

const prices [200,300, 350 , 400, 450, 500, 600];

// price < 400
const findElem = prices.find((currval) ==> {
return currVal < 400;
});

console.log(findElem); 
output: 200


console.log(prices.find(currVal) ==> currVal < 400) );
output : 200



Array.prototype.findIndex() :-->
Returns the found index in the array, if an el ement in the
array satisfies the testing function, or -1 if not found.

console.log(prices.findIndex(currVal) ==> currVal < 400) );
output: 0


<<<< Filter >>>>

Array.prototype.filter()
Returns a new array containing all elements of the calling
array for which the provided filtering function returns true.

const prices = [200,300, 350 , 400, 450, 500, 600];

//price < 400

const newPriceTag = prices.filter( (elem, index) {
return elem < 400;
})
console.log (newPriceTag);
output: [200,300,350]

const newPriceTag = prices.filter( (el em, index) {
return elem < 1400;
})
console.log (newPriceTag);
output: [] --> empty array when codition wrong


🔴 How to Sort and Compare an Array :-->


Array.prototype.sort() 

The sort() method sorts the elements of an array in place and
returns the sorted array. The default sort order is ascending, built
upon converting the elements into strings,
then comparing their sequences of UTF-16 code units values.

const months = ['March', 'Jan', 'Feb', 'Dec', 'Nov'];
console.log(months.sort());
output : ['Dec','Feb','Jan','March','Nov'] --> alphabate wise


const array1 = [1, 30, 4, 21, 100000, 99];
console.log(array1.sort());
output : [1,100000,21,30,4,99] --> number wise

//However, if numbers are sorted as strings,
// *25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort () method will produce an incorrect
// result when sorting numbers.




🔴 How to Insert, Add, Replace and Delete Elements in Array(CRUD)

Array Subsection 4 :- Perform CRUD


       || Array.prototype . push() ||
The push() method adds one or more elements to the
end of an array and returns the new length of the array.

const animals = ['pigs', 'goats', 'sheep '];
animals.push('chicken');
console.log(animals);
output : ['pigs', 'goats', 'sheep','chicken']


const animals = ['pigs', 'goats', 'sheep '];
const count = animals.push('chicken');
console.log(count);

const animals = ['pigs', 'goats', 'sheep '];
animals.push('chicken','cats','cow');
console.log(animals);
output: ['pigs', 'goats', 'sheep','chicken','cats','cow']

 

         || Array.prototype. unshift() ||
The unshift() method adds one or more elements to the
beginning of an array and returns the new length of the array.

const animals = ['pigs', 'goats', 'sheep '];
animals.unshift('chicken');
console.log(animals);
output : ['chicken','pigs', 'goats', 'sheep']


2nd example:

Const myNumbers = [1,2,3,5];
myNumbers.unshift (4,6);
console.log(myNumbers);
output: [4,6,1,2,3,5]


           || Array.prototype.pop() ||
The pop() method removes the last element from an array and returns
that element. This method changes the length of the array

const plants = ['broccoli','cauliflower','kale', 'tomato','cabbage'];
  
console.log(plants);
console.log(plants.pop());
console.log(plants);

output : 
['broccoli','cauliflower','kale', 'tomato','cabbage'];
cabbage
['broccoli','cauliflower','kale', 'tomato'];



             || Array.prototype.shift() ||
The shift() method removes the first element from an array and returns
that removed element . This method changes the length of the array.

const plants ['broccoli', 'cauliflower', "kale', tomato', 'cabbage'];
console.log(plants) ;
console. log(plants.shift());
console.log(plants);

output : 
['broccoli','cauliflower','kale', 'tomato','cabbage'];
broccoli
['cauliflower','kale', 'tomato','cabbage']



              || Array.prototype. splice() ||
Adds and/or removes elements from an array.


👉challange time
1: Add Dec at the end of an array?
2: What is the return value of splice method ?
3: update march to March (update) ?
4: Delete June from an array?

const months ['Jan", 'march', 'April', 'June', 'July' ] ;

//sol1 :- 
const newMonths = months.splice(5,0,"Dec");
console.log(months);
output : ['Jan", 'march', 'April', 'June', 'July','Dec' ]

// if array are so big ,we dont count all element 
const newMonths = months.splice(months.length,0,"Dec");
console.log(months);
output : ['Jan", 'march', 'April', 'June', 'July','Dec' ]


//sol2 :-
const months ['Jan", 'march', 'April', 'June', 'July' ] ;
const newMonths = months.splice(months.length,0,"Dec");
console.log(newMonths);
output : []


//sol3 :-
const months ['Jan', 'march', 'April', 'June', 'July' ] ;
const updateMonth = months.splice(1,1,'March');
console.log(months);
output: ['Jan', 'March', 'April', 'June', 'July']


const indexOfMarch = months.indexOf('march');

if(indexOfMarch =/= -1){
       const updateMonth = months.splice(indexOfMarch,1,'March');
       console.log(months);
}
else{
       console.log('no such data found');

}
output: ['Jan', 'March', 'April', 'June', 'July']


//sol4 :-
const months ['Jan', 'march', 'April', 'June', 'July' ] ;
 
const indexOfMarch = months.indexOf('June');

if(indexOfMarch =/= -1){
       const updateMonth = months.splice(indexOfMarch,1);
       console.log(months);
       console.log(updateMonth);
}
else{
       console.log('no such data found');

}
output: ['Jan', 'March', 'April', 'July']
        ['June']

 
 --> infinity means te element pachi na badha delete karva
 const indexOfMarch = months.indexOf('April');

if(indexOfMarch =/= -1){
       const updateMonth = months.splice(indexOfMonth,Infinity);
       console.log(months);
       console.log(updateMonth);
}
else{
       console.log('no such data found');

}
output: ['Jan', 'March', 'April',]




👉challange time

1: Find the square root of each element in an array?
let arr = [25, 36, 49, 64, 81];

2: Multiply each element by 2 and return only those
2lements which are greater than 10?

let arr = [2, 3, 4, 6, 8];




🔴 Array Subsection 4 --> Map and Reduce Method

Array.prototype.map()
let newArray = arr. map( callback( currentValue l, index[, array]])
// return element for newArray, after executing something
}[, thisArg]);
Returns a new array containing the results of calling a
function on every element in this array.

const array1 = [1, 4, 9, 16, 25];
// num > 9

let newArr = array1. map((curElem, index, arr) ==> {
return curElem> 9;
});
console.log(array1);
console.log(newArr);

output: [1, 4, 9, 16, 25]
        [false,false,false,true,true]


let newArr = array1.map((curELm, index,arr) ==> {
       return `Index no = ${index} and the value is ${curElm} belong to ${arr}`
})
console.log(newArr);

output : 
Index no = 0 and the value is 1 belong to 1,4,9,16, 25
Index no = 1 and the value is 4 belong to 1,4,9,16, 25
Index no = 2 and the value is 9 beLong to 1,4,9,16,25
Index no = 3 and the value is 16 belong to 1,4,9,16,25
Index no = 4 and the value is 25 belong to 1,4,9, 16,25


It return new array without mutating the orignal-array

interview : difference between map() and foreach()
--> 
1. The reyurning value :-
the first difference between map() and forEach() is the returning value.
the forEach() method return undefined and
map() returns a new array with the transformed elements.

2. Ability to chain other methods :-
 
let newArr = array1.map((curELm, index,arr) ==> {
       return `Index no = ${index} and the value is ${curElm} belong to ${arr}`
}).reduce().sort().filter()
--> that means you can attach reduce(),sort() , filter()
and so on after performing a map() method on an array
cant do with forEach() because as you might guess, it returns undefined




👉challange time

1: Find the square root of each element in an array?
let arr = [25, 36, 49, 64, 81];

2: Multiply each element by 2 and return only those
elements which are greater than 10?
let arr = [2, 3, 4, 6, 8];


sol1 :


let arr = [25, 36, 49, 64, 81];

let arrSqr = arr.map((curElem) => {
       return Math.sqrt(curElem);
})
console.log(arrSqr);


output : [ 5, 6, 7, 8, 9 ]


sol2 : 
//we can use the chaining too

let arr = [2, 3, 4, 6, 8];
let arr2 = arr.map((curElem) =>{
       return curElem * 2;
}).filter((curElem) =>{
       return curElem > 10;
})
console.log(arr2);

// output: [ 12, 16 ]


// one line 
let arr2 = arr.map((curElem) =>curElem * 2).filter((curElem) => curElem > 10);
console.log(arr2);




<<<  Reduce Method >>>

flatten an array means to convert the 3d or 2d array into a
single dimensional array

The reduce() method executes a reducer function (that you provide)
on each element of the array, resulting in single output value.

The reducer function takes four arguments :
Accumulator means ek sath jama karna
Current Value
Current Index
Source Array


let arr = [5,6,2];

let sum = arr.reduce((accumalator, curElemr) => {
       // debugger;  
       return accumalator += curElem;
})
console.log(sum)

output : 13



let arr = [5,6,2];

let arr2 = arr.map((curElem) =>  curElem * 2).filter((curElem) => curElem > 10).reduce((accumalator, curElem, index, arr) => {
       return accumalator += curElem;
});
console.log(arr2);
//12


How to fatten an array
converting 2d and 3d array into one dimensional array

const arr = [
         ['zone_1', 'zone_2 1,
         ['zone 3', 'zone_4'],
         ['zone_5 . 'zone_6'],
         ['zone_7', 'zone_8']
            ];

let flatArr = arr.reduce((accum,currVal) => {
       return accum.concat(currVal);
})
console.log(flatArr);






// ****************************************************************************************************************************************
                                   //    String
// ****************************************************************************************************************************************

> Escape Character
> Finding a String in a String
> Searching for a String in a String
> Extracting String Parts
> Replacing String Content
> Extracting string Characters
> Other useful methods


💦 String in javascript ?
--> A JavaScript string is zero or more characters written inside quotes.
JavaScript strings are used for storing and manipulating text.
You can use single or double quotes
Strings can be created as primitives, from string literals, or as objects, using the String() constructor

let myName = "vinod thapa";
let myChannelName = 'vinod thapa';
let ytName - new String( "Thapa Technical ") ;
console.log(myName);
console.1og( (ytName));
  

How to find the length of a string
String.prototype.length
Reflects the length of the string.

let myName = "vinod thapa";
console.log(myName.length);
output : 11



💦Escape Character
let anySentence = "We are the so-called "vikings" from the north.";
console.log(anySentence);
output : syntax error

let anySentence = "We are the so-called \"vikings"\ from the north.";
console.log(anySentence);
output : We are the so-called "vikings" from the north

if you dont want to mess, simply use the alternate quotes
let anySentence = 'We are the so-called "vikings" from the north.';
console.log(anySentence);
output : We are the so-called "vikings" from the north.




💦 Finding a String in a String
String.prototype.index0f(searchValue [, fromIndex] )

-The index0f() method returns the index of (the position of) the first
Occurrence of a specified text in a string
-Javascript counts positions from zero .
0 is the first position in a string, 1 is the second, 2 is the third 


const myBioData = I am the Thapa Technical;
console.log(myBioData.indexOf("thapa"));
output : -1

const myBioData = I am the Thapa Technical;
console.log(myBioData.indexOf("Thapa"));
output : 9

const myBioData = I am the Thapa Technical;
console.log(myBioData.indexOf("t",6));
output : 9



String.prototype.lastIndexOf(searchValue [, fromIndex] ) te
Returns the index within the calling String object of the
last occurrence of searchValue, or -1 if not found.

const myBioData = 'I am the thapa Technical';
console. log(myBioData.lastIndex0f("t", 6));|
output : 5



💦 Searching for a String in a String
String.prototype.search (regexp) 
The search() method searches a string for a specified
value and returns the position of the match

const myBioData ='I am the Thapa Technical ' ;
let sData = myBioData.search("thapa");
console.log(sData);
output : 9

const myBioData ='I am the Thapa Technical ' ;
let sData = myBioData.search("Thapa technical");
console.log(sData);
output : -1

The search() method cannot take a second start position argument.





💦 Extracting String Parts :-
There are 3 methods for extracting a part of a string:

1.slice(start, end)
2.substring(start, end)
3.substr(start, length)

---> The slice() Method 
slice() extracts a part of a string and returns the exti
in a new string.

The method takes 2 parameters : the start position,
and the end position (end not included).

// var str =  "Apple, Banana, Kiwi";
// let res = str.slice(0,4);
// console.log(res);
// output : Appl

The slice() method selects the elements starting at the given start argument, and ends at, but does not include,the given end arguments.
Note : The original array will not be changed.

// var str =  "Apple, Banana, Kiwi";
// let res = str.slice(7, -2);
// console.log(res);
// output : Banana, Ki

  

👉challange time
Q : Display only 280 characters of a string like the one used in Twitter?

// let myTweets =  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose"

// let myActualTweet = myTweets.slice(0,280);  //0-279=280
// console.log(myActualTweet);
// console.log(myActualTweet.length);



---> The substring() Method
substring() is similar to slice().
The difference is that substring() cannot accept negative indexes.

 var str =  "Apple, Banana, Kiwi";
 let res = str.substring(0,4);
 console.log(res); 
 output : Appl

 var str =  "Apple, Banana, Kiwi";
 let res = str.substring(7, -2);
 console.log(res); 
 output : Apple,



---> The substr() Method
substr() is similar to slice().
The difference is that the second parameter specifies the length of the extracted part.

 var str =  "Apple, Banana, Kiwi";
 let res = str.substr(0,4);
 console.log(res); 
 output : Appl

 var str =  "Apple, Banana, Kiwi";
 let res = str.substr(-4);
 console.log(res); 
 output : Kiwi

  

💦 Replacing String Content()

String.prototype.replace(searchFor, replaceWith)
The replace() method replaces a specified value with another value in a string.

// let myBioData = `I am rutvik makvana rutvik`;
// let replaceData = myBioData.replace('rutvik','Rutvik');
// console.log(replaceData);
// output: I am Rutvik makvana rutvik


Pont to remember :-
1. The replace() method does not change the String it is called on. It returns a new string.
2. By default, the replace() method replaces only the first match
3. By default, the replace() method is case sensitive.
writing RUTVIK (with upper-case) will not work




💦 Extracting String Characters :-

There are 3 methods for extracting string characters :

charAt(position)
charCodeAt (position)
Property access [ ]


---> charAt() method 
The charAt() method returns the character at a specified index (position) in a string

let str = "HELLO WORLD";
console.log(str.charAt(0));
output : H



---> charCodeAt() method
The charCodeAt() method returns the unicode of the character at a specified index in a string:
The method returns a UTF-16 code.
(an integer between 0 amd 65535).
The Unicode Standard provides a unique number for every character, no matter the platform, device, application, or langauge.UTF-8 is a popular Unicode encoding which has 88-bit code units.


// var str = "HELLO WORLD";
// console.log(str.charCodeAt(0));
// output : 72



👉challange time
Return the Unicode of the last character in a string

// let str = "HELLO WORLD";
// let lastChar = str.length-1;
// console.log(str.charCodeAt(lastChar));
// output: 68



---> Property Access
ECMAScript 5 (2009) allows property access [ ] on strings

// var str = "HELLO WORLD";
// console.log(str[0]);
//output : H





💦 Others useful methods

let myName = "Rutvik makvana";
console.log(myName.toUpperCase());
output : RUTVIK MAKVANA
console.log(myName.toLowerCase());
output : rutvik makvana


---> concat() Method : 
concat() joins two or more strings


let fName = "rutvik";
let lName = "makvana";

console.log(fName + lName);  //rutvikmakvana
console.log(`${fName} ${lName}`);   //rutvik makvana
console.log(fName.concat(lName));    // rutvikmakvana
console.log(fName.concat(" ",lName));  //rutvik makvana



---> String.trim()
The trim() method removes whitespace from both sides of a string.

var str = "           Hello   World !           ";
console/log(str.trim());
output : Hello   World !



---> Converting a string to an array
A string can be converted to an array with the splite() method

var txt = "a,b,c,d,e";
console.log(txt.split(","));    // Split on comms
console.log(txt.split(" "));     // Split on spaces
console.log(txt.split("|"));      // Split on pipe

output : 
[ 'a', 'b', 'c', 'd', 'e' ]
[ 'a,b,c,d,e' ]
[ 'a,b,c,d,e' ]



// ****************************************************************************************************************************************
                                   //    Date and Time
// ****************************************************************************************************************************************

JavaScript Date objects represent a single moment in time in a platform-independent format. 
Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.


---> Creating Date Objects
There are 4 ways to create a new date object:


> new Date()
> new Date(year, month, day, hours, minutes, seconds, milliseconds)
//it takes 7 arguments
> new Date(milliseconds)
//we cannot avoid month section
> new Date(date string)


---> new Date()
Date objects are created with the new date() constructor.


let currDate = new Date();
console.log(currDate);
//  output :   2022-10-08T05:41:51.091Z
 
console.log(new Date());
console.log(new Date().toLocaleString());  //10/8/2022, 11:17:32 AM
console.log(new Date().toString());    //Sat Oct 08 2022 11:18:15 GMT+0530 (India Standard Time)


--->  Date.now()
returns the numeric value corresponding to the current time - the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC


console.log(Date.now());   //1665208399348

----> new Date(year, month, .....)
7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order)
Note: JavaScript counts months from 0 to 11.
January is 0. December is 11.


var d = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d.toLocaleString());
output : 12/24/2018, 10:33:30 AM

---> new Date(dateString) 
// new Date( dateString) creates a new date object from a date surng

var d = new Date("October 13, 2021 11:13:00");
console.log(d.toLocaleString());
 output : 10/13/2021, 11:13:00 AM

 
---> new Date(milliseconds)
new Date(milliseconds) creates a new date objects as zero time plus milliseconds

var d = new Date(0);
var d = new Date(1665208399348);
var d = new Date(86400000*2);
console.log( d.toLocaleString());



---> Dates Method :


const curDate = new Date();

//How to get the indivisual date
console.log(curDate.toLocaleString());
// 10/8/2022, 11:46:51 AM
console.log(curDate.getFullYear());
// 2022
console.log(curDate.getMonth()); // 0-11 jan to dec
// 9
console.log(curDate.getDate());
// 8
console.log(curDate.getDay());
// 6




// How to set the indivisual date 

console.log(curDate.setFullYear(2022));
// The setFullYear() method can optionally set month and day
console.log(curDate.setFullYear(2022, 10, 5));
console.log(curDate.setMonth( 10)) // 0-11 jan to dec
console. log(curDate.setDate(5)) ;
console. log(curDate.toLocaleString()) ;




---> Time Methods

const curTime = new Date();

// how to get the indivisual Time

console.log(curTime.getTime());
//The getTime () method returns the number of milliseconds since January 1, 1970
console. log(curTime. getHours());
// The getHours() method returns the hours of a date as a number (0-23)
console. log(curTime. getMinutes()) ;
console.log( curTime.getSeconds ()) ;
console. log (curTime.getMilliseconds ()) ;
output : 
1665210366402
11 
56 
6  
402



// how to set the indivisual Time

let curTime = new Date();

console.log(curTime.setTime()) ;
//The getTime() method returns the number of
console.log(curTime.setHours(5));
//The getHours() method returns the hours of
console.log(curTime.setMinutes(5));
console.log(curTime.setSeconds(5)) ;
console. log(curTime.setMilliseconds(5));


**/

// ****************************************************************************************************************************************
                                   //    Math Object
// ****************************************************************************************************************************************

/** 
🧨 PI 
console.log(Math.PI);  // 3.14159265


🧨 Math.round()
// return the value of x rounded to its nearest integer

let num = 10.2565
console.log(Math.round());  //10
let num = 10.5565
console.log(Math.round());  //11


🧨 Math.pow()
console.log(Math.pow(2,3));    //8
console.log(2**3);            // 8


🧨 Math.sqrt()
Math.sqrt(x) returns the square root of x

console.log(Math.sqrt(25));   // 5
console.log(Math.sqrt(81));    //9
console.log(Math.sqrt(66));    //8.124


🧨 Math.abs()
Math.abs(x) returns the absolute (positive) value of x

console.log(Math.abs(-55));     //55
console.log(Math.abs(-55.5));    //55.5
console.log(Math.abs(-955));     //955


🧨 Math.ceil()
Math.ceil(x) returns the value of x rounded up to its nearest integer

console.log(Math.ceil(4.51));    //5
console.log(Math.ceil(99.1));     //100


🧨 Math.floor()
Math.floor(x) returns the value of x rounded down to its nearest integer

console.log(Math.floor(4.7));    //4
console.log(Math.floor(99.9));     //99


🧨 Math.min()
Math.min(x) can be used to find the lowest value in a list of arguments

console.log(Math.min(0, 150, 30, 20, -8, -200));   // -200


🧨 Math.max()
Math.max(x) can be used to find the highest value in a list of arguments

console.log(Math.max(0, 150, 30, 20, -8, -200));   // 150


🧨 Math.random()
Math.random(x) returns a random number between 0 (inclusive), and 1

console.log(Math.floor(Math.random()*10));   // 0 to 9


🧨 Math.trunc()
Math.trunc(x) returns a integer part of a number

console.log(Math.trunc(4.6));    //4
console.log(Math.trunc(-99.1));    //-99 


Note : If the arguments is a positive number, Math.trunc() is equivalent to Math.floor()
       otherwise Math.trunc() is equivalent to Math.ceil()





// ****************************************************************************************************************************************
                                   //    DOM
// ****************************************************************************************************************************************
     
> Window vs Document
> DOM vs BOM
> DCM Navigation
> Searching and getting Elements Reference



🧨 Window vs Document
Window :
 














<!-- interview question javascript -->

**JAVASCRIPT :**
- JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more.
- It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS.


**Question 1:- Why do we call JavaScript as dynamic language?**
- js is dynamic language means data types of the variables can change during the run time.

<br>

**Question 2:- how does JavaScript determine data types ?**
- js determines data types depending upon the value asigned

<br>

 **Question 3:- What is typeof functions?**
 - It allows a programmer to quickly check a variable's data type

<br>

 **Question 4:- How to check data type in JavaScript ?**
 - we can get datatype by using typeOf function.

 <br>
 
**Question 5:- What are different datatypes in JavaScript ?**
```
// primitive
var str = "rutvik";   //string
var num = 10;  //number
var nu = null;  //null
var und = undefined;  //undefined
var bool = true;  //boolean
var big = 100  //big int
var sym = Symbol();   //symbol

//objects
var obj = new Objects();  //object

NOTE : shortcut trick : SNNUBO
```
<br>

**Question 6:- Explain Undefined Data types ?**
- Undefined means the variable has been declared but no value is assigned to it.
```
var x = 10;
var y = "rutvik";
var z;  ---> undefined
```
<br>

**Question 7:- What is Null ?**
- null means absence of data. Null indicates 
- its not zero, 
- its not empty 
- its just absence of data

<br>

**Question 8:- Differentiate between Null and Undefined ?** 
- Undefined : variable has been created but value is not assigned

```
var iAmStandBy;
console.log(iAmStandBy);
console.log(typeof(iAmStandBy)); --> undefined
```

- Null : we assign value NULL, it indicates absence of data.

```
var iAmUseless = null;
console.log(iAmUseless);
console.log(typeof(iAmUseless)); --> object
```
<br>

**Question 9:- Explain Hoisting ?**
- JavaScript Hoisting is a mechanism where variables and function declaration are moved to the top of the scope.  before the code execution
```
console.log(y);
var y=10;
```
<br>

**Question 10:- Are JavaScript initialization hoisted ?**
- No
- it is not saying y=10 it is saying y is undefined, it has not moved the initialization until this ```var y=10;``` line executes.
- once ```y=10;``` line executes then it become 10

<br>

**Question 11:- What are global variables ?**
- Global variables are accessible through out the web page or the document.
```
var x=10;
function fun1()
{
    console.log(x);
}
fun1();
```
<br>

**Question 12:- What are the issues with Global variables ?**
- Global variables can be altered by any part of the code, making it difficult to remember or reason about every possible use.
- This means that they can be changed by any function at any point and may affect the program as a whole.
- problem with global variable is it can make application very hard to debug and buggy.


<br>

**Question 13:- What happens when you declare variable without VAR ?**
```
var x=10;
function fun1(){
    y=100;
    console.log(x);
}
fun1();
console.log(y);
```
- when we declare variable without var keyword
- variable becomes global.
- that means y is also acessible outside the function.

<br>

**Question 14:- What is Use Strict ?**
- Use Strict is a directive which says strickly check variables are defined using the var keyword or the let keyword.
<br>
-------------------------------------------------
<br>

**Question 15:- How to force developers to use Var keyword ?**
- if it not defined using var keyword it will throw an exception.
```
var x=10;
function fun1(){
    y=100;  ---> here we not use var keyword that means compiler throw the error
    console.log(x);
}
fun1();
console.log(y);

Error : ReferenceError : y is not defined
```
<br>

**Question 16:- How can we handle Global Variables ?**
**Question 17:- How can we avoid Global variables ?**
- its difficult to avoid global variables. But we can organize it properly by doing two thing
1. put global variables in a proper Namespace.
2. create closure and apply module pattern and IIFE.

<br>


**Question 18:- What are Closures ?**
- Closures are functions inside function and it makes a normal function stateful.
```
function SimpleFunction(){
    var x=0;
    x++;
}
function ClosureFunction(){
    var x=0;
    function Increment(){
        x++;
    }
    return{
        Increment
    }
}
```
<br>

Question 19:- Why do we need Closures ?
Question 20:- Explain IIFE ?
Question 21:- What is the use of IIFE ?
Question 22:- What is name collision in global scope ?
Question 23:- IIFE vs Normal Function?
Question 24:- What are design patterns ?
Question 25:- Which is the most used design pattern?
Question 26:- What is module Pattern and revealing module pattern ?
Question 27:- What are the various ways to create JavaScript objects?
Question 28:- How can we do inheritance in JavaScript ?
Question 29:- What is prototype in JavaScript ?
Question 30:- Explain Prototype chaining ?
Question 31:- What is Let Keyword?
Question 32:- Are Let variables hoisted ?
Question 33:- Explain Temporal Dead Zone ?
Question 34:- Let vs Var
Question 35:- String Concatenation and Arithmetic puzzle
Question 36 :- What is class in ES6 ?
Question 37 :- So with class Keyword does it imply JavaScript is a OOP language ?
Question 38 :- Differentiate between class and normal function ?
Question 39 :- What is a Arrow function ?
Question 40 :- Why do we use Arrow function ?
Question 41 :- Differentiate between Arrow vs Normal Function ?
Question 42 :- Does Arrow function create its own this ?
Question 43. Explain Synchronous execution ?
Question 44. What is a call Stack ?
Question 45. What is a blocking call ?
Question 46. How to avoid blocking calls ?
Question 47. Explain Asynchronous execution ?
Question 48. Synch vs Asynch ?
Question 49. How can we do Asynch calls ?
Question 50. What is a thread ?
Question 51. Explain Multi-threading ?
Question 52. Is JavaScript Multi-threaded ?
Question 53. Then how does Settimeout run ?
Question 54. What is a WebAPI/Browser API ?
Question 55. What is a Event loop and callback queue?
Question 56. Eventloop and Callback code question










**Question : What is NaN?**
-->

console.log("rutvik" - "makvana");
   output :- NaN means Not a Number

- NaN is a property of the global object.
- In other words, it is a variable in global scope.
- The initial value of NaN is Not-A-Number   

var myPhoneNumber = 9876543210;
var myName = "rutvik makvana";

console.log(isNaN(myPhoneNumber)); --> output : false
console.log(isNaN(myName)); --> output : true


**Question : what is the  difference between == and === ?**
-->

    var num1 = 5;
    var num2 = "5";
    console.log(num1==num2);
    output : true
    ---> beacuse == is check only value

    var num1 = 5;   //number
    var num2 = "5";  //string
    console.log(num1===num2);
    output : false
    ---> beacuse === is check value and data type also


**Question : Why Functions?**
-->   

     // You can reuse code:Define the code once,and use it many times.
     // You can use the same code many times with different arguments,
     // to produce different results.

     // OR

     //Afunction is a  group of reusable code which can be called anywhere
     // in your program.This eliminates the need of writing the same code
     // again and again.

     // DRY ⇒ do not repeat yourself

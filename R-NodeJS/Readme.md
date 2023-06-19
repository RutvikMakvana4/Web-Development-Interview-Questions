**QUE : What is NodeJS?**
- Node.js is an open-source, cross-platform JavaScript runtime environment and << JS library >> for running web applications outside the client's browser.
- Ryan Dahl developed it in 2009

<br>

**QUE : How Node.js works?**
- Node.js is based on V8 engine, it is a virtual machine that utilizes JavaScript as its scripting language and achieves high output via non-blocking /0 and single threaded event loop.

<br>

**QUE : Why Do We Use NodeJs?**
- NodeJs is built on Google Chrome’s V8 engine, and for this reason its execution time is very fast and it runs very quickly.
- There are more than 50,000 bundles available in the Node Package Manager and for that reason developers can import any of the packages any time according to their needed functionality for which a lot of time is saved.
- As NodeJs do not need to wait for an API to return data , so for building real time and data intensive web applications, it is very useful. It is totally asynchronous in nature that means it is totally non-blocking.

<br>

**QUE : What is NPM?**
- NPM stand for Node Package Manager
- NPM is responsible for managing all the packages and modules for nodejs.

<br>

- Node Pakage Manager provides two main functionalities:
1. It provides online repositories for node.js pakages/modules which are searchable on search.nodejs.org
2. It also provides command line utility to install Node.js packages,does version management and dependency management of Node.js packages.

<br>

**QUE : what are modules in Node.js?**
- modules are like JavaScript libraries that can be used in a Node.js application to include a set of functions.
- To include a module in a nodejs application, use require() function with the parenthesis containing the name of the module.

```
//Creating a web server

var http = require('http');
var server = http.createServer(function(req, res){
    //write code here
});
server.listen(2000);
```

- so many modules :
- http - for creating http server
- util - includes utility functions usefuk for developers
- fs - allows you to work with the file system on your computer.


<br>


**QUE : Why is Node.js being preferred over other backend technoloies like JAVA And PHP?**
- nodejs is really fast
- npm has over 50000 bumdles for ate the developers disposal
- perfect for data intensive, real time web applications as nodejs never waits for an API to return data.
- Better synchronization of code between server and client due to same code base
- easy for web developers to start using nodejs in their project as it is a javascript library.

<br>

**QUE : Which database is more popularly used with Node.js?**
- MongoDB is the most popularly used database used with Node.js, it is a NoSQL, cross-platform, document-oriented database that provides, high performance, high availability, and easy scalability.

<br>


**QUE : Mention a couple of popular libraries used in Node.js?**
- Express is a flexible Node.js web application framework which provides a wide set of features to develop both web and mobile application
- Mongoose is also a Node.js web application framework that makes connecting an application to a database a much simpler task.

<br>


**QUE :  what are the pros and cons of nodejs?**
**pros :**
- Fast processing and an event-based model
- Uses JavaScript which is Rnewn by many developers.
- Node Package Manager has over 50,000 packages that provide functionality to an application.
- Best suited for streaming huge amounts of data and l/O intensive operations

**cons :** 
- Not suitable for heavy computational tasks
- Using callback is complex since you end up with many nested callbacks.
- Dealing with relational databases is not a good option for Node.js
- Since Node.js is single-threaded, CPU intensive tasks is not its strong suit.

<br>

**QUE : What is the command used to import external libraries?**
- Command require is used for importing external libraries,
- for example, ```var http=require ("http");```
- This will load the http library and the single exported object through the http variable.
  
<br>

**QUE : What is event driven programming mean?**
- Event-Driven programming approach exceedingly uses events to trigger various functions. An event can be anything, such as the pressing of a key or clicking of a mouse button
- A call-back function already registered with the element is executed, whenever an event is triggered.

<br>

**QUE : What is an Event loop in nodejs?**
- Asynchronous callbacks are handled by an event loop in Node.js. It is the foundation of the non-blocking input/output in Node.js, making it one of the most important features of the environment

<br>

**QUE : What is an Event Emmiter in nodejs?**
- EventEmitter is a class which holds all the objects that can emit events Whenever an object from the EventEmitter class throws an event, all the attached functions are called upon synchronously
```
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
console.log('an event occurred!');
myEmitter.emit('event');
```

<br>

**QUE : What are the two types of APi functions in nodejs?**
1. Asynchronous, non-blocking functions
2. Synchronous, blocking functions

<br>

**QUE : What is package.json file?**
- The package.json file is the heart of a Node.js system
- This file holds the metadata about a particular project package.json is present in the root directory of any Node application or module.
- This is how a package.json file looks like immediately after creating a Node.js project using the command : ```npm init```
- You can edit these parameters at the time of creation of a Node.js project

<br>

**QUE : How would you use a URL module in Node.Js?**
- The URL module of Node.js provides various utilities for URL resolution and parsing
- It is a built-in module that helps in splitting up the web address into a readable format

<br>

**QUE : what is the ExpressJS package?**
- Express is a flexible Node.js web application framework which provides a wide set of features to develop both web and mobile applications.

<br>

**QUE : How to create a simple Express JS application?**
- The request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on
- The response object represents the HTTP response that an Express app sends when it gets an HTTP request.

```
var express = require('express);
var app = express();
app.get(/', function (req, res){
res.send(Hello World');
})
var server = app.listen (8081, function ) {
var host = server.address().address
var port = server.address().port
console.log("Example app listening at http://%s:%s", host, port)
})
```
<br>

**QUE : What are Streams in Node.js?**
- Streams are objects that let you read data or write data continuously
- There are four types of streams:
1. Readable (Streams from which data can be read)
2. Writable  (Stream to which data can be written)
3. Duplex (both readable and writable streams)
4. Transform (Streams that can manipulate the data while it is being read or written)

<br>

**QUE : How do you install, update and delete a dependency?**
- Install dependency : npm install express

- Update dependency : npm update

- Uninstall dependency : npm uninstall express

<br>

**QUE : How to create a simple server in Node.js that returns Hello World?**
```
1. //main.js file
var http = require("http");

http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hello World');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');

2. $ node main.js

3. Output : Server running at http://127.0.0.1:8081/
```

<br>


**QUE : Explain asynchronous and non-blocking API in Nodejs?**
- All the API's of Node.js library are asynchronous which means non-blocking
- Node.js based server never waits for an API to return data, instead it moves to the next API after calling it, and a notification mechanism of Events of Node.js responds to the server for the previous API call

<br>

**QUE : how do we implement async in Node.js?**
- This is the async code that asks the javascript engine running the code to wait for the request.get() function to complete before moving on to the next line to execute it.
```
async function fun1(req, res){
let response = await request.get('http://localhost:3000');
if(response.err) { 
    console.log('error);
    }
else{
     console.log('fetched response');
}
```
<br>

**QUE : What is the purpose of module.exports?**
- A module in Node.js is used to encapsulate all the related codes into a single unit of code which can be interpreted by shifting all related functions into a single file.
- You can export a module using module.exports so that it can be imported in another file using require keyword.

<br>

**QUE : what i callback function in nodejs?**
- A callback is a function called at the completion of a given task and this prevents any blocking, and allows other code to be run in the meantime.


<br>

**QUE : what is REPL in nodejs?**
- REPL stands for Read Eval Print Loop and it represents a computer environment like a window console or unix/linux shell where a command is entered, and system responds with an output.

- REPL performs the following desired tasks:
- Read - Reads user's input, parses the input into JavaScript data-structure and stores in memory
- Eval - Takes and evaluates the data structure
- Print - Prints the result Copy
- Loop - Loops the above command until user presses ctrl-c twice.


<br>

**QUE : What is the control flow function?**
- Control Flow function is a piece of code which runs in between seversl asyncronous function calls.

<br>

**QUE : How Control flow controls the function calls?**
- The Control Flow does the following jobs:
- Control the order of execution
- Collect data
- Limit concurrency
- Call the next step in a program

<br>

**QUE : what is the use of Buffer class in Node.js?**
- Buffer class stores raw data similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap.
- Buffer class is used because pure JavaScript is not compatible with binary data.

<br>

**QUE : What is piping in nodejs?**
- Piping is a mechanism to connect output of one stream to another stream.
- It is normally used to get data from one stream and to pass output of that stream to another stream.

<br>

**QUE : What are some of the flags used in read/write operation in files?**
- r-Open file for reading. An exception occurs if the file does not exist.
- r+ Open file for reading and writing. An exception occurs if the file does not exist.
- w - Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
- wt Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
- a Open file for appending. The file is created if it does not exist.
- a+ Open file for reading and appending. The file is created if it dos not exist.

<br>


**QUE : How will you open a file in nodejs?**
```
 fs.open(path, flags[,mode],callback)
```

<br>

**QUE : What is Callback hell?**
- Callback hell, also known as the Pyramid of Doom, is caused by intensively nested, unreadable and unmanageable callbacks, which in turn makes the code harder to read and debug
- It is caused by improper implementation of the asynchronous logic.
  
<br>

**QUE : What is Reactor Pattern in Nodejs?**
- Reactor Pattern is a concept of non-blocking I/O operations
- This pattern provides a handler that is associated with each /O operation and as soon as an I/O request is generated, it is then submitted to a demultiplexer

<br>

**QUE : What is a test pyramid in NodeJs?**
- A test pyramid is a figure which explains the proportion of unit tests, integrations tests, and end-to-end tests that are required for the proper development of a project
- The components of a test pyramid are given below:
  
1. Unit Tests: They test the individual units of code in isolation
2. Integrations Tests: They test the integration among dissimilar units
3. End-to-End (E2E) Tests: They test the whole system, from the User Interface to the data store, and back.

<br>

**QUE : Describe the exit codes of Nodejs?**
- Exit codes are a set of specific codes which are used for finishing a specific process. Given below are some of the exit codes used in Node.js:

- Uncaught fatal exception
- Unused
- Fatal Error
- Internal Exception handler Run-time failure
- Internal JavaScript Evaluation Failure

<br>

**QUE : Explain the concept of middleware in nodejs?**
- Middleware is a function that receives the Request and Response objects. Most performed tasks by the middleware functions are:

- Execute any type of code
- Update or modify the request and the response objects
- Finish the request-response cycle
- Invoke the next middleware in the stack

<br>

**QUE : What are the types of a HTTP requestes?**
- Http defines a set of request methods to perform thedesired actions. These request methods are:

- GET: This request used to retrieve the data
- POST: Generally used for causing a change in state or reactions on the server
- HEAD: The HEAD method is similar to the GET method but asks for the response without the response body
- DELETE: It is used to delete the predetermined resource

<br>

**QUE : how would you connect a MongoDB database to nodejs?**
- To create a database in MongoDB: start by creating a MongoClient object then specify a connection URL with the correct ip address and the name of the database you want to create

```
var MongoClient = require('mongodb'). MongoClient;
var url = "mongodb://localhost:27017/mydb":
MongoClient.connect(url, function(err, db) {
if (err) throw er;
console.log('Database created!"):
db.close();
```






  

QUE : what is ExpressJS?
Express.js is a free open-source, light-weight node Js based web application framework.
Itis designed for building (single-page, multi-page, and hybrid) web applications and APls.
It has been developed by TJ Holowaychuk in 2010 and written in JavaScript.



QUE : feauters :
Middlewares: Set up middlewares in order to respond to HTTP/RESTful Requests.
Routing: Itis possible to defines a routing table in order to perform different HTTP operations.
Templates: Dynamically renders HTML Pages based on passing arguments to templates.
High Performance:express prepare a thin layer, thersfore , the perfoemance is adwquate.
Database Support: Express supports RDBMS as well as NosQL databases.
Express prepare a thin layer, therefore, the performance is adequate.
MVC Support: Organize the web application into an MVC architecture.



QUE : how to install expressjs?
npm install express - save


QUE : what is scaffolding in expressjs?
scaffolding is creating the skeleton structure of application.
there are two ways to do this :
express application generator
yeoman



QUE : how to serve static files in express.js?
app.use(express.static('public'))


QUE : what is routing?
Routing refers to determining how an application responds to
a client request to a particular endpoint, which is a URI (or path)
and a specific HTTP request method (GET, POST, PUT etc).
Ex: app.get('/' ,(req,res)=>{
Res.send('welcome to express')
}



QUE : dynamic routing



QUE : middleware
Middleware is a function that is invoked by the Express routing layer before the final request handler. Middleware function end
the request response cycle. Call the next middleware function in the stack.



QUE : types of middleware?
1. Application level 
2. router level
3. error handling
4. built in
5. thrd party



QUE : which template engines does supoort express?
Express.js supports any template engine that conforms with the path, callback signature.
Ex: ejs, hbs, pug etc


QUE : how database integrate in expressjs?
Adding the capability to connect databases to Express apps is just a matter or loading an appropriate Nodejs driver for the
patabase in your app.
Express.js supports many RDBMS & NoSQL Database like:
Mongodb
mysql
oracle
posgresql
sql server
sqlite




QUE : error handling in expressjs and how to redirect 404 errors to a page in expreejs?
var express = requirel('express');
app=express ():
app.use(function(err, req, res, next)
{
console.error(err.stack)
res.status(500).send('Something went wrong, Expressjs Interview Questions')
})
       //To redirect 404 errors
var express = requirel('express'),
app=express();
app.use(function (req, res, next) {
res.status(404).json({ errorCode: 404, erorMsg: "route not found"});
});




QUE : what is the use of next parameter in expressjs?



QUE : what is app.use()
Ihe method app.usej has one optional string parameter path and one mandatory Tunction parameter callback, For example,
to implement a logger with a date, time, request method and URL.



QUE : how to render plain html in expressjs web apps?
There's no need to "render" HTML with the res.render() function. It you have a specific file, use the res.sendfile() function.
T you are serving many assets trom a directory, use the express.static() middleware function.


QUE : what are Http request object properties?
HTTP request object has properties for request query string, parameters, body, HTTP Headers etc. We can also use another name for request. By default, the first parameter of callback function of http method is request.
Request properties :
req.url
req.query
req.params



QUE : what are Http response object properties?
HTTP response object is the response Send by express app when it gets an HTTP request. response is the second parameter
of callback function of htt



QUE :
var express = require("express");
var app = express();
app .get("/", function(req,res){
    res.write("hello, express");
    res.end();
});
var port = process.env.port  || 1305;
app.listen(port);
console.log("server is running at http://localhost:" + port);



QUE : what is body parser?
Parse incoming request bodies ina middleware before your handlers, available under the req.body property.


QUE : what is the role of process.env?
The process.env is the global object. All environment variables are get available through this object. Suppose we have to
set the PORI in variable, then this will be accessible through process.env.PORT


QUE : what is cookie and what purposse does it use?



QUE : session



QUE : how to config properties in expressjs?



QUE : how to allow cors ?

QUE : how debugging are done in expressjs

QUE : what is express validatoe used for

QUE: what are the differnet methods in REST API?

QUE : express template engine?

QUE : why to use expressjs?



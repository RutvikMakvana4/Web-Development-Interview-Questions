**QUE : What is Reactjs?**
- Reactjs is a frontend javascript library for building user interfaces.
- it was developed by facebook and is maintained by facebook and the open source community. 
- It’s ‘V’ in MVC.
- ReactJS is an open-source, component-based front-end library responsible only for the view layer of the application.


**QUE : what is MVC?**
- MVC stand for Model View Controller
- The core concept of mvc is to seprate the business logic, user interface and data modelling from each other.
<br>

- Model : a model extracts data from a database like cloud,local storage, api. sometimes it consist of some business logic
- view : view represents the user interface of the app, it shows the modelled data and taking inputs from the user
- Controller : Controller mostly consist of some business logics, that is what will be displayed to user , also handling user input.

<br>

- user interacts with view in which data is displayed and provide the input with controller through view.
- controller is like brain it manipulates the data from the user or takes the data from the model to work on it and provides it to the view which shows the desired data to user.

<br>

**QUE : Why we use ReactJS?**
- ReactJS is to develop User Interfaces (UI) that improves the speed of the apps. 
- It uses virtual DOM (JavaScript object), which improves the performance of the app. The JavaScript virtual DOM is faster than the regular DOM.We can use ReactJS on the client and server-side as well as with other frameworks. 
- It uses component and data patterns that improve readability and helps to maintain larger apps.

------------------------------------------------------------------------------------------------------------------------------------------

**QUE : What is JSX?**
- JSX stand for Javascript Xml
- JSX is a javascript extension and  is used to create react elements.
- These elements are then rendered to the React DOM.
- JSX is a combination of html and javascript to use in reactjs.


```const jsx = <h1>this is JSX</h1>;```
- But this JSX code is not understandable by the browsers, so babel like compilers are used to convert it into browser readable code

<br>

**QUE : why use jsx?**
- It is faster than regular JavaScript because it performs optimization while translating the code to JavaScript.
- Instead of separating technologies by putting markup and logic in separate files, React uses components that contain both. 
- It is type-safe, and most of the errors can be found at compilation time.
- It makes easier to create templates.

<br>

**QUE : Nested Elements in JSX**
- To use more than one element, you need to wrap it with one container element. Here, we use div as a container element which has three nested elements inside it.

```
import React, { Component } from 'react';  
class App extends Component{  
   render(){  
      return(  
         <div>  
            <h1>JavaTpoint</h1>  
          <h2>Training Institutes</h2>  
            <p>This website contains the best CS tutorials.</p>  
         </div>  
      );  
   }  
}  
export default App;
```

<br>

**QUE : JSX Attributes**
```
 <p demoAttribute = "demo">This website contains the best CS tutorials.</p>
```

- JSX uses camelcase for naming
- html - class
- JSX - className
- because the class is the reserved keyword in JavaScript.


// custom attibutes : 
```
<p data-demoAttribute = "demo">This website contains the best CS tutorials.</p>  
```
- We can also use our own custom attributes in JSX. For custom attributes, we need to use data- prefix. In the below example, we have used a custom attribute data-demoAttribute as an attribute for the ```<p>``` tag.

<br>

**QUE : In JSX, we can specify attribute values in two ways:**
```
1. As String Literals: 
- We can specify the values of attributes in double quotes:

var element = <h2 className = "firstAttribute">Hello JavaTpoint</h2>;  

2. As Expressions:
- We can specify the values of attributes as expressions using curly braces {}:

var element = <h2 className = {varName}>Hello JavaTpoint</h2>
```

<br>

**QUE : JSX comments**
- begin with /* and ends with */ and wrapping them in curly braces {} just like in the case of JSX expressions.
 ```
 {/* This is a comment in JSX */}
```

<br>

**QUE : JSX styling**
- React always recommends to use inline styles. To set inline styles, you need to use camelCase syntax. React automatically allows appending px after the number value on specific elements. 

```
import React, { Component } from 'react';  
class App extends Component{  
   render(){  
     var myStyle = {  
         fontSize: 80,  
         fontFamily: 'Courier',  
         color: '#003300'  
      }  
      return (  
         <div>  
            <h1 style = {myStyle}>www.javatpoint.com</h1>  
         </div>  
      );  
   }  
}  
export default App;  
```

- NOTE: JSX cannot allow to use if-else statements. Instead of it, you can use conditional (ternary) expressions.....
```
import React, { Component } from 'react';  
class App extends Component{  
   render(){  
      var i = 5;  
      return (  
         <div>  
            <h1>{i == 1 ? 'True!' : 'False!'}</h1>  
         </div>  
      );  
   }  
}  
export default App;  

output : false!

```

----------------------------------------------------------------------------------------------------------------------------------

**QUE : React Components ?**
- Developers write more than thousands of lines of code for developing a single page application. These applications follow the traditional DOM structure, and making changes in them was a very challenging task. If any mistake found, it manually searches the entire application and update accordingly. 
- component-based approach was solve this problems
- In this approach, the entire application is divided into a small logical group of code, which is known as components.

<br>

**QUE : types of comonents?**
- In ReactJS, we have mainly two types of components.

1. Functional Components :
- Functional components are simply javascript functions. We can create a functional component in React by writing a javascript function. These functions may or may not receive data as parameters.

```
const Democomponent=()=>
{
    return <h1>Welcome Message!</h1>;
}
```

2. Class Components :
- The class components are a little more complex than the functional components. The functional components are not aware of the other components in your program whereas the class components can work with each other. We can pass data from one class component to other class components. We can use JavaScript ES6 classes to create class-based components in React. 

```
   class Democomponent extends React.Component
{
    render(){
          return <h1>Welcome Message!</h1>;
    }
}
```

<br>

**QUE : what is the use of render() in React?**
- It is compulsory for each component to have a render() function
- render() function retuens the HTML which s to be displayed in a component
- If you need to render more than one element, all the elements must be inside one parent tag like ```<div>```, ```<form>```.

```
import React from 'react'

class App extends React.Component{
   render(){  
      return(
         <h1>Hello Simplilearn</h1>
      )
   }
}
export default App
```

<br>

**QUE : Render the component**
```
import React from 'react'; 
import ReactDOM from 'react-dom'; 
  
// This is a functional component 
const Welcome=()=>
{ 
        return <h1>Hello World!</h1>;
} 
  
ReactDOM.render( 
    <Welcome />, 
    document.getElementById("root") 
); 
```

1. We call the ```ReactDOM.render()``` as the first parameter.
2. React then calls the component Welcome, which returns ```<h1>Hello World!</h1>;``` as the result.
3. Then the ReactDOM efficiently updates the DOM to match with the returned element and renders that element to the DOM element with id as “root”.


------------------------------------------------------------------------------------------------------------------------------------------

**QUE : What Is 'State' in ReactJS?**
- The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.

```
class Greetings extends React.Component {
  state = {
    name: "World"
  };

  updateName() {
    this.setState({ name: "Simplilearn" });
  }

  render() {
      return(
          <div>
              {this.state.name}
          </di>
      )
  }
}
```

<br>

**QUE : what is props in Reactjs ?**
- Props stand for "Properties."
- They are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It gives a way to pass data from one component to other components. It is similar to function arguments. Props are passed to the component in the same way as arguments passed in a function.
- Props are immutable so we cannot modify the props from inside the component.
- Inside the components, we can add attributes called props.
- These attributes are available in the component as this.props and can be used to render dynamic data in our render method.
- When you need immutable data in the component, you have to add props to reactDom.render() method in the main.js file of your ReactJS project and used it inside the component in which you need.

```
App.js

import React, { Component } from 'react';  
class App extends React.Component {  
   render() {     
      return (  
          <div>  
            <h1> Welcome to { this.props.name } </h1>    
            <p> <h4> Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. </h4> </p>          
          </div>  
      );  
   }  
}  
export default App;
```
```
Main.js

import React from 'react';  
import ReactDOM from 'react-dom';  
import App from './App.js';  
  
ReactDOM.render(<App name = "JavaTpoint!!" />, document.getElementById('app')); 
```
```
Output :
Welcom to JavaScript!!!
Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. 
```


**QUE : Default Props**
- It is not necessary to always add props in the reactDom.render() element. You can also set default props directly on the component constructor.
```
App.defaultProps = {  
   name: "JavaTpoint"  
} 
```

**QUE : Difference between state and props ?**
- https://www.javatpoint.com/react-state-vs-props


-------------------------------------------------------------------------------------------------------------------------

**QUE : What are react hooks?**
- Features of class based componenets in easily used in  function based components with the help of hooks
- It allows you to use state and other react features without writing a class
- hooks are the functions which "hooks into" react state and lifecycle features from function componenets.
- it does not work inside classes.
- Hooks should always be used at the top level of the react fucntions.


**QUE : what is state in react?**
- state of a component is an object that holds some data
- this data influences the output of a componenets.

```
import React from 'react';

class App extends React.Component {
   constructor(props){
      super(props);

// State holds the data that a component renders on the web app   
  this.state = {
    car : "1,600 cc",
    bike : "150cc"
  }
}

  render() {
      return(
          <div>
             //This is how we access the state properties
              <h1>{this.state.car}</h1>
              <h2>{this.state.bike}</h2>
          </di>
      )
  }
}
```


**QUE : what are props in React?**
- props is short for properties , that allow us to pass arguments or data to componenets
- props are passed to components in the way similar to that of hrml tag attributes

```
//App.js
import React from 'react';

class App extends React.Component {
   render() {
      return(
          <div>
             //This is how we access the properties passed to a component
              <h1>{this.state.car}</h1>
              <h2>{this.state.bike}</h2>
          </div>
          );
      }
   }


//This is how we pass the properties to a component 
//Main.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

reactDOM.render(<App carProp = "1600 cc" bikeProp = "150cc"/>,
     document.getElementById('app')};
)

export default App;
```


**QUE : difference between state and props?**
```
factor                  state                                      props       
Use                   hold imfo about the components               Allow to pass data from one component to other components as an argument
Mutability            is mutable                                   Are immutable
Read-only             can be changed                               Are read only
child components      cannot be accessed by child components       props can be accesses by the child components
stateless compo.       cannot have state                           can have props
```


**QUE : Differences between class and functional components?**
```
factor                      class components                              functional components
state                      can hold or manage state                       cannot hold or manage state
simplicity                 complex as compared to stateless compo.        simple and easy to understand
lifecycle methods          can work with all lifecycle methods            does not work with any lifecycle method
Reusability                can be reused                                  cannot be reused
```



**QUE : explain lifecycle method of components?**
- getinitialState(): It is executed before the creation of the component
- componentDidMount(): It is executed when the component gets rendered and placed on the DOM
- shouldComponentUpdate(): It is invoked when a component decides any changes to the DOM and returns true or false value based on certain conditions
- componentDidUpdate(): It is invoked immediately after rendering takes place
- componentWillUnmount(): It is invoked immediately before a component is destroyed and unmounted permanently

------------------------------------------------------------------------------------------------

**QUE : what is Redux?**
- Redux is an open-source, Javascript library used to manage application state.
- React uses redux for building the user interface.
  

**QUE : what are the componenets of redux?**
- Store - it holds the state of the application
- Action  - it is the source imformation for the store
- reducer - it specifies how the application stste changes in response to actions sent to the store


**QUE : what is flux?**
- flux is the application architecture that facebook uses for building web applications
```
Action -> dispatcher -> Store  ->  View
```

**QUE : how is redux different from flux?**

**Redux :**                              
- redux is an open source js library used to manage application state
- stores state is immutable
- it can only have a single store
- it uses the concept of reducer

**Flux :** 
- flux is an architecture and not a framework or library
- store state is mutable
- it can have mutiple stores
- it uses the concept of dispatcher


---------------------------------------------------------------------------

**QUE : what is react router?**
- react router is a package which is used to create routing in a react application


**QUE : why do we need react router?**
- react router is used for developing single page web applications
- it allows multiple views in a single application by defining routes in the react application



**QUE :  how is react routing difference from converntional routing?**
**React routing**
- single html page
- user navigates multiple views in the same file
- the page dpes not refresh since it is a single file
- improved performance

**Conventional routing**
- each view is a new html file
- user navigates multiple file for each view
- the page refreshes every time useer navigates
- slower performance



**QUE : how do you implement react routing?**
```
const routing = (
   <Router>
   <div>
   <h1>React Router Example</h1>
   <Route path="/" component={App} />
   <Route path="/about" component={About} />
   <Route path="/contact" component={Contact} />
   </div>
   </Router>
)
``` 
- considering we have the above components App, About, Contact in our application.



----------------------------------------------------------------------------------------------------------

**QUE : How do you style React components?**
1. Inline Styling
```
class Simple extends React.Component{
   render(){
      return(
         <div>
         <h1 style={{color:"blue"}}>Hello Simple!</h1>
         </div>
      )
   }
}
```

2. JavaScript Object
```
class Simple extends React.Component{
   render(){
      const simpleStyle = {
         color:"white",
         backgroundColor:"green",
         margin:"8px",
         fontFamily:"Open Sans"
      };
      return(
         <div>
         <h1 style={simpleStyle}>Hello Simple!</h1>
         </div>
      )
   }
}
```

3. External stylesheet
```
App.js

import "./App.css"  ---> import css file for styling
class Simple extends React.Component{
   render(){
      return(
         <div>
         <h1>Hello Simple!</h1>
         </div>
      )
   }
}

App.css
body{
   background-color: black;
   color:white;
   padding:40px;
   text-align:center;
}
````



**QUE : Difference between virtual Dom and real dom?**
- DOM stands for “Document Object Model,” which represents your application UI and whenever the changes are made in the application, this DOM gets updated and the user is able to visualize the changes.
- DOM is an interface that allows scripts to update the content, style, and structure of the document.
- Virtual DOM is a node tree similar to Real DOM that lists elements, content, and attributes as objects and properties. 
- ```React render()``` method creates a node tree from the react components. Then it updates the node tree in response to the mutations in the data model caused by various actions done in the UI.

<br>

- Virtual DOM is faster and more effective than Real DOM as it just focuses on the updated components instead of updating the entire DOM.



**QUE : features of react?**
- React makes use of a single direction flow model
- It deals with complete server side data processing and handling .
- React uses Virtual DOM that has many advantages of its own.


**QUE : difference between Angular and React.**
```
factor             Angular               React
--------------------------------------------------------------
Created by         Google                Facebook
Dom                Real Dom              virtual dom
Render support     client side           server side
Architecture       full mvc support      Only the view aspect of MVC
Data binding       Unidirection          two way data binding
```

**QUE :  why use react instead of other frameworks like angular?**
- Easy creation of dynamic web apps
- reusable components
- enhanced performance
- easy debugging
- unidirectional data flow



**QUE : What is the meaning of the component-based architecture of react?**
- In react c


**QUE : how does rendering work in React?**
- rendering ia an important aspect of react as every single component must be rendered.this is done using the ```render()``` function.
- Once the funtction is called it return an element that represents a DOM component.
- It is also possible to render more than one html element at a time by enclosing the html tags and passing it through the render function.


**QUE : what is the difference between ES5 and ES6 standard?**
```
1. Components and function

//ES5
var MyComponent = React.createClass({
   render:function() {
      return(
         <h3>Hello Simplilearn</h3>
         );
      }
   });

//ES6
class MyComponent extends React.Component{
   render(){
      return(
         <h3>Hello Simplilearn</h3>
         );
      }
   }
```

```
2. exports vs export
//ES5
module.expoerts = Component;

//ES6
export default Component;
```

```
3. require vs import
//ES5
var React = require('react');

//ES6
import React from 'react';
```



**QUE : what is an event in react?**
- An event is an action that can be triggered by a User or any system event like pressing a key, a mouse click etc.


**QUE : How do you create an event in React?**
```
class Simple extends React.Component{
   work(){
      alert("Good work!");
   }
   render(){
      return(
         <button onClick = {this.work}>Do some work! </button>
      );
   }
}
```

<br>

**QUE : explain how Lists work in React?**
- List display data in an ordered format
- Traversal of lists is done using the ```map()``` function
```
function listOfNames(props){
   const names = props.names;
   const listitems = names.map((name) =>
     <li key={name} >
         {name}
     </li>
  );
return(
   <ul>{listitems}</ul>
);
}

const names = ['Kohli", 'Saif, Arun, 'Aamir', 'Arif'];
ReactDOM.render(
   <listOfNames names={names} />,
   document.getElementByld('app);
);
```

**QUE :  Why is there a nedd of using keys in lists?**
- Keys are very important in Lists due to the following reasons:
- A key is a unique identifier
- It is used to identify which items have changed, updated, or deleted from the Lists
- It also helps to determine which components need to be re-rendered instead of re-rendering the all the components every time
- It increases performance as only the changed components are re-rendered


**QUE : what are forms in React?**
- Using forms users can interact with the application and enter th required information whenever needed
- forms can contain certain elements such as text, field, button, checkbox, radio button etc.
- forms are used for many different tasks such as user authentication, searching , filtering etc.

```
class NameForm extends React.Component{
   this.state = {value: "};

handleChange(event){
   this.setState((value: event.target.value));
}

handleSubmit(event){
   alert('A name was entered:'+ this.state.value);
   event.preventDefault();
}
 
render(){
return(
   <form onSubmit=(this.handleSubmitbind(this)}>
   <label>
      Name:
      <input type="text" value={this.state.value}
      onChange=(this.handleChange.bind(this)}/>
   </label>
<input type="submit" value="Submit" />
</form>
);
}
}
```



QUE :

QUE :

QUE :
QUE :
QUE :
QUE :
QUE :

QUE :
QUE :
QUE :

QUE :
QUE :
QUE :






1. What is state hoisting
2. What are falsy values in js
3. Synchronous vs Asynchronous code
4. What is a purpose of a Function as a child 
5. Presentational component vs container component
6. Why do we need keys for React lists
7. How to recognize closures in js
8. Difference between using fetch() and axios
9. Purpose of fragments
10. How to create a custom hook
11. What is the exact difference between class component and functional component?(they’re are not expecting syntactic differences as answer)
How do you choose functional over class component ?
What exactly happens with Lazy loading and how code splitting works?
How is closures implemented in React
1. Virtual Dom
2. React Security 
3. OOP Principles and Design Patterns  
4. Idempotency
5. High Level Components and Functions.
6. what are the different phases of react components life cycle?
   

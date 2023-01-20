1) What is HTML?
-HTML -  Hyper Text Markup Language.
-It is a standard text formatting language which is used to create and display pages on the Web.
html5 is moddern version 
<!DOCTYPE html> -->  is a declaration that tells the browser what version of HTML the document is written in code

<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

   ....code here....

</body>
</html>



QUE : Signifiance of head and body tag ?

<head> -->  It contains information such as the page <title>, links to CSS ,links to custom favicons, and metadata .
<body> -->  represents the content of an HTML document. which displays on the browser.




QUE : what is metadata and meta tag?

metadata -->  (information) about data
<meta> tags always go inside the <head> element, and are typically used to specify 

character set,    
<meta charset="UTF-8">
utf-8 character encoding when translating machine code into human-readable text and vice versa to be displayed in the browser.

page description,   <meta name="description" content="Free Web tutorials for HTML and CSS">

keywords,  <meta name="keywords" content="HTML, CSS, JavaScript"> 

author of the document,   <meta name="author" content="Rutvik Makvana">

and viewport settings.    <meta name="viewport" content="width=device-width, initial-scale=1.0">




QUE : Anatomy of an HTML element?

   <p>My cat is very grumpy</p>
               ||
Opening tag       <p>                        |
    Content        My cat is very grumpy     | ==> Element
Closing tag       </p>                       |


Elememt   : HTML element is defined by a start tag ,some content, and an end tag.
TAG       : tags are like keywords which defines that how web browser will format and display the content
Attribute : Attributes provide additional information about elements.



QUE :  HTML Block and Inline Elements ?

Block :  A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.
ex - <p> and <div>.
<address><article><aside><canvas><dd><div><dl><dt><footer><form><h1>-<h6><header><hr><li><main><nav><ol><p><section><table><ul><video>


Inline : An inline element does not start on a new line. An inline element only takes up as much width as necessary.
ex - <a> <b><br><button><img><input><label><script><select><small><span><strong><sub><sup><textarea><time><tt><var>
      


QUE : style attributes ?
   <tagname style="property:value;">



QUE : HTML Formatting Elements ?

<b> - Bold text
<strong> - Important text
<i> - Italic text
<em> - Emphasized text
<mark> - Marked text                 
<small> - Smaller text
<del> - Deleted text
<ins> - Inserted text
<sub> - Subscript text
<sup> - Superscript text

Comment : <!-- Write your comments here -->

colors :  RGB  - rgb(red, green, blue)
          HEX - #rrggbb  (hexadecimal)
          HSL - hue saturation lightness


 Que : Lists in html?
1. Ordered list  
   ordered list starts with the <ol> tag. Each list item starts with the <li> tag.  
   <ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
  </ol>    
ans : 1.
      2.

2. Unordered list
   unordered list starts with the <ul> tag. Each list item starts with the <li> tag.
  <ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
  </ul>
  Ans : o
        o

3. description list
A description list is a list of terms, with a description of each term.
The <dl> tag defines the description list, the <dt> tag defines the term (name), and the <dd> tag describes each term:
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>

ans : Coffee
        - black hot drink
      Milk
         - white cold drink



QUE : difference between class and id ?

The only difference between them is that “id” is unique in a page and can only apply to at most one element, while “class” selector can apply to multiple elements. 



QUE : Links in html ?

HTML links are hyperlinks. - <a> tag to specify the links in a webpage.
the 'href' attribute is used to specify the link 
You can click on a link and jump to another document.

Syntax - <a href="url" target='_blank'>link text</a>

a:link {
  color: green;
}
a:hover {
  color: red;
  }
a:active {
  color: yellow;
}
a:visited {
  color: pink;
}



QUE : How many ways we can specify css ?

Inline - here we use the "style" attribute inside the html element.
Internal - here we use the <style> tag inside the <head> tag. 
External - here we use the <link> tag inside <head> tag to reference css file into our html code.





QUE : iframe 

The HTML <iframe> tag specifies an inline frame.
An inline frame is used to embed another document,video,interactive media within the current HTML document.

syntax : <iframe src="url" title="description"></iframe>





QUE : hTML5 vs HTML

HTML5 :
-support for video and audio
-Storage options : Application cache, SQL database, web storage
- Default vector graphics support canvas and SVG
- capable of handling inaccurate syntax and other errors
- use tracking with js GeoLocation API

HTML :
-No audio and video support
-tempory storage- cache memory
- Vector graphics support possible with outside tools
- not capable
- difficult


html
1. It didn’t support audio and video without the use of flash player support.
2. It uses cookies to store temporary data.
3. Does not allow JavaScript to run in browser.
4. Not possible to draw shapes like circle, rectangle, triangle etc.
5. It works with all old browsers.
6. Doctype declaration is too long and complicated

html5

1. It supports audio and video controls with the use of <audio> and <video> tags.
2. It uses SQL databases and application cache to store offline data.
3. Allows JavaScript to run in background. This is possible due to JS Web worker API in HTML5.
4. HTML5 allows to draw shapes like circle, rectangle, triangle etc.
5. It supported by all new browser like Firefox, Mozilla, Chrome, Safari, etc.
6. Doctype declaration is quite simple and easy.



QUE : inserting a Copyright symbol

&copy;
&#169; 



QUE : Advantages of using frames :

- Allows multiple documents to be viewed with a single web page
- easier navigation
- static navigation can be kept visible on the website at all times



QUE : Marquee

- The Marquee HTML tag is a non-standard HTML element which is used to scroll a image or text horizontally or vertically.
  <marquee>.....</marquee>




QUE : visibility:hidden vs Display: none

visibility:hidden - hides the element, but it still takes up space in the layout. 

display:none - removes the element from the document. It does not take up any space. 




QUE : cell spacing vs Cell Padding
- <table> tag attribute 

Cellpadding
- It specifies the space between the border of a table cell and its contents.
- default value is 1.
  

Cellspacing
- It specifies the space between adjacent cells.
- default cellspacing value is 2




QUE : convert inline element into block level element
- change the display:property of element to display:block

a{
   display:block;
}



QUE : what is web workers?
- javascript which runs in the background
- doesnt disturb pages performance 



QUE : what is SVG element ?
- Scalable Vector Graphics
- <svg> - container for svg graphics
- XML based and used to define graphics for the web
- resolution independent
  


QUE : what is white space in HTML? 
- an empty sequence of space characters is called white space





QUE : image map

- It is used to create a map of the image with clickable areas. 
- An Image Map refers to the clickable image having a clickable area that can be used to navigate to the various link to other web pages or the specific section of the same web page.
<map name="mapID">
        <area shape="rect" 
        coords="34, 44, 270, 350"
        href="https://www.geeksforgeeks.org/data-structures/?ref=shm">
</map>


 
 
 QUE : semantic html

 HTML tags are classified in two types. 
1. Semantic element
2. Non-Semantic element  
 
1. Semantic : Semantic elements have meaningful names which tells about type of content.
   <form> , <table> , and <article>

2. Non-Semantic
<div> and <span>
 
 
 
 
 
 QUE : nested web pages
 - a webpage that is inside another webpage of a completely different domain.
 - There are two methods to create a nested webpage
  Using <iframe> tag   // <iframe src="URL"></iframe>
  Using <embed> tag   // <embed src="URL" type="text/html" />




QUE :  add button
<button type="button" onclick="alert('You pressed the button!')">Click me!</button>


QUE : alt attribute
The alt attribute specifies an alternate text for an area, if the image cannot be displayed.



QUE : table 

<table style="width:100%">
        <tr>
            <th>Name:</th>
            <td>Vikas Rawat</td>
        </tr>
        <tr>
            <th rowspan="2">Telephone:</th>
            <td>9125577854</td>
        </tr>
        <tr>
            <td>8565557785</td>
        </tr>
    </table>




QUE : layout web page 
HTML has several semantic elements that define the different parts of a web page:
<header> - Defines a header for a document or a section
<nav> - Defines a set of navigation links
<section> - Defines a section in a document
<article> - Defines an independent, self-contained content
<aside> - Defines content aside from the content (like a sidebar)
<footer> - Defines a footer for a document or a section
<details> - Defines additional details that the user can open and close on demand
<summary> - Defines a heading for the <details> element

  ------------------------
  <header>                |
  ------------------------
  <nav>                   |
  ------------------------
  <section>|              |
   ------- |    <aside>   |
  <article>|              |
  -------------------------
  <footer>                |
  -------------------------




QUE : how to create a new html element

const para = document.createElement("p");
para.innerText = "This is a paragraph.";


    
   
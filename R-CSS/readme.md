**QUE : What is CSS?**
- CSS - Cascading Style Sheets.
- CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.
```
Syntax :   h1{                    // selector - declaration block
               color : blue;       // property:value
             }
```
- The declaration block contains one or more declarations separated by semicolons(,)
- Each declaration includes a CSS property name and a value, separated by a colon(:)
- Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.

<br>

```Comment : /* ................... */```

<br>

```
CSS Framworks :  
                  1. Bootstrap
                  2. Tailwind CSS
                  3. Foundation
                  4. Skeleton 
                  5. Bulma
```

<br>

**QUE : Selector ?**
- A CSS selector is the part of a CSS ruleset that actually selects the content you want to style. Different types of selectors are listed below.
```
1. Universal Selector: selecting all elements on a page 
* {
  color: "green";
  font-size: 20px;
  line-height: 25px;
  }

2. Element Type Selector : provided styles will get applied to all the ul elements on the page.
ul {
  line-style: none;
  border: solid 1px #ccc;
}

3. ID Selector : provided styles will get applied to all the elements having ID as a container on the page.
#container {
  width: 960px;
  margin: 0 auto;
}

<div id="container"></div>


4. Class Selector :  provided styles will get applied to all the elements having Class as the box on the page.
.box {
  padding: 10px;
  margin: 10px;
  width: 240px;
}

<div class="box"></div>

5. Grouping Selector : selects all the HTML elements with the same style definitions.
h1, h2, p {
  text-align: center;
  color: red;
}
```

<br>

**QUE : tell us all about use of ruleset ?**           
- The ruleset is used for the identification of selectors, which can be attached with other selectors.

<br>

**QUE : box model**
- CSS box model is a container that contains multiple properties including borders, margin, padding, and the content itself.
   - margin  (area around border)
   -  border  (area around padding)
   -  padding (area around content)
    -  content  (text or images)


<br>

**QUE : difference between CSS3 and CSS2**

https://www.geeksforgeeks.org/difference-between-css-and-css3/

<br>

**QUE : what was purpose of developing CSS ?**
- The purpose of CSS is to provide Web developers with a standard way to define, apply, and manage sets of style characteristics

<br>

**QUE : Advantages and disadvantages of CSS?**

Advantages :-
1. Enhances user experience - CSS allows user-friendly formatting to customize user experiences.
2. Consistency -  You can change the formatting easily and the update will be done to all pages using that style sheet.
3. Time-efficient - save lot of time
4. Improves speed - 
5. Easy maintenance
6. Device compatibility
7. SEO-friendly                                                                                            

Disadvantages :-
1. Security issues - Anyone with access can make changes to the CSS. 
2. Creates confusion - CSS, CSS2, and CSS3.
3. Cross-browser issues - 
4. Differences in display


<br>

**QUE : z-index**
 - Z Index is a CSS property that defines the order of overlapping HTML elements.
  - Elements with a higher index will be placed on top of elements with a lower index.
  - Note: Z index only works on positioned elements (position:absolute, position:relative, or position:fixed)
```
/* Default value if not specified */
z-index: auto;

/* Integer values */
z-index: 1;
z-index: 100;
z-index: 9999;
z-index: -1;

/* Global values */
z-index: inherit;
z-index: initial;
z-index: unset;
```

<br>

**QUE : difference between z-index and opacity?**

Opacity :
- opacity is a CSS property, which is used to provide transparency effect to an element.
- Opacity value will be given in between 0 and 1.

z-index : 
- The z-index property defines the order of the elements on the z-axis.
- Basically, it works on elements with a position value other than static.

**QUE : how can you use CSS to control image repetition ?**
- The background-repeat proprty is used to control the image
```
h3{
    background-repeat:none;
}
```
<br>

**QUE : property used for image scrolling?**
- The background-attachment property sets whether a background image scrolls with the rest of the page, or is fixed.
- background-attachment: scroll|fixed|local|initial|inherit;

<br>

**QUE : font related attributes :**
- font-style
- font-variant
- font-weight
- font-size/line-height
- font-family



<br>

**QUE : contextual selector**
style is applied to an element only if the element is in the specified context.
```div {color: red}```
```p {color: red;}```

<br>

**QUE : responsive web design**
- Responsive web design is about creating web pages that look good on all devices!
- A responsive web design will automatically adjust for different screen sizes and viewports.
```<meta name="viewport" content="width=device-width, initial-scale=1.0">```

<br>

**QUE : when should you use translate() instead of absolute positioning?**
- Moving elements with translate() is better than absolute positioning (top, left, right, bottom)
- If you plan to make an animation by using position: absolute and set top, left, right or bottom 
- please don't just use translate.

<br>

**QUE : different ways to position some aspects in css**
- static
- relative
- fixed
- absolute
- sticky

<br>

**QUE : how can you optimize the web page for prints**

https://blog.tbhcreative.com/website-print-friendly-styling/

<br>

**QUE : css float property**
- float: none|left|right|initial|inherit;

<br>

**QUE : pseudo elements**
- A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected elements.
- For example, ::first-line can be used to change the font of the first line of a paragraph.
```
selector::pseudo-element {
  property: value;
}

p::first-line {
  color: #0000ff;
  font-variant: small-caps;
}
```

<br>

**QUE : logical and physical tags**  
- Physical and Logical tags are used in HTML for better visibility and understanding of the text by the user on the web page.

**Logical Tags :** 
- Logical tags are used to tell the browser what kind of text is written inside the tags.
- Logical tags are also known as Structural tags because they specify the structure of the document.
- 
```<abbr>``` Defines the abbreviation of text.

```<address>``` Contact information of a person or an organization.

```<code>``` Defines the piece of computer code.

```<blockquote>``` Defines a long quotation.

```<del>``` Defines the deleted text and is used to mark a portion of text which has been deleted from the document.

```<ins>``` Defines inserted text.

```<pre>``` Defines the block of preformatted text which preserves the text spaces, line breaks, tabs, and other formatting characters which are ignored by web browsers.

```<q>``` Defines the short quotation.

```<strong>``` Defines strong text i.e. show the importance of the text.

<br>

**Physical tags:**
- Physical tags are used to indicate that how specific characters are to be formatted or indicated using HTML tags.
-  Any physical style tag may contain any item allowed in text, including conventional text, images, line breaks, etc.
 
```<sup>```  Superscript is usually used for showing elements above base-line 

```<sub>``` The subscript is used for alternate baseline.

```<i>``` An Italic tag is used to define a text with a special meaning.

```<big>``` Big tag increase the font size by 1.

```<small>``` A small tag defines the small text, and it is used while writing copyright.

```<b>``` Bold increases the importance of the text because bold tag convert the text into bold size.

```<u>``` It is used to underline the text.

```<tt>``` Teletype text gives the default font-family which is monospace.

```<strike>``` It is an editing markup that tells the reader to ignore the text passage.

<br>

**QUE : css3**
https://www.geeksforgeeks.org/difference-between-css-and-css3/#:~:text=CSS3%3A%20CSS3%20stands%20for%20Cascading,by%20all%20modern%20web%20browsers.

<br>

**QUE : css selector used for**
- In CSS, selectors are used to target the HTML elements on our web pages that we want to style.

<br>

**QUE : css image scripts**
- An image sprite is a collection of images put into a single image.
- A web page with many images can take a long time to load and generates multiple server requests.
- Using image sprites will reduce the number of server requests and save bandwidth.

<br>

**QUE : css specify**
- Specificity is an algorithm that calculates the weight that is applied to a given CSS declaration. 
- The weight is determined by the number of - selectors of each weight category in the selector matching the element (or pseudo-element).

<br>

**QUE : gradients in css**
- CSS gradients let you display smooth transitions between two or more specified colors.

- CSS defines three types of gradients:
1. Linear Gradients (goes down/up/left/right/diagonally)
2. Radial Gradients (defined by their center)
3. Conic Gradients (rotated around a center point)

```
Syntax :
background-image: linear-gradient(direction, color-stop1, color-stop2, ...);
```

<br>

**QUE : property of flexbox**
- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

<br>

**QUE : difference beween absolute and relative position**

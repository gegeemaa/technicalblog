---
title: Javascript-ees React-ruu
date: '2023-07-24'
---

### Rendering User Interfaces
To understand how React works, we first need a basic understanding of how browsers interpret your code to create interactive user interfaces (UI).
When a user visits a web page, the server returns an HTML file to the browser that may look like this:


<img src="/js2react/image1.jpg"/>


<br />
The browser then reads the HTML and constructs the Document Object Model (DOM).

DOM gedeg ni HTML-iin object ilerhiilel. 
Javscript hel bolon DOM method-iig ashiglaad DOM element-iig manipulate buyu oorchloh, songoj boldog.

Jishee ni HMTL deeree daraah code-iig bichihed DOM deeree `<h1>` gesen element nemegdsen haragdana.


``` 
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>

    <script type="text/javascript">
      // Select the div element with 'app' id
      const app = document.getElementById('app');

      // Create a new H1 element
      const header = document.createElement('h1');

      // Create a new text node for the H1 element
      const headerContent = document.createTextNode(
        'Develop. Preview. Ship. 🚀',
      );

      // Append the text to the H1 element
      header.appendChild(headerContent);

      // Place the H1 element inside the div
      app.appendChild(header);
    </script>
  </body>
</html>

```

<img src="/js2react/image2.jpg"/>


Gants h1 element nemehiin daraah urt code-iig bichij bna.

```
<script type="text/javascript">
  const app = document.getElementById('app');
  const header = document.createElement('h1');
  const headerContent = document.createTextNode('Develop. Preview. Ship. 🚀');
  header.appendChild(headerContent);
  app.appendChild(header);
</script>

```

### Imperative vs Declarative Programming

Imperative programing gedeg ni UI deer h1 hiihed yu yu heregtei yaaj hiihiigee zaaj ogdog. deerh shig.
Harin Declarative gedeg ni yaaj hiihiige zaahgui zugeer yu UI deer baihiigaa ehleed todorhoilchdog.
React bol declarative lib yum.
Developer chi React-d yu UI deer yu baihiigaa helchina React ooroo ter zuiliig yamar alhamaar yaaj hiihiigee ooroo hiigeed DOM uusgechdeg.

Door Imperative bolon Declarative 2-iin jishee bna.


<img src="/js2react/image3.jpg"/>

ReactDOM.render() method ni h1 element-iig turuunii bichsen JS-iig bichilgui uusgeh bolomj olgodog.

```
   <script type="text/javascript">
      const app = document.getElementById('app');
      ReactDOM.render(<h1>Develop. Preview. Ship. 🚀</h1>, app);
    </script>

```

### Getting Started with React

To use React in your project, you can load two React scripts from an external website called unpkg.com:
  * react is the core React library.
  * react-dom provides DOM-specific methods that enable you to use React with the DOM.

```
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>

    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

    <script type="text/javascript">
      const app = document.getElementById('app');
    </script>
  </body>
</html>

```

Instead of directly manipulating the DOM with plain JavaScript, you can use the `ReactDOM.render()` method from react-dom to tell React to render our `<h1>` title inside our `#app` element.

```
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>

    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

    <script type="text/javascript">
      const app = document.getElementById('app');
      ReactDOM.render(<h1>Develop. Preview. Ship. 🚀</h1>, app);
    </script>
  </body>
</html>

```

But if you try to run this code in the browser, you will get a syntax error:


<img src="/js2react/image4.jpg"/>

This is because `<h1>`...`</h1>` is not valid Javascript. This piece of code is JSX.

### What is JSX?

JSX ni  a syntax extension for JavaScript, javascript dotroo HTML element-uudiig bichih bolomj olgodog. Daraa ni Javascript compiler ni JSX-iig javascript code-ruu compile hiideg.

Since props is an object, you can use **object destructuring** to explicitly name the values of props inside your function parameters:

```
function Header({ title }) {
    console.log(title) // "React 💙"
}

```

React State ni component dotroo l hadgalagdana. Oor componentruu shiljuulj boloh ch ter shiljuulsen componentoos oorchloh bolomjgui.

NPM gedeg ni node package manager

Next.js provides a framework to structure your application, and optimizations that help make both the development process and final application faster.

Minii oilgoj baigaagaar ReactJS ni application-iig hogjuulehed butetsiin huvid joohon zambaraagui yum bna. NextJS ni application-iig tsegtstei baidlaar zohion baiguulah bolomj olgodog framework yum baina.

NextJS ni ooroo compiler-tai ba developeriin bichsen code-iig shahaad bundle bolgood Browser oilgoh bolomjtoi DOM bolgodog.


### What is Compiling?

Developer ooriin tuhtai programiin hel deer code-oo bichih ba uuniig compile hiisneer Browser oilgoh bolomjtoi helruu horvuuldeg.

### What is Minifying?

<img src="/js2react/image5.jpg"/>



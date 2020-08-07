export const assistData = [
    {
      id: 0,
      question: ` Inside which HTML element do we put the JavaScript?`,
      options: [`<Js>`, `<script>`, `<Javascript>`],
      answer: `<script>`
    },
    {
      id: 1,
      question: `What is the correct JavaScript syntax to change the content of the HTML element below?

      <p id="demo">This is a demonstration.</p>`,
      options: [`doucment.getElementByName("p").innerHTML = "Hello World!";`, `doucment.getElementById("demo").innerHTML = "Hello World!";`],
      answer: `doucment.getElementById("demo").innerHTML = "Hello World!";`
    },
    {
      id: 3,
      question: `Where is the correct place to insert a JavaScript?`,
      options: [`The <body> section`, `The <head> section`, `Both the <head> section and the <body> section are correct`],
      answer: `Both the <head> section and the <body> section are correct`
    },
    {
      id: 4,
      question: `What is the correct syntax for referring to an external script called "xxx.js"?`,
      options: [`<script src="xxx.js">`, `<script href="xxx.js">`, `<script name="xxx.js">`],
      answer: `<script src="xxx.js">`
    },
    {
        id: 5,
        question: `The external JavaScript file must contain the <script> tag.`,
        options: [`True`, `False`],
        answer: `True`
    },
    {
        id: 6,
        question: `How do you write "Hello World" in an alert box?`,
        options: [`alert("Hello World")`, `msgBox("Hello World")`, `alertBox("Hello World")`],
        answer: `alert("Hello World")`
      },
      {
        id: 7,
        question: `How do you create a function in JavaScript?`,
        options: [`function myFunction()`, `function:myFunction()`, `function = myFunction()`],
        answer: `function myFunction()`
      },
      {
        id: 8,
        question: `How to write an IF statement in JavaScript? `,
        options: [`if i = 5 then`, `if (i == 5)`, `if i == 5 then`],
        answer: `if (i == 5)`
      },
      {
        id: 9,
        question: `How does a WHILE loop start?        `,
        options: [`while (i <= 10; i++)`, `while i = 1 to 10`, `while (i <= 10)`],
        answer: `while (i <= 10; i++)`
      },
      {
        id: 10,
        question: `How can you add a comment in a JavaScript?`,
        options: [`'This is a comment `, `<!--This is a comment-->`, `//This is a comment`],
        answer: `//This is a comment`
      },
      {
        id: 11,
        question: `What is the correct way to write a JavaScript array?`,
        options: [`var colors = "red", "green", "blue"`, `var colors = ["red", "green", "blue"]`, `var colors = 1:"red", 2:"green", 3:"blue"`],
        answer: `var colors = ["red", "green", "blue"]`
      },
      {
        id: 12,
        question: `How do you round the number 7.25, to the nearest integer?        `,
        options: [`Math.rnd(7.25)`, `Math.round(7.25)`, `rnd(7.25)`, `round(7.25)`],
        answer: `Math.round(7.25)`
      },
      {
        id: 13,
        question: ` JavaScript is the same as Java.        `,
        options: [`True`, `False`],
        answer: `False`
      },

  ];
  
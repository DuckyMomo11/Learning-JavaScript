# Learning JavaScript
### What is JavaScript?
`JavaScript` is one of the core technologies of the web, alongside HTML and CSS
- It is a high level, interpreted programming language that can be used on the client side with `Node.js`

> Interpreted means that the code is executed line by line, without needing to be converted into a machine language, making it a "scripting" language.

### What is JavaScript Used For?
- `Document Object Model` (DOM) Manipulation - Provides methods for changing the elements or style in a HTML file
- Event Handling
- Asynchronous Requests - Used to interact with servers
- Animations and Effects
- Data Manipulation - eg. Sorting, Filtering, etc.
- Storing Data - eg. Cookies, LocalStorage, etc.
- Single Page Applications (SPA) - Load a single HTML page and dynamically loads the content without needing to reload the page
- Creating APIs and Web Services (Node.js, Deno)

### Why Learn JavaScript?
##### Popularity
- One of the most widely used languages
- Many job opportunities
##### Versatility
- Used for many different things, including dynamic web pages, APIs, mobile and even desktop applications
##### Relatively Easy to Learn
- Compared to other lower level languages, JavaScript is pretty easy to learn and a great language to start with
##### Community
- Great community, support, resources and tools

### Console
###### Log Value
`console.log(value);` Prints value into the console
- Value can be of any data-type
- Variables may also be passed as value

###### Console Error and Warning
`console.error('message');`
- Displays a red circle with an `x`
- Displays error message

`console.warn('message');`
- Displays a yellow triangle with a `!`
- Displays warning message

###### Log Object as Table
`console.table({index:value, index:value ...});`
- Creates a table, with each index having an independent value

###### Group Console Commands
`console.group(name);` Creates a group
`console.groupEnd();` Closes the group
- Any console commands between these two commands will be part of the group

###### Adding CSS to Logs
`console.log(`%ctext`, style);`
- `%c` Changes how a console log is displayed
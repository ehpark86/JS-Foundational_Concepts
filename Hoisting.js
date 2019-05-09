/*  
Since the JS compiler has 2 phases: 
1)creation phase - where the compiler allocates memory to variables and functions.
2)execution phase - where the compiler executes the code
variables are partially hoisted (we hoist the variable itself, but not the value) and functions are hoisted.
Refer to example 1
*/

//Example 1

console.log("----------");
// var a = undefined at this point of the execution phase. 
// most other languages would throw some sort of reference error.
console.log(a); // undefined

console.log(b()); //TypeError: b is not a function
// foo() gets called from memory and we use the term hoisting.
console.log(foo()); // 'foo was called'

var a = 'some variable';

// function declaration
function foo() {
  console.log('foo was called');
}

//function expression
var b = function() {
  console.log('b was called');
}


// Note: only the keywords 'var' and 'function' gets hoisted. ES6's 'let', 'const' and function expressions do not get hoisted.
// Remember functions create their own lexical environment, thus a new execution context.
// Refer to example 2

//Example 2
var name = "eugene";

var printName = function() {
  // What gets printed?
  console.log("My name is " + name);

  var name = "john";
 // What gets printed?
  console.log("My new name is " + name);
}

printName();


// The first console.log prints --> My name is undefined
// The second console.log prints --> My name is john

// But why?
// The reason is because since printName is a function, it creates its own lexical envrionment, leading to its own execution context.
// Thus, when the compiler runs through the code it recognizes printName in its own little world.
// The first console.log asks do I know the variable 'name'?
// And if the answer is yes, where is it?
// Remember how variables are hoisted? printName() creates space in memory but doesn't know what 'name' is yet.
// If there was no variable called 'name', then it would look out of its own lexcial environment and go the next environment up, which is the global environment.
// So if we were to comment out 'var name = "john"', then the name variable would be set to "eugene" for both console.logs.


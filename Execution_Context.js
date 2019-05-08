/*
EXECUTION CONTEXT

When the JS engine goes through our code, it creates something called a "Call Stack". 
And in the call stack we have something called the EXECUTION CONTEXT or to put it more accurately, a collection of EXECUTION CONTEXTS.

Anytime we run code, it's part of an EXECUTION CONTEXT.
Basically put, an execution context is the environment a function executes in.

Initially, the JS engine creates the "global" execution context. 
We don't see this, but it is going on under the hood.

The global execution context creates 2 things:
1) the global object and 
2) the "this" keyword.

And from this perspective, the global object is the most base object there is.
In other words, every code we run in  JS is part of the global object.
If we were to create a function or a variable, it becomes part of the global object.

Refer to example 1.

If we were to run JS in the browser, the global execution context would be the "window" object.
So if we type <this === window or this === this.window> in the browser console, it should return true because they are of referencing the same thing.

In NODE JS, the global object is "global."

The Call Stack flow of FIFO (First In Last Out).
Refer to example 2.

*/ 

//Example 1
//We are able to access this by typing window.a in the console.
var a = "Something";


//Example 2
// The JS engine goes through the code and allocates necessary memory space for Primitive types and Objects.
  // Note: The JS engine does not call the three() function on the first scan.
// The next run through the code is when the engine starts applying what's stored in memory.
// Remember, each function creates it's own execution context.
// Technically, the first function is the gobal() object, but we will refer to three() as being the first on the stack.
// The engine will call three() only to see that it is calling two().
// Then two() is put on the call stack, and when the engine sees that it's calling one(), it puts one() on the call stack.
// When one() is called, it returns "I'm function ONE!!!". After one() is finished with its job, it gets popped off the stack.
// Since one() has finished its job, two() gets popped off the stack.
// And the LAST function to get popped of the stack was the FIRST function that got put on the stack, which is three().
// Note: It is only when the function is finished doing its job that it gets popped off the stack.
  // So even though three returns two(), it is not finished since three() is depending on two() to finish its job.
function one() {
  return "I'm function ONE!!!";
}

function two() {
  return one();
}

function three() {
  return two();
}

three();

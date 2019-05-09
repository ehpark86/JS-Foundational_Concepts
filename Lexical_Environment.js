/*
Lexical Scope is created when a function is defined and NOT when a function is called (dynamic scope).
The lexcial scrope refers to all the data and variables inside of where a function was defined.
The very first environment is the global lexical environment.
*/


// foo would be part of the global lexical environment while a is part of foo()'s lexical environment.
function foo() {
  var a = "I'm part of the foo() environment";
  return a;
}


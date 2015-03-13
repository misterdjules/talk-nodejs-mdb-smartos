// First, run the script with:
// node 1-throw.js
// and show that the process exits with an error, but
// no core file is created -> impossible to determine where
// the code threw an error.
//
// Then, run the same code with:
// node --abort-on-uncaught-exception 1-throw.js
// and show that a core file was created. It is now possible
// to use mdb to load this core file and display the call stack that lead
// to the error being thrown.
function func2(arg2) {
  throw new Error("Boom in func2");
}

function func1(arg1, arg2) {
  func2(arg2);
}

function main(arg1, arg2) {
  func1(arg1, arg2);
}

main({foo: 'bar'}, 42);

function func2(arg2) {
  for (;;); 
}

function func1(arg1, arg2) {
  func2(arg2);
}

function main(arg1, arg2) {
  func1(arg1, arg2);
}

main({foo: 'bar'}, 42);

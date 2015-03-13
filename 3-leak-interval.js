function Leaker() {
  this.arrays = [];
}

Leaker.prototype.add = function add(foo) {
  this.arrays.push(foo);
}

var leaker = new Leaker;
setInterval(function foo() {
  leaker.add(new Array(1000 * 10));
}, 10);

var x = 0;
function foo() {
  x++;
  console.log(x);
}
var timerId = setInterval(foo, 1000);
setTimeout(function () {
  clearInterval(timerId);
}, 5000);

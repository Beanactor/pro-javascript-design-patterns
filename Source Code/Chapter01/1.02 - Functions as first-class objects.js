/* An anonymous function, executed immediately. */
/* 1.匿名函数用括号包起来2.后再跟一个括号；  实现匿名函数自执行 */
(function() {
  var foo = 10;
  var bar = 2;
  alert(foo * bar);
})();


/* An anonymous function with arguments. */
/* 1.动态传值 2.减少中间量 */
(function(foo, bar) {
  alert(foo * bar);
})(10, 2);


/* An anonymous function that returns a value. */
/* 返回一个值，并赋值给一个变量 */
var baz = (function(foo, bar) {
  return foo * bar;
})(10, 2);

// baz will equal 20.


/* An anonymous function used as a closure. */

var baz;
/* ??? */
(function() {
  var foo = 10;
  var bar = 2;
  baz = function() { 
    return foo * bar; 
  };
})();

baz(); // baz can access foo and bar, even though is it executed outside of the
       // anonymous function.

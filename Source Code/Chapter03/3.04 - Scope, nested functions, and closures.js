function foo() {
  var a = 10;
 
  function bar() {
    a *= 2;
  }
   
  bar(); 
  return a;
}



/* 返回一个内嵌函数，创建闭包 */
function foo() {
  var a = 10;
 
  function bar() {
    a *= 2;
    return a;
  }
   
  return bar;      
}
/* js作作用域是词法作用域
 * 函数是运行在定义他们的作用域中（本例中是foo内部的作用域），而不是运行在调用他们的作用域中
 * 只要bar被定义在foo中，他就能访问在foo中定义的所有变量，即使foo执行已经结束
 * 这就是一个闭包，在foo返回后，他的作用域被保存下来，但只有他返回的那个函数才能访问这个作用域。*/
var baz = foo(); // baz is now a reference to function bar.
baz(); // returns 20.
baz(); // returns 40.
baz(); // returns 80.

var blat = foo(); // blat is another reference to bar.
blat(); // returns 20, because a new copy of a is being used. 

/* Start and stop animations using functions. */
/* 用两个函数分别解决动画开始和停止的行为 */
function startAnimation() {
  ...
}

function stopAnimation() {
  ...
}



/* Anim class. */
/* 用构造器创建类，该类声明两个控制开始和停止的方法 */
var Anim = function() {
  ...
};
Anim.prototype.start = function() {
  ...
};
Anim.prototype.stop = function() {
  ...
};

/* Usage. */

var myAnim = new Anim();
myAnim.start();
...
myAnim.stop();



/* Anim class, with a slightly different syntax for declaring methods. */
/* 用构造器创建类，该类声明两个控制开始和停止的方法，只是声明的方式不一样，即把类的定义封装在一条声明中 */
var Anim = function() { 
  ...
};
Anim.prototype = {
  start: function() {
    ...
  },
  stop: function() {
    ...
  }
};



/* Add a method to the Function class that can be used to declare methods. */
/* 函数原型上添加一个方法，该方法可以为函数类型的数据（构造函数Anim）动态声明方法
   因为Anim类继承自Function*/
Function.prototype.method = function(name, fn) {
  this.prototype[name] = fn;
};

/* Anim class, with methods created using a convenience method. */

var Anim = function() { 
  ...
};
Anim.method('start', function() {
  ...
});
Anim.method('stop', function() {
  ...
});



/* This version allows the calls to be chained. */
/* 通过返回this的方法，实现链式编程 */
Function.prototype.method = function(name, fn) {
    this.prototype[name] = fn;
    return this;
};

/* Anim class, with methods created using a convenience method and chaining. */

var Anim = function() { 
  ...
};
Anim.
  method('start', function() {
    ...
  }).
  method('stop', function() {
    ...
  });

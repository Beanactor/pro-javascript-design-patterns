/* Singleton as an Object Literal. */
/* 对象字面量单体 */
MyNamespace.Singleton = {};

/* Singleton with Private Members, step 1. */
/* 匿名函数创建闭包 */
/* 用定义之后立即执行函数创建单体，匿名函数返回哟个对象，赋值给MyNamespace.Singleton */
MyNamespace.Singleton = (function() {
  return {};
})();

/* Singleton with Private Members, step 2. */

MyNamespace.Singleton = (function() {
  return { // Public members.
    publicAttribute1: true,
    publicAttribute2: 10,
    
    publicMethod1: function() {
      ...
    },
    publicMethod2: function(args) {
      ...
    }
  };
})();

/* Singleton with Private Members, step 3. */

MyNamespace.Singleton = (function() {
  // Private members.
  var privateAttribute1 = false;
  var privateAttribute2 = [1, 2, 3];
  
  function privateMethod1() {
    ...
  }
  function privateMethod2(args) {
    ...
  }

  return { // Public members.
    publicAttribute1: true,
    publicAttribute2: 10,
    
    publicMethod1: function() {
      ...
    },
    publicMethod2: function(args) {
      ...
    }
  };
})();

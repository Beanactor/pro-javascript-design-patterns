/* displayError即是函数也是对象，因此 可以绑定属性 */
function displayError(message) {
  displayError.numTimesExecuted++;
  alert(message);
};
displayError.numTimesExecuted = 0;


/* Class Person. */
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype = {
  getName: function() {
    return this.name;
  },
  getAge: function() {
    return this.age;
  }
}

/* Instantiate（实例化） the class. */

var alice = new Person('Alice', 93);
var bill = new Person('Bill', 30);

/* Modify（修改） the class. */

Person.prototype.getGreeting = function() {
  return 'Hi ' + this.getName() + '!';
};

/* Modify a specific instance. */
/* 添加方法 */
alice.displayGreeting = function() {
  alert(this.getGreeting());
}

/* Class Author. */

function Author(name, books) {
  Person.call(this, name); // Call the superclass' constructor in the scope of this.
  this.books = books; // Add an attribute to Author.
}
/* 让一个类继承另一个类，只需将子类的prototype设置为指向超类的一个实例即可 */
Author.prototype = new Person(); // Set up the prototype chain.
Author.prototype.constructor = Author; // Set the constructor attribute to Author.
Author.prototype.getBooks = function() { // Add a method to Author.
  return this.books;
};

var author = [];
author[0] = new Author('Dustin Diaz', ['JavaScript Design Patterns']);
author[1] = new Author('Ross Harmes', ['JavaScript Design Patterns']);

author[1].getName();
author[1].getBooks();

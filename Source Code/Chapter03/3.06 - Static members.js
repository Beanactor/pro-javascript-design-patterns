
var Book = (function() {
  
  // Private static attributes.
  var numOfBooks = 0;

  // Private static method.  
//checkIsbn 被设计为静态方法, 在内存中只会存放一份 ，每个实例不会生成一个新副本，避免浪费内存
  function checkIsbn(isbn) {
    ... 
  }    

  // Return the constructor.
  return function(newIsbn, newTitle, newAuthor) { // implements Publication

    // Private attributes.
    var isbn, title, author;

    // Privileged methods.
    this.getIsbn = function() {
      return isbn;
    };
    this.setIsbn = function(newIsbn) {
      if(!checkIsbn(newIsbn)) throw new Error('Book: Invalid ISBN.');
      isbn = newIsbn;
    };

    this.getTitle = function() {
      return title;
    };
    this.setTitle = function(newTitle) {
      title = newTitle || 'No title specified';
    };

    this.getAuthor = function() {
      return author;
    };
    this.setAuthor = function(newAuthor) {
      author = newAuthor || 'No author specified';
    };

    // Constructor code.
    numOfBooks++; // Keep track of how many Books have been instantiated
                  // with the private static attribute.
    if(numOfBooks > 50) throw new Error('Book: Only 50 instances of Book can be '
        + 'created.');

    this.setIsbn(newIsbn);
    this.setTitle(newTitle);
    this.setAuthor(newAuthor);
  }
})();

// Public static method.
Book.convertToTitleCase = function(inputString) {
  ...
};

// Public, non-privileged methods.
Book.prototype = {
  display: function() {
    ...
  }
};

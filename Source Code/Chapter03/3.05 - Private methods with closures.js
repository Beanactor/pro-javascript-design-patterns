var Book = function(newIsbn, newTitle, newAuthor) { // implements Publication

  // Private attributes.  只有特权方法可以访问的变量
  var isbn, title, author;

  // Private method.  只有特权方法可以访问的函数
//（私有方法）  该私有方法，每次实例化都会被创建。浪费内存；可转化为静态方法
// 判断是否设计为静态方法：它是否需要访问实例数据，不需要，设计为静态方法更有效率（内存来说），因为只被创建一份
  function checkIsbn(isbn) {
    ... 
  }  

  // Privileged methods.  （特权方法）
  /* 可以访问私有方法和私有属性的函数 */
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
  this.setIsbn(newIsbn);
  this.setTitle(newTitle);
  this.setAuthor(newAuthor);
};

// Public, non-privileged methods.
Book.prototype = {
  display: function() {
    ...
  }
};

/* 用一个函数来做构造器，所有的属性和方法都是公开的  可访问的 */
var Book = function(isbn, title, author) {
	if(isbn == undefined) throw new Error('Book constructor requires an isbn.');
	this.isbn = isbn;
	this.title = title || 'No title specified'; //  逻辑‘或’  || 提供后备值，短路运算
	this.author = author || 'No author specified';
}

Book.prototype.display = function() {
	...
};

/* With ISBN check. */

var Book = function(isbn, title, author) {
	if(!this.checkIsbn(isbn)) throw new Error('Book: Invalid ISBN.');
	this.isbn = isbn;
	this.title = title || 'No title specified';
	this.author = author || 'No author specified';
}

/* Book类有两个方法，所以 Book.prototype 被设为对象字面量*/
Book.prototype = {
	checkIsbn: function(isbn) {
		if(isbn == undefined || typeof isbn != 'string') {
			return false;
		}

		isbn = isbn.replace(/-/.
			''); // Remove dashes.
		if(isbn.length != 10 && isbn.length != 13) {
			return false;
		}

		var sum = 0;
		if(isbn.length === 10) { // 10 digit ISBN.
			If(!isbn.match(\ ^ \d {
				9
			}\)) { // Ensure characters 1 through 9 are digits.
				return false;
			}

			for(var i = 0; i < 9; i++) {
				sum += isbn.charAt(i) * (10 - i);
			}
			var checksum = sum % 11;
			if(checksum === 10) checksum = 'X';
			if(isbn.charAt(9) != checksum) {
				return false;
			}
		} else { // 13 digit ISBN.
			if(!isbn.match(\ ^ \d {
					12
				}\)) { // Ensure characters 1 through 12 are digits.
				return false;
			}

			for(var i = 0; i < 12; i++) {
				sum += isbn.charAt(i) * ((i % 2 === 0) ? 1 : 3);
			}
			var checksum = sum % 10;
			if(isbn.charAt(12) != checksum) {
				return false;
			}
		}

		return true; // All tests passed.
	},

	display: function() {
		...
	}
};

/* Publication interface. */

var Publication = new Interface('Publication', ['getIsbn', 'setIsbn', 'getTitle',
	'setTitle', 'getAuthor', 'setAuthor', 'display'
]);

/* With mutators and accessors. */
/* 加入取值器和赋值器,以及一些有效性校验 ,必须通过取值器和赋值器对数据进行操作*/
var Book = function(isbn, title, author) { // implements Publication
	this.setIsbn(isbn);
	this.setTitle(title);
	this.setAuthor(author);
}

Book.prototype = {
	checkIsbn: function(isbn) {
		...
	},
	getIsbn: function() {
		return this.isbn;
	},
	setIsbn: function(isbn) {
		if(!this.checkIsbn(isbn)) throw new Error('Book: Invalid ISBN.');
		this.isbn = isbn;
	},

	getTitle: function() {
		return this.title;
	},
	setTitle: function(title) {
		this.title = title || 'No title specified';
	},

	getAuthor: function() {
		return this.author;
	},
	setAuthor: function(author) {
		this.author = author || 'No author specified';
	},

	display: function() {
		...
	}
};
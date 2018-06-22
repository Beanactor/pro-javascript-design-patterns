/* Clone function. */
/* 1.创建一个新的空函数F
 	2。把F的 prototype 属性设置为作为参数object传入的原型对象
 	3.通过把new操作符作用于F创建出一个新对象,然后返回该对象.
 	函数返回的这个克隆结果是一个以给定对象为原型对象的空对象。
 	*/
 	
 	/* prototype 解读
 	 prototype属性用来指向原型对象，通过原型链机制，他提供了到所有集成而来的成员的链接
 	 */
function clone(object) {
    function F() {}
    F.prototype = object;
    return new F; //  相当于 return new F(); 
      
}

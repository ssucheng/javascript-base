function MathHanle(x,y){
    this.x = x;
    this.y = y
}
// 通过原型链添加方法
MathHanle.prototype.add = function(){
    return this.x + this.y
}
var math = new MathHanle(1,3)
console.log(math.add())

console.log(typeof MathHanle) //function
// 构造数数的显示原型中的构造器等于本省
console.log(MathHanle.prototype.constructor === MathHanle) // true
// 实例化对象的隐式原型 等于显示原型
console.log(math.__proto__ === MathHanle.prototype)


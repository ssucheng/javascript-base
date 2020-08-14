// function MathHanle(x,y){
//     this.x = x;
//     this.y = y
// }
// // 通过原型链添加方法
// MathHanle.prototype.add = function(){
//     return this.x + this.y
// }

// var math = new MathHanle(1,3)
// console.log(math.add())

// console.log(typeof MathHanle) //function
// // 构造数数的显示原型中的构造器等于本省
// console.log(MathHanle.prototype.constructor === MathHanle) // true
// // 实例化对象的隐式原型 等于显示原型
// console.log(math.__proto__ === MathHanle.prototype)

// // 继承 --JS
// // 动物
// function Aniamll(){
//     this.eat = function(){
//         console.log('animall eat')
//     }
// }
// //狗
// function Dog(){
//     this.bark = function(){
//         console.log('dog bark')
//     }
// }
// // 原型链继承 动物方法
// Dog.prototype = new Aniamll()
// const d = new Dog()
// d.eat() 
// // class 概念继承
// class Father{
//     constructor(name){
//         this.name = name
//     }
//     eat(){
//         console.log(this.name + '在吃东西')
//     }
// }
// class Son extends Father {
//     constructor(name){
//         super(name);
//         this.name = name
//     }
//     study(){
//         console.log(this.name + '在学习')
//     }
// }
// var s = new Son('son')
// s.eat()
// s.study()

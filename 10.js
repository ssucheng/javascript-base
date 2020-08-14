// // 继承父类的方法
// class Father{
//     constructor(x,y){
//         this.x = x;
//         this.y = y
//     }
//     sum(){
//         console.log(this.x + this.y)
//     }
// }
// class Son extends Father{
//     constructor(x,y){
//         // super位置放在 this之前
//         super(x,y);
//         this.x = x;
//         this.y = y;

//     }
//     subtract(){
//         console.log(this.x - this.y)
//     }
// }
// var son = new Son(1,3)
// son.subtract()
// son.sum()
// es6 常用功能
// 1 函数的默认传值
// function f1 (x, y = 1){
//     console.log(x,y)
// }
// f1()
// 2 解构的方式默认值 
// function f2 ({x = 1, y = 3 } = {}){
//     console.log(x,y)
// }
// f2({})
// 箭头函数
// var arr = [1,3,5,5]
// arr.map(function(item){
//     console.log(item)
// })


// console.log(arr.map((item) => item + 1))
// console.log(arr)

// 3 this 指向问题
// function fn(){
//     console.log('real',this)
//     var arr = [1]
//     arr.map(function(item){
//         //普通函数指向全局对象 window 改变了指向也是不行
//         console.log('普通函数',this)
//     })
//     arr.map(()=> {
//         // this指向被改变了
//         console.log('箭头函数',this)
//     })
// }
// fn.call({a:100}) //改变this指向
// 4 块级作用域
// var obj = {name:1,age:2,sum:3}
// var key
// var arr = []
// for(key in obj){
//     arr.push(key)
// }
// console.log("67",key,arr)
// for(let key1 in obj){
//     console.log(key1)
// }
// console.log('71',key1) //会计作用域会报错了
// 5 原型链添加
// var obj = {
//     css:function(){
//         console.log('css')
//     },
//     htm:function(){
//         console.log('htm')
//     }
// }
// function Z (){
//     console.log(111)
// }
// Z.prototype = obj
// var  z = new Z();

// z.htm()
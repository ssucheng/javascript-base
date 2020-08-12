// var {x = 3} ={};
// console.log(x)

// var{x:y=5} = {x:6}
// console.log(y)
// const [a,b,c,d,e] = 'hello';
// console.log(a,b,c,d,e);
// let {length} = 'hello';
// console.log(length)
//类似数组对象length属性
// let {length} = [1,2,3]
// console.log(length)
// let {length} = {name:'sucheeng',age:14}
// console.log(length)//undefinde
// 5.函数的参数也是可以使用解构赋值的
// function add([x,y]){
//     return x+y
// }
// const a = add([1,3])
// console.log(a)

// const b = [[1,3],[23,4]].map(([a,b])=> a+b)
// console.log(b)
// function move({x=0,y=0} = {}){ //空对象相当于形参
//     console.log([x,y]) 
// }
// move({x:1,y:3})
// move({x:3})
// move({})
// move()
// 输出结果
// [ 1, 3 ]
// [ 3, 0 ]
// [ 0, 0 ]
// [ 0, 0 ]
// 写法二就是不一样的结果
// function move2({x,y} = {x : 0,y :0}){ //{x:0,y:0}是形参
//     console.log([x,y]) 
// }
// move2({x:1,y:3})
// move2({x:3})
// move2({})
// move2()
// 输出结果
// [ 1, 3 ]
// [ 3, undefined ]
// [ undefined, undefined ]
// [ 0, 0 ]
// 6.undefined会触发函数参数的默认值
// const arr = [1,undefined,3].map((x = '触发undefined') => x)
// console.log(arr)
// 7.交换变量的值
// let x =1;
// let y =3;
// [x,y] = [y,x]
// console.log(x,y)
// 8.函数参数的默认值
// function f({name = 'sucheng',age = 13} = {}){
//     console.log(name,age)
// }
// f({name:'yangruhu',age:19})
// 9遍历map解构

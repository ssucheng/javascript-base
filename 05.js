// // 字符串的遍历器接口
// for(let a of  'foo'){
//     console.log(a)
// }
// console.log('\u4e2d')
// // 识别Unicode 转换成字符
// console.log(String.fromCharCode(0x20BB7))
// 函数参数有了默认值就会形成一个封闭作用yu
// var x = 1
// function aa(x,y = x){
//     console.log(y)
// }
// aa(2)
// var x = 1 ;
// function aa(x){
//     let y = x
//     console.log(y)
// }
// aa(3)
// 箭头函数可以与变量解构结合使用
// const full  = ({firt,last}) => firt + ''+ last;
// const aa = full({firt:'sucheng',last:'jiajia'})
// console.log(aa)
// 使用reset
// const a = (...aa) =>  {console.log(...aa)};
// a(1,3,3,{name:'sucheng'})
// 复杂数据类型的复制 拓展运算符的使用
// const  a1 = [1,2,3]
// const a2 = [...a1]
// console.log(a2)
// a2[0] = 4
// console.log(a2,a1)
// const a1 = [1,3]
// const a2 = [...a1]
// console.log(a2)
// console.log(a2)
// console.log(a1)
// var obj = {name:1,age:3}
// var obj1 = {...obj}
// console.log(obj1)
// 实现转换成对象
// var url = "http:www.xxx.net/x/x.html?id=898602B8261890349226&aa=123&bb=456";
// var params = url.split('?')[1].split('&');
// var obj = {};
// params.map( v => obj[v.split('=')[0]] = v.split('=')[1]);
// console.log(obj)
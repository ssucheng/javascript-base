// var obj = {
//     name:1,
//     name1:{
//         age:13
//     }
// };
// 简书深拷贝链接：https://www.jianshu.com/p/1b212581a8d5
// 加强版本：https://juejin.im/post/6844903929705136141

// Object.assign()有二级属性是引用数据类型无法深拷贝

// var obj1 = {} ;
// Object.assign(obj1,obj)
// obj1.name1.age = 14
// console.log(obj1)
// console.log(obj)

// 实现深拷贝的方法一：

// var obj2 =  JSON.parse(JSON.stringify(obj))
// obj2.name1.age = 15
// console.log(obj)
// console.log(obj2)

// 实现深拷贝的方法二 ：
// let $ = require('jquery');
// let obj1 = {
//    a: 1,
//    b: {
//      f: {
//        g: 1
//      }
//    },
//    c: [1, 2, 3]
// };
// let obj2 = $.extend(true, {}, obj1);//报错了

// 使用loadsh
// let _ = require('lodash');
// let obj1 = {
//     a: 1,
//     b: { f: { g: 1 } },
//     c: [1, 2, 3]
// };
// let obj2 = _.cloneDeep(obj1);
// console.log(obj1)
// console.log(obj2)
// 方法三：使用递归函数
function deepClone(source){
    let target
    // 1.先判断下是否为引用数据类型，因为数组也是对象
    if(typeof source === 'object'){
        target = Array.isArray(source)?[]:{}
        // 2.循环对象或者数组
        for(let key in source){
            // 3.空对象不可以进入下面判断
            if(source.hasOwnProperty(key)){
                // 4.判断下值是否为复杂数据类型，是的话递归
            if(typeof source[key] !== 'object'){
                target[key] = source[key]
            }else{
                target[key] = deepClone(source[key])
            }
            }
        }
    }else{
        target = source
    }
    return target
}
// 测试用例
const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};
// 测试用例
var obj = {name:1,name3:{
    name3:1,
    name4:{
        a:1
    }
}}
// 测试用例
const target1 = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};
target1.targe1t = target1;

var obj1 = deepClone(target) //直接报错了
console.log(obj1)
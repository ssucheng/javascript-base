var obj = {
    name:1,
    name1:{
        age:13
    }
};
var obj1 = {} ;
Object.assign(obj1,obj)
obj1.name1.age = 14
console.log(obj1)
console.log(obj)
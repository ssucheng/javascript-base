let object= {}
let arr = []; //注意这要加上；
// 嵌套赋值
({foo:object.name,bar:arr[0]} = {foo:'sucheng',bar:true})
console.log(object,arr)
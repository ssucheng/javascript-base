// 创建类
class Star{
    // 构造函数
    constructor(username){
        this.name = username
    }
    sigo(sing){
        console.log(this.name + sing)
    }
}
// 实例化对象
var ldh = new Star('刘德华')
var zxy = new Star('张学友')
console.log(zxy.name)
console.log(ldh.name)
ldh.sigo('冰雨')
zxy.sigo('lala')
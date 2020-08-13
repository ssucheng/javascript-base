// // 父类
// class Father{
//     constructor(x,y){
//         this.x = x ;
//         this.y = y;
//     }
//     money(){
//         console.log('money')
//     }
// }
// // 子类继承父类
// class Son extends Father{

// }
// var son = new Son()
// son.money()

// 父类
class Father{
    constructor(x,y){ //构造函数
        this.x = x;
        this.y = y;
    }
    add(){
        console.log(this.x + this.y)
    }
}
// 子类继承父类
class Son extends Father{
    constructor(x,y){
        // 关键字super可以调用父类的构造函数
        super(x,y);
    }
}
var son = new Son(1,3);
son.add();

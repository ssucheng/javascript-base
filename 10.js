// 继承父类的方法
class Father{
    constructor(x,y){
        this.x = x;
        this.y = y
    }
    sum(){
        console.log(this.x + this.y)
    }
}
class Son extends Father{
    constructor(x,y){
        // super位置放在 this之前
        super(x,y);
        this.x = x;
        this.y = y;

    }
    subtract(){
        console.log(this.x - this.y)
    }
}
var son = new Son(1,3)
son.subtract()
son.sum()
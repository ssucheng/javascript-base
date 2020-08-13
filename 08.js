class Father{
    say(){
        console.log('我是爸爸')

    }
}
class Son extends Father{
    say(){
        console.log('我是儿子')
        // super关键字调用父类的普通方法
        super.say()
    }
}
// 继承中的属性或者方法查找原则：就近原则
// 1.继承中，如果实例化子类输出一个方法，先看子类有没有这个方法，没有才会找父类
var son = new Son()
son.say()
# ES6_learningPath

## 0.参考文档:[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript) + [ECMAScript 6 入门](http://http://es6.ruanyifeng.com/) + [相关博客](http://jspang.com/2017/06/03/es6/)

## 1.安装babel 全局+本地

1. $ npm install -g babel-cli
2. $ npm install --save-dev babel-preset-es2015 babel-cli
3. 根目录下新建.babelrc文件
4. 转换 $ babel src/index.js -o dist/index.js
5. 简化转化命令,在package.json里进行配置

## 2.变量的解构赋值(ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构)

1. 简单例子:let [a,[b,c],d]=[1,[2,3],4];
2. babel转换后:var a = 1,b = 2,c = 3,d = 4;

* 数组的默认值,下标作为索引,undefined和null是有区别的

```
let [foo2,foo1='321']=['123',undefined]  //321123
```

* 对象的解构赋值,以key值作为索引

```
let {foo3,foo4}={foo3:'123',foo4}
如果在解构之前就定义了变量,需要在结构语句外用圆括号包裹
let foo;
({foo} ={foo:'123'});//***此处
console.log(foo); //123
```

* 字符串解构 const [a1,b1,c1,d1,e1,f1]="654321"

## 3.扩展运算符和rest运算符

* 扩展运算符:允许它传入的参数是不确定的

```
function test1(...arg){
    console.log(""+arg[0]+arg[1]+arg[2]+arg[3]);//123undefined
    console.log(...arg);//1 2 3
}
test1(1,2,3);
```

* 优点:可以断开数组引用

```
let arr1=[1,2,3]
let arr2=[...arr1]
console.log(arr2)//[1, 2, 3]
arr2.push(4)
console.log(arr1)//[1, 2, 3]
```

* rest运算符:指向剩余的参数

```
function test2(a,...arg){
    console.log(arg.length)// 9
    console.log(...arg)//2 3 4 5 6 7 8 9 0
    for(let value of arg){
        console.log(value)//循环打印 2 3 4 5 6 7 8 9 0
    }
}
test2(1,2,3,4,5,6,7,8,9,0)
```

## 4.字符串模版

* 在``内使用${key}进行传入变量,变量可以计算,文本可以使用标签,拼接可以换行

```
`<b>text2</b>+${text1}+<small style='color:red'>text2</small>+${number1+10}`
```

* 字符串查找:text.includes(txt),返回t/f表示是否包含,text.startsWith(txt)查找开头,text.endsWith(txt)查找结尾
* 字符串重复:text.repeat(number),number表示次数

## 5.数字操作

```
//检测是否是有穷数,除了infinity,以外的所有数字,与全局的isFinite相比,不会强制转换
    console.log(Number.isFinite(11/4))//true
    console.log(Number.isFinite(Infinity))//false
    console.log(typeof(Infinity))//number
//检测是否是整数int
    console.log(Number.isInteger(111))//true
    console.log(Number.isInteger(Math.PI))//false
    console.log(Number.isInteger(Infinity))//false
//最大安全整数,安全整数的意思是在此范围内可以精确表示,IEEE754双精确浮点数定义
    //letnumber2=Math.pow(2,53)-1//最大安全整数
    letnumber2=Number.MAX_SAFE_INTEGER
    console.log(number2)////9007199254740991
    console.log(Number.isSafeInteger(number2+1))//false
    console.log(Number.isInteger(number2+1))//true
```

## 6.数组操作

```
// json对象的数组格式转化为数组 Array.from
    let arr=Array.from(json)
// 将文本和变量转换成数组 Array.of    
    let txt='2'
    let arr1=Array.of(txt,txt,txt,txt);
    console.log(arr1)//["2", "2", "2", "2"]
// find()实例方法,实例方法就是调用挂载在数组实例下的方法
    let arr=[1,2,3,4,5,6]
    console.log(arr.find(function(value,index,arr){//当前值,当前值的索引,当前数组
        return value>3//匹配到第一个就返回并中止
    }))// 4
// 数组循环 for...of
    let arr5=[1,2,3,4,5,6]
    for(let [index,val] of arr5.entries()){
        console.log(index+":"+val)//0:1 ... 5:6
    }
    let list=arr5.entries()
    console.log(list);//Array Iterator {}
    console.log(list.next().value)//[0, 1]
    console.log(list.next().value)//[1, 2]
// for of 与 for in的区别
    for in遍历的是数组的索引（即键名），而for of遍历的是数组元素值
    for in通常用来遍历对象的键名,可以遍历到原型属性method和索引name
    for of遍历的只是数组内的元素,更为简单效率
```

## 7.箭头函数

* 注意事项:1,花括号内不允许用new关键字;2,如果函数体多行,需要手动return返回值

```
let test=(a,b=1)=>{
    return a+b
}
console.log(test(1))//2
```

## 8.函数解构

```
let test1 = {
    a: 'abc',
    b: '123'
}
function fun({a,b}) { //参数名需要对应key值
    console.log(a + b)
}
fun(test1) //abc123
// 数组的函数解构  
let test2 = [1, 2, 3]
function fun1(a, b, c) {
    console.log(a, b, c)
}
fun1(...test2) //1 2 3
```

## 9.数组的遍历

1. foreach:无法用break跳出
2. filter:返回一个数组,数组内为匹配项(返回值为true的项)
3. some:遍历项中有一个true返回true,所有都不满足返回false
4. every:遍历项中有一个false就返回false,所有都不满足返回true
5. map:遍历+替换,返回的是替换后的新数组,不影响原来的数组

## 10.对象

```
// 变量key值构建
let key = 'a'
let obj = {
    [key]: '0'
}
// Object.is(obj1,obj2) 对象比较
console.log(+0 === -0); //true
console.log(NaN === NaN); //false
console.log(Object.is(+0, -0)); //false
console.log(Object.is(NaN, NaN)); //true
// Object.assign(a,b,c)合并对象
let a={a:'0'}
let b={b:'1'}
let c={c:'2'}
let d=Object.assign(a,b,c)
console.log(d)//{a: "0", b: "1", c: "2"}
```

## 11.全局标记Symbol

* Symbol是ES6新增的数据类型,全局原始数据

```
// 声明
let test= Symbol('abc');
console.log(test)//Symbol(abc)
```

## 12.数据结构-Set

1. Set的数据结构是以数组的形式构建的。
2. Set不允许内部有重复的值，如果有只显示一个，相当于去重。
3. 虽然Set很像数组，但是他不是数组。

```
let setArr = new Set(['a','b','c']);
```

## 13.数据结构-WeakSet

* WeakSet在new的时候不允许赋值,只能通过add添加
* 同样不允许有重复的对象,但是存储的是引用对象,而不是值判断

```
let setArr2=new WeakSet
setArr2.add({'a':'1'})
setArr.delete('a')
setArr.clear()
```

## 14.数据结构-map

1. 通常json对象key值查找的效率低于数组和map数据结构
2. map数据结构的key值也可以是对象
3. map的效率和灵活性更好

```
let mapObj=new Map()
let json={'id':'qweasdzxc','name':'abc'}
mapObj.set(json,'a')
mapObj.set('b',json)
console.log(mapObj)//{{id: "qweasdzxc", name: "abc"} => 'a', "age" => {'b': "qweasdzxc", name: "abc"}}
console.log(mapObj.get(json))// 'a'
mapObj.delete(json)
console.log(mapObj.size)// 1
console.log(mapObj.has('b'))// true
mapObj.clear()
```

## 15.Proxy代理

* 增强对象和函数的生命周期(钩子函数handler)

* get:function(target,key,property){//拦截对象属性的读取:target-目标对象,key-要设置的属性的名称

* set:function(target,key,value,receiver) {//拦截对象属性的设置:value-要设置的属性的新值,receiver-最初指向的对象
1. receiver通常是代理本身。但是set处理程序也可以通过原型链或各种其他方式间接调用。
2. set在严格模式下,return false将引发TypeError异常

* apply的作用是调用内部的方法，它使用在方法体是一个匿名函数时。

## 16.promise对象

```
// Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject,由 JavaScript 引擎提供，不用自己部署。
// resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
// reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
// Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。
    let state = 0
    const promise = new Promise(function (resolve, reject) {
        // 状态码变更
        state = 1
        // 业务代码
        // ...
        //异步成功时(即成功改变状态码后)
        if (state == 1) { 
            resolve('success');
        } else {
            reject('failure');
        }
        // 注意，调用resolve或reject并不会终结 Promise 的参数函数的执行。
        console.log('321')// 321
        // 一般来说，调用resolve或reject以后，Promise 的使命就完成了，后继操作应该放到then方法里面.
        // 而不应该直接写在resolve或reject的后面。所以，最好在它们前面加上return语句，这样就不会有意外。
        return
    })
    // Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。
    // then方法可以接受两个回调函数作为参数,第一个回调函数是Promise对象的状态变为resolved时调用
    // 第二个回调函数是Promise对象的状态变为rejected时调用。其中，第二个函数是可选的
    promise.then(function (value) {
        // success
        console.log(value)
    }, function (error) {
        // failure
        console.log(error)
    });
```

## 17.class

```
// 类不存在变量提升,ES6不支持私有方法和私有属性
// 类的方法内部如果含有this，它默认指向类的实例,单独使用该方法会报错,可使用箭头函数解决
    // class类的声明
    // class里声明的方法之间没有逗号分隔,与常见的对象方法不同 
    // 同时方法内结尾处需要return出值,否则后续会出现undefined
        class UserInfo {
        name(value) {
            console.log(value)
            return value
        }
        age(value) {
            console.log(value)
            return value
        }
        showInfo(obj) {
            console.log(obj.age)
            console.log(`${this.name(obj.name)}:${this.age(obj.age)}`) //wokerB:40
        }
    }
    // 实例化
    let workerA = new UserInfo
    workerA.name('workerA') //workerA
    workerA.age(30) //30
    let workerB = new UserInfo
    workerB.showInfo({
        name: 'wokerB',
        age: 40
    })
    // class类的参数用constructor()进行传递,直接使用this.[key]进行调用
    class Cpter {
        constructor(a, b) {
            this.a = a
            this.b = b
        }
        add() {
            return this.a + this.b
        }
    }
    let cpter1 = new Cpter(1, 5)
    console.log(cpter1.add()) //6
    // Class 的静态方法
    // 类相当于实例的原型，所有在类中定义的方法，都会被实例继承。
    // 如果在一个方法前，加上static关键字，就表示该方法不会被实例继承
    // 如果静态方法包含this关键字，这个this指的是类，而不是实例。
    // 静态方法可以与非静态方法重名
    class Test99 {
        static hello() {
            return 'hello';
        }
    }
    console.log(Test99.hello()) // 'hello'
    // let test99 = new Test99();
    // console.log(test99.hello())// 报错 TypeError: test99.hello is not a function
    // class类的继承
    // 父类Cpter被子类ProCpter继承,静态方法也可以继承
    class ProCpter extends Cpter {
        // 如果子类没有定义constructor方法，这个方法会被默认添加
        // constructor(...args) {
        //     super(...args);
        // }
        constructor(a, b, c) {
            super(a, b) //调用父类的constructor()
            this.c = c //新增子类属性
        }
        minus() {
            return this.a - this.b + this.c
        }
    }
    let proCpter = new ProCpter(2, 5, 10)
    console.log(proCpter.add()) // 7
    console.log(proCpter.minus()) // 7
```

## 18.模块化

* export :负责进行模块化，也是模块的输出。
1. export:可存在多个,在导入时要加{}
2. export default只能有一个,则不需要{}

* import : 负责把模块引，也是模块的引入操作。

## 19.async和await

1. async是异步的简写,是让方法变成异步,返回的是Promise对象
2. await是等待异步方法完成,可以接受表达式或者普通值
3. 注意的是await必须在async方法中才可以使用因为await访问本身就会造成程序停止堵塞，所以必须在异步方法中才可以使用。
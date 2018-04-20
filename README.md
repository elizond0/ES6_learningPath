# ES6_learningPath

## 1.安装babel 全局+本地
$ npm install -g babel-cli
$ npm install --save-dev babel-preset-es2015 babel-cli
根目录下新建.babelrc文件
转换 $ babel src/index.js -o dist/index.js
简化转化命令,在package.json里进行配置

## 2.变量的解构赋值(ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构。)
简单例子:let [a,[b,c],d]=[1,[2,3],4];
babel转换后:var a = 1,b = 2,c = 3,d = 4;

数组的默认值,下标作为索引,undefined和null是有区别的
let [foo2,foo1='321']=['123',undefined]  //321123

对象的解构赋值,以key值作为索引
let {foo3,foo4}={foo3:'123',foo4}
如果在解构之前就定义了变量,需要在结构语句外用圆括号包裹
let foo;
({foo} ={foo:'123'});//***此处
console.log(foo); //123

字符串解构 const [a1,b1,c1,d1,e1,f1]="654321"

## 3.扩展运算符和rest运算符
扩展运算符:允许它传入的参数是不确定的
function test1(...arg){
    console.log(""+arg[0]+arg[1]+arg[2]+arg[3]);//123undefined
    console.log(...arg);//1 2 3
}
test1(1,2,3);
优点:可以断开数组引用
let arr1=[1,2,3]
let arr2=[...arr1]
console.log(arr2)//[1, 2, 3]
arr2.push(4)
console.log(arr1)//[1, 2, 3]

rest运算符:指向剩余的参数
function test2(a,...arg){
    console.log(arg.length)// 9
    console.log(...arg)//2 3 4 5 6 7 8 9 0
    for(let value of arg){
        console.log(value)//循环打印 2 3 4 5 6 7 8 9 0
    }
}
test2(1,2,3,4,5,6,7,8,9,0)

## 4.字符串模版
在``内使用${key}进行传入变量,变量可以计算,文本可以使用标签,拼接可以换行
`<b>text2</b>+${text1}+<small style='color:red'>text2</small>+${number1+10}`
字符串查找:text.includes(txt),返回t/f表示是否包含,text.startsWith(txt)查找开头,text.endsWith(txt)查找结尾
字符串重复:text.repeat(number),number表示次数

## 5.数字操作
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

## 6.数组操作
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

## 7.箭头函数
注意事项:1,花括号内不允许用new关键字;2,如果函数体多行,需要手动return返回值
    let test=(a,b=1)=>{
        return a+b
    }
    console.log(test(1))//2

## 8.函数解构
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

## 9.数组的遍历
    foreach:无法用break跳出
    filter:返回一个数组,数组内为匹配项(返回值为true的项)
    some:遍历项中有一个true返回true,所有都不满足返回false
    every:遍历项中有一个false就返回false,所有都不满足返回true
    map:遍历+替换,返回的是替换后的新数组,不影响原来的数组

## 10.对象
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

## 11.全局标记Symbol
Symbol是ES6新增的数据类型,全局原始数据
    // 声明
    let test= Symbol('abc');
    console.log(test)//Symbol(abc)













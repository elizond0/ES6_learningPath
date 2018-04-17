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

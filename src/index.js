// 2.变量的解构赋值
// 简单例子
{
    let [a, [b, c], d] = [1, [2, 3], 4];
}
// 数组默认值
{
    let [foo = '321'] = []
    // console.log(foo) //321
} {
    let [foo2, foo1 = '321'] = ['123', undefined]
    // console.log(foo1+foo2)//321123
}
// 对象的解构赋值
{
    let {
        foo3,
        foo4
    } = {
        foo3: '123',
        foo4
    }
    // console.log(foo3 + foo4) //123undefined
    let foo5;
    ({
        foo5
    } = {
        foo5: '123'
    });
    // console.log(foo5); //123}
    // 字符串解构 
    {
        const [a1, b1, c1, d1, e1, f1] = "654321"
        // console.log(a1);
        // console.log(b1);
        // console.log(c1);
        // console.log(d1);
        // console.log(e1);
        // console.log(f1);
    }
}

// 3.扩展运算符和rest运算符
// 对象扩展运算符
function test1(...arg) {
    // console.log(""+arg[0]+arg[1]+arg[2]+arg[3]);//123undefined
    // console.log(...arg);//1 2 3
}
test1(1, 2, 3);
// 断开数组引用
{
    let arr1 = [1, 2, 3]
    let arr2 = arr1
    // console.log(arr2)//[1, 2, 3]
    arr2.push(4)
    // console.log(arr1)//[1, 2, 3, 4]
} {
    let arr1 = [1, 2, 3]
    // let arr2=arr1.concat()
    // let arr2=arr1.slice()
    let arr2 = [...arr1]
    // console.log(arr2)//[1, 2, 3]
    arr2.push(4)
    // console.log(arr1)//[1, 2, 3]
}

// rest运算符
function test2(a, ...arg) {
    // console.log(arg.length)// 9
    // console.log(...arg)//2 3 4 5 6 7 8 9 0
    for (let value of arg) {
        // console.log(value)//循环打印 2 3 4 5 6 7 8 9 0
    }
}
test2(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)

// 字符串模版
{
    let text = 'text'
    let text1 = 'text1'
    let number1 = 1000000
    let text2 = `<b>text2</b>+${text1}+<small style='color:red'>text2</small>+${number1+10}`
    // document.write(text2)
    // console.log(text2.includes(text)) //true
    // console.log(text2.startsWith(text)) //false
    // console.log(text2.endsWith(text)) //false
    // console.log(text.repeat(3))//texttexttext
}

// 数字操作 
{
    // 二进制声明 Binary
    let binary=0b010101
    console.log(binary)//21
    // 八进制 Octal
    let octal=0o666;
    console.log(octal)//438
    // 检测是否是有穷数,除了infinity,以外的所有数字,与全局的isFinite相比,不会强制转换
    console.log(Number.isFinite(11/4))//true
    console.log(Number.isFinite(Infinity))//false
    console.log(typeof(Infinity))//number
    // 检测是否是整数 int
    console.log(Number.isInteger(111))// true
    console.log(Number.isInteger(Math.PI))// false
    console.log(Number.isInteger(Infinity))// false
    // 最大安全整数,安全整数的意思是在此范围内可以精确表示,IEEE754双精确浮点数定义
    // let number2=Math.pow(2,53)-1 //最大安全整数
    let number2=Number.MAX_SAFE_INTEGER
    console.log(number2)////9007199254740991
    console.log(Number.isSafeInteger(number2+1))//false
    console.log(Number.isInteger(number2+1))//true

}
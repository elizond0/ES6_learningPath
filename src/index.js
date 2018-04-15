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
function test1(...arg){
    console.log(""+arg[0]+arg[1]+arg[2]+arg[3]);//123undefined
    console.log(...arg);//1 2 3
}
test1(1,2,3);
// 断开数组引用
{
    let arr1=[1,2,3]
    let arr2=arr1
    console.log(arr2)//[1, 2, 3]
    arr2.push(4)
    console.log(arr1)//[1, 2, 3, 4]
}
{
    let arr1=[1,2,3]
    // let arr2=arr1.concat()
    // let arr2=arr1.slice()
    let arr2=[...arr1]
    console.log(arr2)//[1, 2, 3]
    arr2.push(4)
    console.log(arr1)//[1, 2, 3]
}

// rest运算符
function test2(a,...arg){
    console.log(arg.length)// 9
    console.log(...arg)//2 3 4 5 6 7 8 9 0
    for(let value of arg){
        console.log(value)//循环打印 2 3 4 5 6 7 8 9 0
    }
}
test2(1,2,3,4,5,6,7,8,9,0)











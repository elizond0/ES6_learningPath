'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ## 2.变量的解构赋值(ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构。)
// 简单例子
{
    var a = 1,
        b = 2,
        c = 3,
        d = 4;
}
// 数组默认值
{
    var _ref = [],
        _ref$ = _ref[0],
        foo = _ref$ === undefined ? '321' : _ref$;
    // console.log(foo) //321
}{
    var foo2 = '123',
        _undefined = undefined,
        foo1 = _undefined === undefined ? '321' : _undefined;
    // console.log(foo1+foo2)//321123
}
// 对象的解构赋值
{
    var _foo3$foo = {
        foo3: '123',
        foo4: foo4
        // console.log(foo3 + foo4) //123undefined
    },
        foo3 = _foo3$foo.foo3,
        foo4 = _foo3$foo.foo4;
    var foo5 = void 0;

    // console.log(foo5); //123}
    // 字符串解构 
    var _foo = {
        foo5: '123'
    };
    foo5 = _foo.foo5;
    {
        var _ = "654321",
            _ref2 = _slicedToArray(_, 6),
            a1 = _ref2[0],
            b1 = _ref2[1],
            c1 = _ref2[2],
            d1 = _ref2[3],
            e1 = _ref2[4],
            f1 = _ref2[5];
        // console.log(a1);
        // console.log(b1);
        // console.log(c1);
        // console.log(d1);
        // console.log(e1);
        // console.log(f1);

    }
}

// ## 3.扩展运算符和rest运算符
// 对象扩展运算符
function test1() {
    // console.log(""+arg[0]+arg[1]+arg[2]+arg[3]);//123undefined
    // console.log(...arg);//1 2 3
}
test1(1, 2, 3);
// 断开数组引用
{
    var arr1 = [1, 2, 3];
    var arr2 = arr1;
    // console.log(arr2)//[1, 2, 3]
    arr2.push(4);
    // console.log(arr1)//[1, 2, 3, 4]
}{
    var _arr = [1, 2, 3];
    // let arr2=arr1.concat()
    // let arr2=arr1.slice()
    var _arr2 = [].concat(_arr);
    // console.log(arr2)//[1, 2, 3]
    _arr2.push(4);
    // console.log(arr1)//[1, 2, 3]
}

// rest运算符
function test2(a) {
    for (var _len = arguments.length, arg = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        arg[_key - 1] = arguments[_key];
    }

    // console.log(arg.length)// 9
    // console.log(...arg)//2 3 4 5 6 7 8 9 0
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = arg[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            // console.log(value)//循环打印 2 3 4 5 6 7 8 9 0

            var value = _step.value;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
test2(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

// ## 4.字符串模版
{
    var text = 'text';
    var text1 = 'text1';
    var number1 = 1000000;
    var text2 = '<b>text2</b>+' + text1 + '+<small style=\'color:red\'>text2</small>+' + (number1 + 10);
    // document.write(text2)
    // console.log(text2.includes(text)) //true
    // console.log(text2.startsWith(text)) //false
    // console.log(text2.endsWith(text)) //false
    // console.log(text.repeat(3))//texttexttext
}

// ## 5.数字操作
{
    // 二进制声明 Binary
    var binary = 21;
    // console.log(binary)//21
    // 八进制 Octal
    var octal = 438;
    // console.log(octal)//438
    // 检测是否是有穷数,除了infinity,以外的所有数字,与全局的isFinite相比,不会强制转换
    // console.log(Number.isFinite(11/4))//true
    // console.log(Number.isFinite(Infinity))//false
    // console.log(typeof(Infinity))//number
    // 检测是否是整数 int
    // console.log(Number.isInteger(111))// true
    // console.log(Number.isInteger(Math.PI))// false
    // console.log(Number.isInteger(Infinity))// false
    // 最大安全整数,安全整数的意思是在此范围内可以精确表示,IEEE754双精确浮点数定义
    // let number2=Math.pow(2,53)-1 //最大安全整数
    var number2 = Number.MAX_SAFE_INTEGER;
    // console.log(number2)////9007199254740991
    // console.log(Number.isSafeInteger(number2+1))//false
    // console.log(Number.isInteger(number2+1))//true
}

// ## 6.数组操作
{
    // json数组格式
    var json = {
        '0': 'abc',
        '1': 'def',
        '2': 'ghi',
        length: 3 //length是json数组格式必备的元素

        // json对象的数组格式转化为数组 Array.from
    };var arr = Array.from(json);
    // console.log(json)//默认是对象
    // console.log(arr)//转成了数组["abc", "def", "ghi"]
    // 将文本和变量转换成数组 Array.of
    var txt = '2';
    var _arr3 = Array.of(txt, txt, txt, txt);
    // console.log(arr1)//["2", "2", "2", "2"]
    var txt2 = '2,2,2,2';
    var _arr4 = txt2.split(',');
    // console.log(arr2)//["2", "2", "2", "2"]
    // 数组的实例方法,实例方法就是调用挂载在数组实例下的方法
    // find() 查找
    var arr3 = [1, 2, 3, 4, 5, 6];
    // console.log(arr3.find(function(value,index,arr){//当前值,当前值的索引,当前数组
    //     return value>3//匹配到第一个就返回并中止
    // }))// 4
    // fill() 可以替换多个项 参数:要替换的元素,开始的位置,结束的位置 
    var arr4 = [1, 2, 3, 4, 5, 6];
    arr4.fill('100', 2, -1);
    // console.log(arr4)//[1, 2, "100", "100", "100", 6]
    // 数组循环 for...of
    var arr5 = [1, 2, 3, 4, 5, 6];
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = arr5.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            // console.log(index+":"+val)//0:1 ... 5:6

            var _step2$value = _slicedToArray(_step2.value, 2),
                index = _step2$value[0],
                val = _step2$value[1];
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    var list = arr5.entries();
    // console.log(list);//Array Iterator {}
    // console.log(list.next().value)//[0, 1]
    // console.log(list.next().value)//[1, 2]
}

// ## 7.箭头函数
{
    var test = function test(a) {
        var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

        return a + b;
    };
    // console.log(test(1))//2
}
// ## 8.函数解构
{
    var fun = function fun(_ref3) {//参数名需要对应key值
        // console.log(a + b)

        var a = _ref3.a,
            b = _ref3.b;
    };

    var fun1 = function fun1(a, b, c) {
        // console.log(a, b, c)
    };

    // 对象的函数解构 
    var _test = {
        a: 'abc',
        b: '123'
    };

    fun(_test); //abc123
    // 数组的函数解构  
    var _test2 = [1, 2, 3];

    fun1.apply(undefined, _test2); //1 2 3
    // in 在数组和对象的新特性
    // in 对象
    var test3 = {
        a: 'abc',
        b: '123'
        // console.log('a' in test3) //true
        // console.log('c' in test3) //false
        // in 数组
    };var test4 = [1, 2, 3,,,,];
    // console.log(test4.length) //6
    // console.log(3 in test4) //false
}
// ## 9.数组的遍历
{
    // foreach
    var _arr5 = ['a', 'b', 'c'];
    _arr5.forEach(function (value, index) {
        // console.log(index, value) //0a,1b,2c
    });
    // filter
    _arr5.filter(function (x) {
        // console.log(x) //a,b,c
    });
    // some
    _arr5.some(function (x) {
        // console.log(x) //a,b,c
    });
    // map 遍历+替换
    var _arr6 = ['a', 'b', 'c', 'd'];
    // console.log(arr1.map(x => {
    //     return '0'
    // })) //['0', '0', '0', '0']
    // console.log(arr1)//["a", "b", "c", "d"]
}

// ## 10.对象
{
    // 变量key值构建
    var key = 'a';
    var obj = _defineProperty({}, key, '0');
    // console.log(obj) //{a: "0"}
    // Object.is(obj1,obj2) 对象比较
    // console.log(+0 === -0); //true
    // console.log(NaN === NaN); //false
    // console.log(Object.is(+0, -0)); //false
    // console.log(Object.is(NaN, NaN)); //true
    // Object.assign(a,b,c)合并对象
    var _a = {
        a: '0'
    };
    var _b = {
        b: '1'
    };
    var _c = {
        c: '2'
    };
    var _d = Object.assign(_a, _b, _c);
    // console.log(d)//{a: "0", b: "1", c: "2"}
}

// ## 11.全局标记Symbol
{
    // 声明
    var _test3 = Symbol('abc');
    // console.log(typeof (test));
    // console.log(test) //Symbol(abc)
    // console.log(test.toString()) //Symbol(abc)
    // 保护对象的元素
    var _obj2 = {
        name: 'abc'
    };
    var age = Symbol('age');
    _obj2[age] = 18;
    // for (let item in obj) {
    //     console.log(obj[item]);//abc
    // }
    // console.log(obj);//{name: "abc", Symbol(age): 18}
}

// ## 12.数据结构-Set
// Set的数据结构是以数组的形式构建的。
// Set不允许内部有重复的值，如果有只显示一个，相当于去重。
// 虽然Set很像数组，但是他不是数组。
{
    var setArr = new Set(['a', 'b', 'c']);
    // console.log(setArr)//Set(3) {"a", "b", "c"}
    setArr.add('b');
    setArr.add('e');
    setArr.delete('a');
    // console.log(setArr)//Set(3) {"b", "c", "e"}
    // console.log(setArr.size);//3
    // console.log(setArr.has('e'))//true
    // console.log(setArr.has('a'))//false
    setArr.clear();
    // console.log(setArr)//Set(0) {}
}

// ## 13.数据结构-WeakSet
// WeakSet在new的时候不允许赋值,只能通过add添加
// 同样不允许有重复的对象,但是存储的是引用对象(内存空间),而不是值判断
{
    var setArr2 = new WeakSet();
    setArr2.add({ 'a': '1' });
    // console.log(setArr2)//WeakSet {{'a':'1'}}
}

// ## 14.数据结构-map
// 通常json对象key值查找的效率低于数组和map数据结构
// map数据结构的key值也可以是对象
// map的效率和灵活性更好
{
    var mapObj = new Map();
    var _json = { 'id': 'qweasdzxc', 'name': 'abc' };
    mapObj.set(_json, 'a');
    mapObj.set('b', _json);
    // console.log(mapObj)// Map(2) {{id: "qweasdzxc", name: "abc"} => 'a', "age" => {'b': "qweasdzxc", name: "abc"}}
    // console.log(mapObj.get(json))// 'a'
    mapObj.delete(_json);
    // console.log(mapObj)// Map(1) {"age" => {'b': "qweasdzxc", name: "abc"}}
    // console.log(mapObj.size)// 1
    // console.log(mapObj.has('b'))// true
    mapObj.clear();
    // console.log(mapObj)// Map(0) {}
}

// ## 15.Proxy代理
// 增强对象和函数的生命周期(钩子函数)
{
    // 声明Proxy 第一个参数是对象本体,第二个参数是钩子函数
    var _obj3 = new Proxy({
        add: function add(num) {
            return num++;
        },
        name: 'abc'
    }, {
        get: function get(target, key, property) {
            //拦截对象属性的读取:target-目标对象,key-要设置的属性的名称
            console.log('function get');
            console.log(target); //{add: ƒ, name: "abc"}
            console.log(key); //name
            console.log(property); //Proxy {add: ƒ, name: "abc"}
            return target[key];
        },
        set: function set(target, key, value, receiver) {
            //拦截对象属性的设置:value-要设置的属性的新值,receiver-最初指向的对象
            //receiver通常是代理本身。但是set处理程序也可以通过原型链或各种其他方式间接调用。
            console.log('function set ' + key + '=' + value);
            console.log(value);
            console.log(receiver);
            //set函数在严格模式下,return false将引发TypeError异常
            // return true
            return target[key] = value + '';
        }
    });
    console.log(_obj3.name); //abc
    _obj3.name = 'abcde';
    console.log(_obj3.name); //abcde
    // apply的作用是调用内部的方法，它使用在方法体是一个匿名函数时。
    var target = function target() {
        return 'apply-target';
    };
    var handler = {
        apply: function apply(target, context, args) {
            console.log('apply-handler');
            return Reflect.apply.apply(Reflect, arguments);
        }
    };
    var pro = new Proxy(target, handler);
    console.log(pro());
}

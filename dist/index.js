'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// 2.变量的解构赋值
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

// 3.扩展运算符和rest运算符
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

// 字符串模版
{
    var text = 'text';
    var text1 = 'text1';
    var number1 = 1000000;
    var text2 = '<b>text2</b>+' + text1 + '+<small style=\'color:red\'>text2</small>+' + (number1 + 10);
    document.write(text2);
    // console.log(text2.includes(text)) //true
    // console.log(text2.startsWith(text)) //false
    // console.log(text2.endsWith(text)) //false
    // console.log(text.repeat(3))//texttexttext
}

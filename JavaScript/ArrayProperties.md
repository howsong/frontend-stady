# Array方法

### concat 
> 合并多个数组；合并多个字符串
```javascript
[1,2,3].concat([4],6) // [1,2,3,4,6]
```
### constructor
### copyWithin [ES6]
### entries 
> 该方法返回一个新的Array Iterator对象，该对象包含数组中每个索引对应的键/值对
```javascript
var iterator = [1,2,3,4,5].entries();
console.log(iterator);// Array Iterator {}
for(let a of iterator){
	console.log(a);
}
/*
* [0,1]
* [1,2]
* [2,3]
* [3,4]
* [4,5]
* undefined
* */
```
### every
> 检测数组所有元素是否都符合指定条件
- [grammar]：`array.every(function(currentValue,index,arr), thisValue)`
- [params]：
    + 
```javascript
[1,2,3,4,5].every(function(v,i,a) {
  return v > 0
})
```


### fill [ES6]
> 数组填充
- [grammar]：`array.fill(value, start, end)`
- [params]：
    + value：填充值
    + start：起始索引（包括）
    + end：结束索引（不包括）
```javascript
[].fill(6); // []
[1,2,3].fill(6); // [6,6,6]
[1,2,3].fill(); // [undefined,undefined,undifined]
[1,2,3,4,5,6].fill(6,2); // [1,2,6,6,6,6]
[1,2,3,4,5,6].fill(6,2,3); // [1,2,6,4,5,6]
```
### filter  
> 过滤掉回调函数返回值为false的项 返回新数组 原数组不变
- [grammar]：`array.filter(function(currentValue,index,arr), thisValue)`
- [params]：
    + currentValue
    + index
    + arr
    + thisValue
```javascript
[1,2,3,34,5,6,7].filter(v=>v>10); // [34] 
```

### find
> 返回满足回调函数条件的第一元素
```javascript
[1,2,3,4,20,14,23].find(v=>v>=20); // 20
```

### findIndex
> 返回满足回调函数条件的第一元素对应的索引
```javascript
[1,2,3,4,20,14,23].find(v=>v>=20); // 4
```

### flat
> 扁平化二维数组 (方法会删除数组中的空项) 不改变原数组 返回新数组
- [grammar]：`array.flat(depth)`
- [params]：
    + depth：深度（默认为1）
```javascript
var arr1 = [1,2,3,[1,2,[4,4,4]]];
arr1.flat(); // [1,2,3,,1,2,[4,4,4]]
arr1.flat(2); // [1,2,3,,1,2,4,4,4]
arr1.flat(Infinity); // [1,2,3,,1,2,4,4,4]
var arr2 = [1,2, ,3,[1,2,[4,4,4]]]; // [1,2,3,1,2,[4,4,4]]
arr2.flat();
```
### flatMap


### forEach
> 扁平化二维数组 (方法会删除数组中的空项) 不改变原数组 返回新数组
- [grammar]：`arr.forEach(function(currentValue,index,array){},thisValue);`
- [params]：
    + currentValue 处理的当前元素
    + index 可选 当前元素索引
    + array 可选 操作的数组
    + thisValue 可选 当执行回调函数时用作 this 的值
```javascript
[1,2,3].forEach(function(v,i,arr){
    console.log(v,this);
},'test')
/*
* 1 String {"test"}
* 2 String {"test"}
* 3 String {"test"}
*/
```

### includes 
> 判断数组中是否包含这一项
```javascript
[1,2,3,4,5,6,7].includes(2)// true
[1,2,3,4,5,6,7].includes(10)// false
```
### indexOf
> 查找指定元素在数组中的索引 
- [grammar]：`arr.indexOf(searchElement,fromIndex)`
- [params]：
    + searchElement 查找的元素
    + fromIndex 查找起始位置 负数表示倒过来查找
```javascript
var arr = [1,2,3,4,6,'t',[1],{name:'t'}];
arr.indexOf(10); // -1
arr.indexOf(1); // 0
arr.indexOf(6); // 4
arr.indexOf(1, 0); // 0
arr.indexOf(1, 1); // -1
arr.indexOf(1,-1); // 0
```

### join
### keys
### lastIndexOf
> 与indexOf功能一样，查找方向相反

### length
> Array 实例属性，指的是数组成员的个数

### map
### pop
### push

### Array.prototype.reduce
> reduce是一个对数组累积操作的方法，在使用中一定得记得加return返回你希望累积操作的数据
> 英文释义：vi. 减少；缩小；归纳为。 vt. 减少；降低；使处于；把…分解
- [gramar]: `array.reduce(function(accumulator, currentValue, currentIndex, array), initialValue)`
- [params]:
    + initialValue 初始值 默认是数组的第一项
    + accumulator 累加器、聚集者
    + currentValue 当前处理的值
    + currentValue 当前处理值得索引
    + array 当前正在循环的数组
- [application]: 数组求和、数组去重、数组降为
```js
// 数组求和
const total = [1,2,3,4].reduce((accumulator,current)=>accumulator += current); // 10
const total = [1,2,3,4].reduce((accumulator,current)=>accumulator += current, 90); // 100
// 数组去重
let arr = [1, 2, 2, 4, null, null].reduce((accumulator, current) => {
    return accumulator.includes(current) ? accumulator : accumulator.concat(current);
}, []);
// 数组降维
let arr = [[1,2],[3,4],[5,6]].reduce((accumulator, current)=>accumulator.concat(current),[]);//[1, 2, 3, 4, 5, 6]
// 多维数组降维 （递归）
let arr = [0,[1],[2, 3],[4, [5, 6, 7]]];

let dimensionReduction = function (arr) {
    return arr.reduce((accumulator, current) => {
        return accumulator.concat(
            Array.isArray(current) ? 
            dimensionReduction(current) : 
            current
            );
    }, []);
}
dimensionReduction(arr); //[0, 1, 2, 3, 4, 5, 6, 7]
```
### reduceRight
### reverse
### shift
### slice
### some
### sort
### splice
### toLocaleString
### toString
### unshift
### values
### Symbol(Symbol.iterator)
### Symbol(Symbol.unscopables)
# JavaScript 数组属性和方法
- length
- __proto__
  - concat: ƒ concat()
  - constructor: ƒ Array()
  - copyWithin: ƒ copyWithin()
  - entries: ƒ entries()
  - every: ƒ every()
  - fill: ƒ fill()
  - filter: ƒ filter()
  - find: ƒ find()
  - findIndex: ƒ findIndex()
  - flat: ƒ flat()
  - flatMap: ƒ flatMap()
  - forEach: ƒ forEach()
  - includes: ƒ includes()
  - indexOf: ƒ indexOf()
  - join: ƒ join()
  - keys: ƒ keys()
  - lastIndexOf: ƒ lastIndexOf()
  - length: 0
  - map: ƒ map()
  - pop: ƒ pop()
  - push: ƒ push()
  - reduce: ƒ reduce()
  - reduceRight: ƒ reduceRight()
  - reverse: ƒ reverse()
  - shift: ƒ shift()
  - slice: ƒ slice()
  - some: ƒ some()
  - sort: ƒ sort()
  - splice: ƒ splice()
  - toLocaleString: ƒ toLocaleString()
  - toString: ƒ toString()
  - unshift: ƒ unshift()
  - values: ƒ values()
  - Symbol(Symbol.iterator): ƒ values()
  - Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}


### concat 数组合并
- @grammar：``
- @param [数组或者任意个参数]
- @return [拼接生成的新数组]
- 原数组保持不变
```javascript
const n = [1,2,3]
n.concat('1',3)
n.concat(4)
n.concat([1,2,3])
[1,2,3].concat([4,5],6,'b',[3,7]) // [1,2,3,4,5,6,'b',3,7]
```
### constructor
### copyWithin 从数组的指定位置拷贝元素到数组的另一个指定位置中
- @grammar:`array.copyWithin(target, start, end)`
- @param 
  - target 复制到指定目标索引位置
  - start 元素复制的起始位置
  - end 停止复制的索引位置 (默认为 array.length)。如果为负值，表示倒数
```javascript
const n = [1,2,3,4,5,6,7]
n.copyWithin(0,2,6) // [3, 4, 5, 6, 5, 6, 7]

```
### entries

### every 
检测数组所有元素是否都符合指定条件 
- @grammar: `array.every(function(currentValue,index,arr), thisValue)`

### fill 填充
- @grammar:`array.fill(value, start, end)`
- @return: undefined
```javascript
const n = new Array(6) // [empty,empty,empty,empty,empty,empty]
n.fill('a',1,3) // [empty,'a','a',empty,empty,empty]
```
### filter 过滤、筛选符合条件的项
- @grammar:`array.filter(function(currentValue,index,arr), thisValue)`
- @return: 符合条件的项的数组集合
- 原数组不变
```javascript
const n = [1,2,3,4,'a']
const m = n.filter(v=>v!=='a')
console.log(m) // [1,2,3,4]
console.log(n) // [1,2,3,4,'a']
```

### find 找到符合条件的第一个元素
- @grammar: `array.find(function(currentValue, index, arr),thisValue)`
- @return: 符合条件的第一个元素
- 原数组不变
```javascript
const n = [{n:1},{m:2},{c:'d'}]
const m = n.find(v=>v.n===1) // {n:1}
```

### findIndex 找到符合条件的第一个元素对应的索引 用法同上

### flat 数组扁平化
### flatMap

### forEach 数组遍历
- @grammar:`array.forEach(function(currentValue, index, arr), thisValue)`
- @return: undefined
```javascript

```
### includes 包含
- @grammar: `array.includes(searchElement, fromIndex)`
```javascript
[undefined,11,'b'].includes(undefined) // true
[undefined,11,'b'].includes(undefined,1) // false
[undefined,11,'b'].includes(undefined,0) // true
```

### indexOf 返回元素在数组第一次出现的位置
- @grammar:`array.indexOf(item,start)`
- @return: 返回元素索引位置，如果没有返回-1
```javascript
const n = [1,2,3,4,5,6,7]
n.indexOf(3) // 2
n.indexOf(3,1) // 2
n.indexOf(2,5) // -1
```

### join 数组元素放入一个字符串中
- @grammar:`array.join(separator)`
- @params
  - separator:分隔符，默认为英文逗号
- @return 拼接成的字符串
```javascript
const arr = [1,'a','b']
arr.join() // '1,a,b'
arr.join('') // '1ab'
arr.join('-') // '1-a-b'
const n = [{a:1},1,'a']
n.join('') // "[object Object]1a"
```
### keys 用于从数组创建一个包含数组键的可迭代对象
- @grammar:`array.keys()`
- @return: Array Iterator

### lastIndexOf 返回元素在数组最后出现的位置
- @grammar:`array.lastIndexOf(item,start)`
- @return: 返回元素索引位置，如果没有返回-1
```javascript
const n = [1,2,3,4,5,6,7]
n.lastIndexOf(3) // 2
n.lastIndexOf(3,1) // -1
n.lastIndexOf(2,5) // 2
```

### map 遍历
- @grammar:`array.map(function(currentValue,index,arr), thisValue)`
- @return:映射生成的数组
- 原数组不变

### pop 删除数组的最后一个元素
- @grammar:`array.pop()`
- @return: 删除的元素
- 原数组成员改变
```javascript
const n = [1,2,3,4]
const m = n.pop()
console.log(n) // [1,2,3]
console.log(m) // 4
```

### push 数组末尾添加元素
- @grammar: `array.push(item1, item2, ..., itemX)`
- @return: 添加袁术后的数组长度
- 原数组成员改变
```javascript
const n = [1,2,3,4]
const l = n.push(5,6,7)
console.log(l) // 7
console.log(n) // [1,2,3,4,5,6,7]
```
### reduce 接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值
- @grammar:`array.reduce(function(total, currentValue, currentIndex, arr), initialValue)`

### reduceRight 同reduce

### reverse 颠倒数组元素顺序
- @grammar:`array.reverse()`
- @return: 颠倒顺序后的数组
- 原数组改变
```javascript
const n = [1,2,3,4]
n.reverse()
console.log(n) // [4,3,2,1]
```

### shift 删除数组的第一个元素
- @grammar:`array.shift()`
- @return: 删除的元素
- 原数组成员改变
```javascript
const n = [1,2,3,4]
const m = n.shift()
console.log(n) // [2,3,4]
console.log(m) // 1
```


### slice 切片
- @grammar:`array.slice(start, end)`
- @param
  - start:切片起始索引为位置，包含
  - end:切片结束索引位置，不包含
```javascript
const n = [1,2,3,4,5,6,7]
const a =  n.slice(1,3) // [2,3]
```
### some 判断数组是否有满足条件的元素
- @grammar:`array.some(function(currentValue,index,arr),thisValue)` 
- @return: true/false
- 原数组不变
```javascript
const n = [1,'a']
const y = n.some((v)=>{
  return v === 1
}) // true
```

### sort 数组排序
- @grammar:`array.sort(sortfunction)`
- @return: 排序后的数组
- 原数组改变
```javascript
const n = [40,100,1,5,25,10];
const l = n.sort(function(a,b){return a-b});
console.log(n)
console.log(l)
```

### splice 用于添加或删除数组中的元素
- @grammar:`array.splice(index,howmany,item1,.....,itemX)`
- @param 
  - index: 必须，起始位置索引
  - howmany: 删除元素个数
```javascript
const n = [1,2,3,4,5,6,7]
const m = n.splice(1,2,'a','b','c')
console.log(m) // [2,3]
console.log(n) // [1,'a','b','c',3,4,5,6,7]
```
### toLocaleString
### toString

### unshift 数组的开头添加一个或更多元素
- @grammar:`array.unshift(item1,item2, ..., itemX)`
- @return: 数组长度
- 原数改变
```javascript
const n = [1,'a']
const l = n.unshift(1,2,3)
console.log(l) // 5
cosnole.log(n) // [1,2,3,1,'a']
```

### values
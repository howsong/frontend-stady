# JavaScript 检测数据类型的方法
### 1、 typeof 操作符
```js
typeof 1 // number
typeof "" // string
typeof false // boolean
typeof Symbol() // symbol
typeof undefined // undefined
typeof null // object
typeof [] // object
typeof {} // object
typeof new Date() // object
typeof new RegExp() // object
typeof function(){} // function
```

### 2、 instanceof
> instanceof用来判断A是否为B的实例，表达式为：A instanceof B，如果A是B的实例，则返回true，否则返回false。instanceof检测的是原型，内部机制是通过判断对象的原型链中是否有类型的原型
```js
"123" instanceof String // false
new String('123') instanceof String // true
[] instanceof Array // true
[] instanceof Object // true
{} instanceof Object // true
```
```js
// 可以用以下方法实现 
function instance(left,right){
    let prototype = right.prototype;  //获取类型的原型
    let proto = left.__proto__;       //获取对象的原型
    while(true){    //循环判断对象的原型是否等于类型的原型，直到对象原型为null，因为原型链最终为null
       if (proto === null || proto === undefined){
           return false;
       }
       if (proto === prototype){
           return true;
       }
       proto = proto.__proto__;
     }
}
console.log(instance({},Object)); //true
console.log(instance([],Number)); //false
```

### 3、constructor
> 当一个函数F被定义时，JS引擎会为F添加prototype原型，然后在prototype上添加一个constructor属性，并让其指向F的引用，F利用原型对象的constructor属性引用了自身，当F作为构造函数创建对象时，原型上的constructor属性被遗传到了新创建的对象上，从原型链角度讲，构造函数F就是新对象的类型。这样做的意义是，让对象诞生以后，就具有可追溯的数据类型
```js
new Number(1).constructor === Number // true
''.constructor === String // true
new Error().constructor === Error // true
[].constructor === Array // true
window.constructor === Window // true
```

### 4、Object.prototype.toString()
>  toString()是Object的原型方法，调用该方法，默认返回当前对象的[[Class]]。这是一个内部属性，其格式为[object Xxx],其中Xxx就是对象的类型。对于Object对象，直接调用toString()就能返回[object Object],而对于其他对象，则需要通过call、apply来调用才能返回正确的类型信息。
```js
Object.prototype.toString.call(1) // 
```

**封装一个准确判断数据类型的方法**
```js
function getType(obj){
  let type  = typeof obj;
  if(type != "object"){
    return type;
  }
  return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1');
}
```


# 1、类型断言
> 定义联合类型，有些方法只有特定类型才有，数据具体赋值的时候你可能比Typescript更清楚具体的类型，这是你可以将其断定为该类型，然后访问该方法的时候也不会报错了
```ts
// 类型断言的两种写法
// as写法
const v: string | number = '123'
const vL: number = ( v as string).length
// 尖括号写法
const v: string | number = '123'
const vL: number = ( <String>v ).length
```
# 2、联合类型
# 3、泛型
# 4、类型推论
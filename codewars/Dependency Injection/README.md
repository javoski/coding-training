[Dependency Injection](https://www.codewars.com/kata/dependency-injection)

>Description:
>
Did you hear about Dependency Injection pattern? The main idea of this pattern is that you may have ability to pass dependencies into your function in any order and they will be resolved automatically. Take a look at this:
>```
var myDependentFunc = inject(function (secondDepency, firstDependency) {
  firstDependency();
  secondDepency();
});
```
>
myDependentFunc();
As you can see we just put some variables into the function's signature and work with them as usualy. But we know nothing about where these variables are located! Let's assume that all dependencies are stored in the single hash object (for instanse 'deps') and the injector function will be sought among 'deps' properties:
>```
var deps = {
  'firstDependency': function () {return 'this is firstDependency';},
  'secondDepency': function () {return 'this is secondDepency';},
};
```
Ok, I hope this is clear. Also, in order to setup DependencyInjector (DI) we need to specify dependency object:
>```
var DI = function (dependency) {
  this.dependency = dependency;
};
```
>
Your task is create DI.prototype.inject method that will return a new function with resolved dependencies. And don't forget about nested functions. You shouldn't handle them.


这个题目还挺有意思的，看了好久才看懂是怎么回事。简单点说就是编写一个 DI 类，当 new 一个 DI 实例的时候传入一个依赖对象，得到一个依赖注入的实例，实例的 inject 方法接受一个函数，函数中的参数就是与依赖对象属性名对应（参数名与属性名一样，与顺序无关）的值(它通常是函数，当然也可以是其他类型的值)，最后返回一个包含依赖的函数。（实在表达无能😂）

要解这道题，首先要找出传入 inject 的函数 func 的各个参数名，考虑调用func 的toString， 然后再用正则，比如对于 inject(function func(second, first) {...}):
```js
let args = /^[^(]+\(([^)]+)/.exec(func.toString())
/**
 * args: ["function func(second, first", "second, first", ...]
 */
let deps = args[1].split(/\s*,\s*/)
// deps: ["second", "first"]
```
接下来的就比较简单了，最后的代码如下:
```js
/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
var DI = function (dependency) {
  this.dependency = dependency;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
  // Your code goes here
  let args = /^[^(]+\(([^)]+)/.exec(func.toString())
  let deps = args ? args[1].split(/\s*,\s*/).map(d => this.dependency[d]) : []
  return function () {
    return func.apply(this, deps)
  }
}
```
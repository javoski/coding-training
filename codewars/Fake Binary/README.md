[Fake Binary](http://www.codewars.com/kata/fake-binary/train)

>Given a string of numbers, you should replace any number below 5 with '0' and any number 5 and above with '1'. Return the resulting string.

------

基础题，解法有很多，下面是基本的两种

```js
function fakeBin (x) {
  return x.split('').map(d => +(d >= 5)).join('')
}
```

```js
function fakeBin (x) {
  return x.replace(/\d/g, d => '0000011111'[d])
}
```
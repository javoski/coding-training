[Sum Strings as Numbers](https://www.codewars.com/kata/sum-strings-as-numbers)

Description:
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:
```js
sumStrings('1','2') // => '3'
```
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

------

典型的大数加法，我写的函数如下:
```js
function sumStrings(a, b) {
  const zero = '0'.charCodeAt(0)
  a = a.split('').reverse().map(c => c.charCodeAt(0) - zero)
  b = b.split('').reverse().map(c => c.charCodeAt(0) - zero)
  let carry = 0
  const result = []
  const toInt = v => v ? v : 0
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const sum = toInt(a[i]) + toInt(b[i]) + carry
    result.push(sum % 10)
    carry = Math.floor(sum / 10)
  }
  result.reverse()
  if (carry) result.unshift(1)
  return result.join('').replace(/^0+/, '')
}
```

然后看了别人写的，发现我写的还是太啰嗦了😂:
```js
function sumStrings(a, b) {
  var res = '', c = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = c % 10 + res;
    c = c > 9;
  }
  return res.replace(/^0+/, '');
}
```


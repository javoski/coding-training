[LRU Cache](https://www.codewars.com/kata/lru-cache)

Description:
Implement a [Least Recently Used](http://en.wikipedia.org/wiki/Cache_algorithms#Examples) (LRU) cache. An LRU cache is a key-value store that contains a set `capacity` for the number of elements it holds, which is stored in a property. The `size` should also be a property. When trying to add a new key-value pair, if `cache.size == cache.capacity`, the Least Recently Used key is removed.

Hint: You will will need to use the `Object.defineProperty` facility

Example Behavior:
```js
var store = new LRUCache(3 // Size of the cache 
                        , {a: 1}); // Optional initial values for cache
store.size; // should be 1
store.capacity; // should be 3
store.a; // should be 1;
store.cache('b', 2)['b']; // should be 2
store.a = 5;
store.a; // should be 5
store.cache('c', 3).cache('d', 4).b; // should be undefined, since 'b' was removed because it was the least recently used
store.delete('d');
store.d ; // should be undefined, since 'd' was deleted
store.size ; // should be 2
store.cache('c', 4); 
store.c; // should be 4
store.capacity = 1; // should resize the store to have just one element
Object.keys(store); // should be ['c']
```
Full API Specification:

- The user should be able to make a new cache object with `new LRUCache(n)`, where `n` is the cache's (initial) capacity
  - The constructor should be able to take a javascript object as an optional second parameter, which will be copied and put into the cache
- Items can be added to the cache using a method called `cache`
  - `cache` takes two arguments, a key and a value
    - The new key should be added as a property to the cache
    - The new property *should* be `enumerable`
    - It should be possible to reassign the new property
    - Caching an already existing property should update its value
  - The `cache` method should return the cache itself, so the method can be chained (ie, the builder pattern)
  - The cache method itself should not be `enumerable`, `writable`, nor `configurable`
- Items can be deleted from the cache using a method called `delete`
  - This method ***should not*** be `enumerable`, `writable`, nor `configurable`
  - This method should have the same return values as the `delete` builtin
- The number of elements stored in the cache should be accessible via the `size` property
  - This property ***should not*** be `enumerable`, `writable` nor `configurable`
- The capacity should be accessible by via the `capacity` property
  - Making the capacity smaller should trigger the cache to delete the least recently used items until the size of the cache is smaller than or equal to the capacity
  - This property ***should not*** be `enumerable`
  - The `size` property should never acceed the `capacity` property of a cache
- An item in the cache is used every time its value is read or assigned, or it is cached using the `cache` method.

------

实现一个容量可变的 LRUCache, 常规方法应该使用双向链表，这里为了省时间直接用数组的移动实现😂.
```js
function LRUCache(capacity, init) {
  const map = new Map()
  let _capacity = capacity
  const cached = []

  function useKey (key) {
    const index = cached.findIndex(k => k === key)
    cached.splice(index, 1)
    cached.push(key)
  }

  Object.defineProperty(this, 'size', {
    get () {
      return cached.length
    }
  })
  Object.defineProperty(this, 'capacity', {
    get () {
      return _capacity
    },
    set (n) {
      if (_capacity > n) {
        for (let i = 0; i < _capacity - n; i++) {
          this.delete(cached[i])
        }
      }
      _capacity = n
    }
  })

  Object.defineProperty(this, 'delete', {
    value: function (key) {
      let ret = true
      if (map.has(key)) {
        const delIndex = cached.findIndex(k => key === k)
        cached.splice(delIndex, 1)
        map.delete(key)
      }
      const descriptor = Object.getOwnPropertyDescriptor(this, key)
      if (descriptor && descriptor.configurable === false) ret = false
      try {
        delete this[key]
      } catch (e) {
        return false
      }
      return ret
    }
  })

  Object.defineProperty(this, 'cache', {
    value: function (key, value) {
      if (map.has(key)) {
        map.set(key, value)
        useKey(key)
      } else  {
        if (_capacity <= cached.length) {
          this.delete(cached[0])
        } 
        map.set(key, value)
        cached.push(key)
        Object.defineProperty(this, key, {
          get () {
            useKey(key)
            return map.get(key)
          },
          set (value) {
            useKey(key)
            map.set(key, value)
          },
          enumerable: true,
          configurable: true
        })
      }
      return this
    }
  })

  if (init) {
    Object.keys(init).map(key => this.cache(key, init[key]))
  }
}
```
如果容量是固定的，还可以用这种[算法](https://github.com/dominictarr/hashlru#algorithm).
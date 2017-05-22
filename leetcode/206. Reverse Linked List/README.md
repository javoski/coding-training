[206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/#/description)

Reverse a singly linked list.

翻转一个链表，通过简单的置换即可实现：
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let newHead = null
    while (head) {
        const next = head.next
        head.next = newHead
        newHead = head
        head = next
    }
    return newHead
}
```

当然也可以把所有节点用一个临时数组存起来，暴力翻转：
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    const list = []
    while (head) {
        list.push(head)
        head = head.next
    }
    list.reduce((next, newHead) => {
        newHead.next = next
        return newHead
    }, null)
    return list.pop()
}
```
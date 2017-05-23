[83. Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/#/description)

Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given ```1->1->2```, return ```1->2```.
Given ```1->1->2->3->3```, return ```1->2->3```.

删除有序链表中重复的项，简单地把链表走一遍就行，代码如下:
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
var deleteDuplicates = function(head) {
    let p = head
    while (p) {
        const next = p.next
        if (next && next.val === p.val) p.next = next.next
        else p = p.next
    }
    return head
}
```
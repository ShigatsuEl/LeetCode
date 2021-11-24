/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let tail = head;
    
    if (head === null) return head;
    let len = 1;
    while (tail.next) {
       tail = tail.next;
       len++;
    }
    tail.next = head;
    let count = len - (k % len);
    while (count > 0) {
       head = head.next;
       tail = tail.next;
       count--;
    }
    tail.next = null;
    return head;
};
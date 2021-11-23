/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    while (head) {
        const next = head.next;
        const curr = head;
        curr.next = prev;
        head = next;
        prev = curr;
    }
    
    return prev;
};
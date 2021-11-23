/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let nullHead = new ListNode(null);
    nullHead.next = head;
    let curr = nullHead;    
    while (curr?.next) {
        if (curr.next.val === val) {
            curr.next = curr.next.next;
            continue;
        }
        curr = curr.next;
    }
    return nullHead.next;
};
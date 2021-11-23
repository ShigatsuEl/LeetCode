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
var oddEvenList = function(head) {
    let evenList = new ListNode(null);
    let curr = head, evenCurr = evenList, num = 0;
    if(!head) return null;
    if(!head?.next || !head?.next?.next) return head;
    
    while (curr.next) {
        if (num % 2 === 0) {
            let addList = new ListNode(curr.next.val);
            evenCurr.next = addList;
            evenCurr = evenCurr.next;
            curr.next = curr.next.next;
            num++;
            continue;
        }
        curr = curr.next;
        num++;
    }
    curr.next = evenList.next;
    return head;
};
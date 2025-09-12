/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head||!head.next) return true;
    let slow=head;
    let fast=head;
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }
    let prev=null;
    while (slow){
        let nextnode=slow.next
        slow.next=prev;
        prev=slow;
        slow=nextnode;
    }
    let left=head;
    let right=prev;
    while(right){
        if(left.val!==right.val) return false;
        left=left.next;
        right=right.next;
    }
    return true
};
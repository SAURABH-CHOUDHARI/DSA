/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let s =head;
    let set = new Set();
    while(s != null){
        if(set.has(s))return true
        set.add(s)
        s = s.next;
    }
    return false
};
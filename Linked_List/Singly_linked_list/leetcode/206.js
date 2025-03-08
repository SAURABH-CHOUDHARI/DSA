// reverse singly linked list
var reverseList = function (head) {
    let cur = head;
    let prev = null;
    while (cur != null) {
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp
    }
    return prev
};
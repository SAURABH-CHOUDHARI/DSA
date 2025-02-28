// two poiter approach

var mergeTwoLists = function(list1, list2) {
    let one  = list1, two = list2;
    let ans = new ListNode(-1);
    let temp = ans;
    while(one!=null && two!= null){
        if(one.val <two.val){
            temp.next = one;
            one = one.next;
        }else{
            temp.next = two;
            two = two.next;
        }
        temp = temp.next;
    }
    if(one == null)temp.next = two;
    else temp.next = one;
    return ans.next
};


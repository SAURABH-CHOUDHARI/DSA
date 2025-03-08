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

//Recursion

var mergeTwoLists = function (list1, list2) {
    function merge(l1,l2){
        if(l1 == null)return l2
        if(l2 == null)return l1
        if(l1.val < l2.val){
            l1.next = merge(l1.next,l2)
            return l1
        }else{
            l2.next = merge(l2.next,l1)
            return l2
        }
    }
    return merge(list1,list2)
};
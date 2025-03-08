//floyd's fast and slow pointer approach`

var detectCycle = function(head) {
    let s = head, f = head;
    
    while(f != null && f.next != null){
        s = s.next;
        f = f.next.next;
        if(f == s){
            s = head;
            while(s!=f){
                f = f.next
                s = s.next
            }
            return f
        }
    }
    return null

};

//using set
var detectCycle = function(head) {
    let cur = head;
    let set = new Set();
    let count = 0;
    while(cur != null){
        if(set.has(cur))return cur;
        set.add(cur)
        cur = cur.next;
    }
    return cur

};
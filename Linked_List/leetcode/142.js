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
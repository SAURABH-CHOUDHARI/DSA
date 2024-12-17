let arr = [5,8,10,12,16,17,35,40,55,75]
let se  = 100

function BinarySearch(arr,se){
    let s = 0, e = arr.length-1
    while(s<=e){
        let mid = Math.floor((s+e)/2)
        if(arr[mid] == se) return mid
        else if(arr[mid] > se) e = mid -1
        else s = mid +1 
    }
    return -1
}

let index = BinarySearch(arr, se);
if(index == -1) console.log("not found")
else console.log("found at "+ index)
let arr = [1, 2, 3, 4, 5];
let d = 3;


rotate(arr, 0, d-1)
rotate(arr, d, arr.length-1)
rotate(arr, 0, arr.length-1)

function rotate(arr , i , j){
    while(i<=j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
}
console.log(arr)
let arr = [1, 2, 3, 4, 5, 6, 7, 8 ,9];
let d = 3;


rotate(arr, arr.length-d, arr.length-1)
rotate(arr, 0, arr.length-d-1)
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
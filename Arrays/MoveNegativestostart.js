let  arr = [10,12,-5,-3,15,-8,13,-6];
j = 0
for(let i=0; i < arr.length; i++){
    if(arr[i] < 0){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        j++
    }
}
console.log(arr)
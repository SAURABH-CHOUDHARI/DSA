let arr = [7,4,3,1,5,9];
quickSort(arr,0, arr.length-1)
console.log(arr)

function quickSort(arr,first, last){
    if(first<last){
        let pivotIndex = partition(arr, first ,last)
        quickSort(arr, first , pivotIndex-1)
        quickSort(arr, pivotIndex+1, last)
    }
}

function partition(arr , first , last) {
    let pivot = arr[last]
    let i = first - 1
    
    for(let j = first ; j < last ; j++){
        if(arr[j] < pivot){
            i++
            swap(arr, i , j)
        }
    }
    swap(arr, i + 1, last)  
    return i + 1
}

function swap(arr, i , j){
    [arr[i],arr[j]] = [arr[j],arr[i]]
}
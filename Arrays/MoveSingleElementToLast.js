function moveZero(arwr) {
    let nonzeroidx = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[nonzeroidx] = arr[i]
            nonzeroidx++;
        }
    }

    for(let i = nonzeroidx; i <arr.length ; i++){
        arr[i]= 0
    }
    return arwr
}
let arr = [1,2,0,12,3,0, 21,0]
console.log(moveZero(arr))
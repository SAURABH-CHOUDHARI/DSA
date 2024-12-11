let arr = [10, 20, 30, 40, 50]
let j = Number(prompt("Enter rotations :"))

j = j % arr.length

for (let k = 1; k <= j; k++) {
    let temp = arr[arr.length - 1]
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1]
    }
    arr[0] = temp
}

console.log(arr)

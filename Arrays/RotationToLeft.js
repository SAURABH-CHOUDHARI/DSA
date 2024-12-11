let arr = [10, 20, 30, 40, 50]
let k = Number(prompt("Enter number of rotations :"))

k = k % arr.length

for (let j = 1; j <= k; j++) {
    let temp = arr[0]
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1]
    }
    arr[arr.length - 1] = temp
}

console.log(arr) 
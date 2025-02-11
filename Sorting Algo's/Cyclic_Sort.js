let arr = [6, 5, 4, 2, 3, 1]

console.log(cyclicSort(arr))

function cyclicSort(arr) {

    let small = Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < small) small = arr[i]
    }

    for (let i = 0; i < arr.length;) {
        let correct = arr[i] - small
        if (arr[i] != arr[correct]) {
            [arr[i], arr[correct]] = [arr[correct], arr[i]]
        }
        else i++
    }
    return arr
}

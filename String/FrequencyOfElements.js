let str = "hello"

let arr = new Array(26).fill(0)
for (let i = 0; i < str.length; i++) {
    let ascii = str.charCodeAt(i)
    arr[ascii - 97]++
}


for (let j = 0; j < arr.length; j++) {
    if (arr[j] > 0) console.log(String.fromCharCode(j + 97) + ' : ' + arr[j])

} 
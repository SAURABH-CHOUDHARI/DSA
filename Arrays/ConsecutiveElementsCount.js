let arr = [0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1];
j = 0
let max = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
        j++
    } else {
        if (j > max) max = j;
        j = 0
    }
}
if (j > max) max = j;
console.log(max)
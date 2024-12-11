let n = 20;
let x = 4;
let inc = 0
for (let i = 1; i <= n; i++) {
    let sum = 0
    for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
            sum++
        }
    }
    if (sum == x) {
        inc++
    }
}
console.log(inc)
let n = 7;
let a = 0, b = 1;
let sum = 0;
for (let i = 0; i <= n * 2; i++) {
    if (i <= 1) {
        if (i % 2 == 0) {
            sum += i
        }
    } else {
        [a, b] = [b, a + b];
        if (i % 2 == 0) {
            sum += b
        }
    }
}

console.log(sum)
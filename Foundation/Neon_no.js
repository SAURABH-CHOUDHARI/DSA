let n = 9;

let sq_copy = n * n;
let sum = 0;
while (sq_copy > 0) {
    sum += sq_copy % 10
    sq_copy = (sq_copy - (sq_copy % 10)) / 10
}
console.log(`${n == sum ? 'neon number' : 'bhosada number'}`)

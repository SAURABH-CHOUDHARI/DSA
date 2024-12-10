let a = Number(prompt("Enter a Number :"));
let b = Number(prompt("Enter another Number :"));

let res = Math.min(a, b)

while (res > 0) {
    if (a % res == 0 && b % res == 0) {
        break;
    }
    res--
}
console.log(`HCF or GCD pof these two numbers are ${res}`)    
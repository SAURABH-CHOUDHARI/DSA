let a = Number(prompt("Enter a Number :"));
let b = Number(prompt("Enter another Number :"));


while (a != b) {
    if(a>b) a =a-b;
    else b= b-a
}
console.log(`HCF or GCD of these two numbers are ${a}`)    
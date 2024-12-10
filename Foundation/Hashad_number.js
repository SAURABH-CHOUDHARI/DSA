let a = 171;
let temp = a;
let sum = 0;


while (temp > 0) {
    mod = 0
    mod = temp % 10
    temp = (temp - mod) / 10
    sum += mod
}


if (a % sum === 0) {
    console.log("Harshad Number")
}
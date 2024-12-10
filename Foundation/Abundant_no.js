let a = 9;
temp = 1;
sum = temp;

while (temp <= a / 2) {
    if (a % temp == 0) {
        sum += temp;
    }
    if (sum > a) {
        console.log(sum);
    }
    temp++
}
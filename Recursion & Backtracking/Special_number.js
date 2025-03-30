const specialNum = (num) => {
    if( num < 9)return num
    
    let sum = 0
    while(num != 0){
    last = num % 10
    sum += last
    num = Math.floor(num/10)
    }
    num = sum
    
    
    return specialNum(num) == 1 ? true : false
    
}
const num = 145
console.log(specialNum(num)  ? "special number": "not special")
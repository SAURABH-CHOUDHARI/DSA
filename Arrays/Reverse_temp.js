let arr = [10,20,30,40,50]
let temp = []
let i = arr.length-1
let j = 0
while(i>= 0){
    temp[j] = arr[i]
    j++
    i--
}
console.log(temp)
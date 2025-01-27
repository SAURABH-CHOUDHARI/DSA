let n = Number(prompt("Enter a Number :"))

checkPrime(n)

function checkPrime(n){
let arr = new Array(n+1).fill(true)
    for(let i=2; i<=Math.floor(Math.sqrt(n));i++){
        if(arr[i]){
            for(let j= i*i; j<=n ;j+=i){
                arr[j] = false
            }
        }
    }
    for(let i=2; i<arr.length; i++){
        if(arr[i])console.log(i)
    }
}
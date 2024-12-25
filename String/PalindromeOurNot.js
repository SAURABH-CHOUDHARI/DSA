let arr = prompt("Enter A String: ")


let a = "";
for (let i = arr.length - 1; i >= 0; i--) {
    a += arr[i]
}

if (a == arr) {
    console.log("Palindrome")
} else {
    console.log("not Palindrome")
}
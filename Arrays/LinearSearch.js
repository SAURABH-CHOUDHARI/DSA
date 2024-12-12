let arr = [1, 9, 1, 112, 131, 1, 4, 1, 0, 112];
let se = Number(prompt('Enter a Search Element :'))

let idx = -1;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == se) {
        idx = i;
        break
    }
}

if (idx == -1) console.log("not found");
else console.log(se + " found at" + idx + " index")
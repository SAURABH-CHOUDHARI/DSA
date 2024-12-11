let arr = [1, 2, 3, 4, 5];
let d = 3;

let A = arr.slice(0, d);
console.log(A)
let B = arr.slice(d);
console.log(B)

// If the lengths of A and B are not equal, make adjustments.

    if (A.length < B.length) {
        let temp = B.slice(0, A.length);
        B = B.slice(A.length).concat(A);
        A = temp;
    } else {
        let temp = A.slice(B.length);
        console.log(temp)
        A = A.slice(0, B.length).concat(B);
        console.log(A)
        B = temp;
        console.log(B)
    }


// Combine the balanced arrays
console.log(A.concat(B));

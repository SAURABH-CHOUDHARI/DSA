let isbn = '0306406153'; 


let sum = 0;
for (let i = 0; i < 9; i++) {

    sum += parseInt(isbn[i]) * (10 - i);
}


let lastDigit = parseInt(isbn[9]);
sum += lastDigit;


let isValid = sum % 11 === 0;

console.log(`${isValid ? 'Valid ISBN number' : 'Not valid'}`);
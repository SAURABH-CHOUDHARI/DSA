let n= 5;

for(let i = 1 ; i<= n ; i++){
    for(let k =n-1; k>=i ; k--){
        process.stdout.write(" ");
    }
    for(let j = 1 ; j<= i ; j++){
        process.stdout.write("* ");
    }
    console.log();
}
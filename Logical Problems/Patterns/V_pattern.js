let n = 5;

for (let i = 1; i <= n; i++) {
    for (let k = 1; k <= i - 1; k++) {
        process.stdout.write("  ");
    }
    for (let j = i; j <= i; j++) {
        process.stdout.write("* ");
    }
    for (let j = i; j <= n - 1; j++) {
        process.stdout.write("  ");
    }
    for (let o = i; o <= n - 2; o++) {
        process.stdout.write("  ");
    }
    for (let x = i; x <= i; x++) {
        if (x >= n) {
            break
        }
        process.stdout.write("* ");
    }
    console.log();
}
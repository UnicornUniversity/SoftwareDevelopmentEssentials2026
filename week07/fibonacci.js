let numberOfIterations = 0;

function fibonacci(n) {
    numberOfIterations++;
    switch (n) {
        case 0:
            return 0;
        case 1:
            return 1;
        default:
            return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

for (let n = 0; n <= 50; n++) {
    let start = performance.now();
    numberOfIterations = 0;
    const value = fibonacci(n);
    const timeTaken = performance.now() - start;
    console.log("n = " + n + "; value = " + value + "; numberOfIterations = " + numberOfIterations + "; time = " + timeTaken + " ms.");
}
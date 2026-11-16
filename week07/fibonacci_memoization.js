let numberOfIterations = 0;
const cache = {};

function fibonacci(n) {
    numberOfIterations++;

    if (cache[n] !== undefined) return cache[n];

    let value;

    if (n < 2) {
        value = n;
    } else {
        value = fibonacci(n - 1) + fibonacci(n - 2);
    }

    cache[n] = value;

    return value;
}

for (let n = 0; n <= 150; n++) {
    let start = performance.now();
    numberOfIterations = 0;
    const value = fibonacci(n);
    const timeTaken = performance.now() - start;
    console.log("n = " + n + "; value = " + value + "; numberOfIterations = " + numberOfIterations + "; time = " + timeTaken + " ms.");
}
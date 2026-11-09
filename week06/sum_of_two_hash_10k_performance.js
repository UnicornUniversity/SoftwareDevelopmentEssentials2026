// brute force solution

function sumOfTwoHash(inputNumbers, target){
    let totalNumberOfIteration = 0;
    let start = performance.now();

    const cache = {};

    for (let i = 0; i < inputNumbers.length; i++) {
        totalNumberOfIteration++;
        const value = inputNumbers[i];
        const diff = target - value;
        if (cache[diff] === undefined){
            cache[value] = i;
        } else {
            console.log("value 1 = " + value);
            console.log("value 2 = " + diff);
            console.log("index 1 = " + cache[diff]);
            console.log("index 2 = " + i);
            const timeTaken = performance.now() - start;
            console.log("Execution time = " + timeTaken + " ms");

            return totalNumberOfIteration;
        }
    }

    return totalNumberOfIteration;
}

console.log("Total # of iterations = " + sumOfTwoHash(input_vector, target));

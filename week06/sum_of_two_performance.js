// brute force solution

function sumOfTwo(inputNumbers, target){
    let totalNumberOfIteration = 0;
    let start = performance.now();

    for (let i = 0; i < inputNumbers.length; i++) {
        for (let j = 0; j < inputNumbers.length; j++) {
            totalNumberOfIteration++;
            if (i === j) continue;
            const value1 = inputNumbers[i];
            const value2 = inputNumbers[j];
            if (value1 + value2 === target){
                console.log("value 1 = " + value1);
                console.log("value 2 = " + value2);
                console.log("index 1 = " + i);
                console.log("index 2 = " + j);
                const timeTaken = performance.now() - start;
                console.log("Execution time = " + timeTaken + " ms");

                return totalNumberOfIteration;
            }
        }
    }

    return totalNumberOfIteration;
}

const input = [9, 5, 76, 11, 7];
const target = 18;

console.log("Total # of iterations = " + sumOfTwo(input, target));

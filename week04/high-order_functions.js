const arr = [6, 7, 8, 1, 56];

// MAP
function inc(n) {
    return n + 1;
}

const incArr = arr.map(inc);

const decArr = arr.map((n) => {
    return n - 1;
});

const doubleArr = arr.map((n) => n * 2);

function printArray(title, arr) {
    console.log("-----" + title + "-----");
    for (const arrElement of arr) {
        console.log(arrElement);
    }
    console.log("---------------");
}

printArray("arr", arr);
printArray("newArr", incArr);
printArray("decArr", decArr);
printArray("doubleArr", doubleArr);

// FOR EACH
// chain of calls
// documentation:  The typical use case is to execute side effects at the end of a chain.
arr.map(inc).forEach((n) => console.log("n` = " + n));

// FILTER
// lambda equation and its predicate
const arrFiltered = arr.filter((n) => n % 2 === 0);
printArray("filtered array", arrFiltered);

// REDUCE
const minValue1 = arr.reduce((currentMinValue, currentValue, index, myArray) => {
    if (currentMinValue > currentValue) {
        currentMinValue = currentValue;
    }

    if (index === myArray.length - 1) {
        console.log("this is the last element");
    }

    return currentMinValue;
});

console.log("minValue1 = " + minValue1);

const minValue2 = arr.reduce((currentMinValue, currentValue) => currentMinValue > currentValue ? currentValue : currentMinValue);
console.log("minValue2 = " + minValue2);


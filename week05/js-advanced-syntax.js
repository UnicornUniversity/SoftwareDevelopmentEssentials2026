function sum(a, b) {
    return a + b;
}

// arrow function
const sumF = (a, b) => a + b;

console.log(sumF(5, 4));

const multF = (a, b) => {
    a *= 2;
    b *= 3;
    return a + b;
}

console.log(multF(5, 4));

// destructuring
const colors = ["green", "red", "yellow"];
//  const green = colors[0]; , etc.

const [myGreen, myRed, thirdColor] = colors;
console.log(myRed);

const [anotherGreen, , yellowColor] = colors;
console.log(yellowColor);



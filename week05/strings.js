// this is also array, 0-based
const s = "Hello, Prague!";
const sEmpty = "";
const sNonEmpty = " "; // space means not empty string

console.log(s[2]);
console.log(s[s.length - 1]);
console.log(sEmpty.length);
console.log(sNonEmpty.length);

console.log("trim:");
const sForTrimming = "   Good Morning!   ";
console.log(sForTrimming.trimStart());
console.log(sForTrimming.trimEnd());
console.log(sForTrimming.trim());

console.log(sNonEmpty.trim().length);

// upper and lower case
const sUpperCase = "BERLIN"; // ASCII
const sLowerCase = "berlin"; // Berlin

if (sUpperCase.toLowerCase() === sLowerCase.toLowerCase()){
    console.log("they are match");
}

// null
let justDeclaredWithoutAssignment;
console.log(justDeclaredWithoutAssignment);

let sNull = "Hello";
sNull = null; // undefined, NaN = not a number

console.log("comparison with null")
if (sNull?.toLowerCase() === sLowerCase.toLowerCase()){
    console.log("they are match");
}

const valueToPrint = sNull ?? "default";
const valueToPrint2 = sNull == null ? "default" : sNull;
console.log(valueToPrint);


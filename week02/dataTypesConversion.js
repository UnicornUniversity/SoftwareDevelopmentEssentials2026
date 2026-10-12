const x = 100;

const s = x.toString();
console.log("x as string = " + s);

const piString = "3.1415";
const piInt = parseInt(piString);
const piFloat = parseFloat(piString);
console.log("pi as integer = " + piInt);
console.log("pi as float = " + piFloat);

// memes start here

// +
console.log("--- plus ---");
console.log("16" + 10);
console.log(16 + "10");
console.log(16 + "10" + "abc");
console.log(parseInt("16") + 10);

// -
console.log("--- minus ---");
console.log("16" - 10);
console.log(16 - "10");
console.log("16" - "10");
console.log(16 - "10" + "abc");
console.log(16 - ("10" + "abc"));
console.log(16 - "10" - "abc");

// ++ --
console.log(" ++ --")
let a = 5;
console.log(a++);
console.log(a);

let b = 5;
console.log(++b);
console.log(b);

let c = 5;
console.log(c--);
console.log(c);

let d = 5;
console.log(--d);
console.log(d);








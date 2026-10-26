// visibility scope

const array = [100, 22, 4443];

let i = 1000;
const n = 2000;

// var + omitted keywords == global
// const + let == local
for (let i = 0; i < array.length; i++) {
    const n = array[i]; // 0-based
    console.log("#" + (i + 1) + " = " + n);
}

console.log("last index = " + i);
console.log("last value = " + n);

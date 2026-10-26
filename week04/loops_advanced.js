const array = [100, 22, 4443];

for (let i = 0; i < array.length; i++) {
    const n = array[i]; // 0-based
    console.log("#" + (i + 1) + " = " + n);
}

for (const n of array) {
    console.log(n);
}

// do -- until

let x = 100;
do {
    console.log("x = " + x);
    x++;
} while (x <= 3);

let a = 100;
while (a <= 3) {
    console.log("a = " + a);
    a++;
}

console.log("-------------------------------------");
// continue, break
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0){
        console.log(i);
    }
}
console.log("-------------------------------------");
for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) continue;
    console.log(i);
}

console.log("-------------------------------------");
let b = 1;
while (b <= 100) {
    if (b > 50) break;
    console.log("b = " + b);
    b++;
}







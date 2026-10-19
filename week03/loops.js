const x = 10;

console.log("let's run loop");

for (let i = 0; i < 10; i++) {
    console.log("i = " + i);

    for (let j = 9; j >= 0; j--) {
        console.log(">>> j = " + j);
    }
}

for (let k = 0; k < 10; ++k) {
    console.log("k = " + k);
}

let a = 1;
while (a < 10) {
    console.log("a = " + a);
    a++;
}

console.log("x = " + x);
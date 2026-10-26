const ages = [23, 25, 75, 100, 15];

let currentMinValue = ages[0];
for (let i = 1; i < ages.length; i++) {
    const currentAge = ages[i];
    if (currentMinValue > currentAge){
        currentMinValue = currentAge;
    }
}

console.log(currentMinValue);

console.log(Math.min(...ages));
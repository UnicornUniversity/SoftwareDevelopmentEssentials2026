const names = ["John", "Mary", "Greg", "Grandpa", "Bill"];
const ages = [23, 25, 75, 100, 15];

for (let i = 0; i < names.length; i++) {
    const age = ages[i];
    if (age % 25 !== 0) continue;
    console.log(names[i] + " has anniversary (" + age + ")");
}


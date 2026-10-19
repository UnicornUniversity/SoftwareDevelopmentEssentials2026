// this is just declaration
function greetings(name) {
    console.log("Hello, " + name + "!");
}

greetings("John");

const names = ["John", "Mary", "Greg", "Grandpa", "Bill"];
const ages = [23, 25, 75, 100, 15];

for (let i = 0; i < names.length; i++) {
    greetings(names[i]);
}

function checkReminder(value1, value2){
    // inline function
    return value1 % value2 === 0
}

// this is a pure function (depends on its args only)
function checkAnniversary(age){
    const isAnniversary = checkReminder(age, 25);
    return isAnniversary;
}

for (let i = 0; i < names.length; i++) {
    const age = ages[i];
    if (!checkAnniversary(age)) continue;
    console.log(names[i] + " has anniversary (" + age + ")");
}


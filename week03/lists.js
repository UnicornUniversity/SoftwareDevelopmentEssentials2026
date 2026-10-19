const list = [45, 6, 7, 78];

// lists are 0-based (index starts with 0)
for (let i = 0; i <= 3; i++) {
    console.log("index = " + i + "; value = " + list[i]);
}
console.log("-------------------");
// incorrect: index = 4; value = undefined
for (let i = 0; i <= list.length; i++) {
    console.log("index = " + i + "; value = " + list[i]);
}

console.log("-------------------");
for (let i = 0; i < list.length; i++) {
    console.log("index = " + i + "; value = " + list[i]);
}

console.log("-------------------");

const list1 = ["John", "Mary"];
const list2 = ["Peter", "Greg"];

list1.push("Josh");
console.log(list1);

// wrong approach: the list is added as a new item
//const mergedListWrong = list1.push(list2);

const mergedListCorrect = [...list1, ...list2];
console.log(...mergedListCorrect);



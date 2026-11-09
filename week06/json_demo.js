// JSON = JS object notation
// not convenient
const ind1 = ["John" , "Smith", 1990];

const ind2 = {
    "name": "John",
    "surname" : "Smith",
    "year": 1990,
    "32property" : 89,
    "address": {
        "country": "Czech Republic",
        "city": "Prague",
    }
}

console.log(ind2["name"]);
console.log(ind2["address"]["city"]);
console.log(ind2["32property"]);

// dot notation
console.log(ind2.name);
// console.log(ind2.32property);
console.log(ind2.address.city);
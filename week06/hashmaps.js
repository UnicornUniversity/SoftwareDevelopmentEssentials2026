const cache = {};

// key - value
cache["John"] = 27;
cache["Mary"] = 35;

// 20 is not an index, but key
cache[20] = "something";

console.log("John's age is " + cache["John"]);
console.log(cache[20]);




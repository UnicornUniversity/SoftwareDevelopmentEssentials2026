const K_SQUARE_CANS = 2; // 2 cans for each 1m2

function getArea(w, h) {
    return w * h;
}

function calcNumberOfCans(area, k) {
    return area * k;
}

const dragonParts = [[2, 3], [5, 4], [1, 3]];

// way 1
let totalArea = 0;
for (const part of dragonParts) {
    const width = part[0];
    const height = part[1];
    const area = getArea(width, height);
    totalArea += area;
}

console.log("# cans = " + calcNumberOfCans(totalArea, K_SQUARE_CANS));

// way 2
// chaining of high-order functions
// declarative approach: expressing desired state
const totalAreaAfterReduce =
    dragonParts
    .map((item) => getArea(item[0], item[1]))
    .reduce((currentArea, area) => currentArea + area);

console.log("# cans = " + calcNumberOfCans(totalAreaAfterReduce, K_SQUARE_CANS));
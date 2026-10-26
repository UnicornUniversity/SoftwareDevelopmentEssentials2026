const componentsForBorscht = ["beets", "carrot", "potato"];
const componentsForAnotherDish = ["potato", "meet"];

// this is a not-pure function
function boil(component){
    // this is a side effect
    console.log(component + " is boiled");
}

function fry(component){
    console.log(component + " is fried");
}

function cookBorscht(components){
    console.log("--- cooking borscht.... ------");

    for (const component of components) {
        boil(component);
    }

    for (const component of components) {
        fry(component);
    }

    console.log("--- completed! ------");
}

function cookAnotherDish(components){
    console.log("--- cooking another dish.... ------");

    for (const component of components) {
        fry(component);
    }

    console.log("--- completed! ------");
}

console.log("--- serving lunch... ------");

cookBorscht(componentsForBorscht);
cookAnotherDish(componentsForAnotherDish);

console.log("--- bon appetit! ------");

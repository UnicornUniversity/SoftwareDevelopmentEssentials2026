// numbers from 1..100
// anytime print the number
// if a number can divided on 3, print "fizz"
// if a number can divided on 5, print "buzz"
// if a number can divided on 3 and 5, print "fizzbuzz"

for (let i = 1; i <= 100; i++) {

    let s = i.toString() + " : ";

    //if (i % 3 === 0) s = s + "fizz";
    //if (i % 5 === 0) s = s + "buzz";

    if (i % 3 === 0) s += "fizz"; // -=
    if (i % 5 === 0) s += "buzz";

    console.log(s);
}
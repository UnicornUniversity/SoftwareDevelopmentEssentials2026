function isPalindrome(word) {
    if (word.length === 0) return true;

    let totalNumberOfIteration = 0;
    let start = performance.now();
    let result = true;

    let p0 = 0;
    let p1 = word.length - 1;

    while (p0 <= p1) {
        totalNumberOfIteration++;
        const letter1 = word[p0];
        const letter2 = word[p1];

        if (letter1 !== letter2) {
            result = false;
            break;
        }

        p0++;
        p1--
    }

    const timeTaken = performance.now() - start;

    return {result, timeTaken, totalNumberOfIteration};
}

function checkResult(word) {
    const result = isPalindrome(word);
    console.log(word.substring(0, 2) + " >> " + result.result + " (" + result.totalNumberOfIteration + " | " + result.timeTaken + " ms)");
}

checkResult(PALINDROME);
checkResult(NOT_PALINDROME);
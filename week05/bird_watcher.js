// basic

function getTodayCount(days) {
    return days.length > 0 ? days[days.length - 1] : 0;
}

function incToday(days) {
    const latestDay = getTodayCount(days);
    return latestDay + 1; // not latestDay++;
}

function dayWithoutBirds(days) {
    let result = false;

    for (const birdsCount of days) {
        if (parseInt(birdsCount) === 0) {
            result = true;
            break;
        }
    }

    return result;
}

function dayWithoutBirdsPredicate(days) {
    return days.some((birdsCount) => birdsCount === 0);
}

function busyDays(days) {
    let result = 0;

    for (const birdsCount of days) {
        if (birdsCount >= BUSY_DAY_MEANING) result++;
    }

    return result;
}

function busyDaysPredicate(days) {
    return days
        .filter((birdsCount) => birdsCount >= BUSY_DAY_MEANING)
        .length;
}

// advanced
function nDaysCount(days, numberOfDays) {
    return days
        .reduce((totalNumberOfBirds, birdsAtThisDay, currentIndex) => currentIndex <= numberOfDays - 1 ? totalNumberOfBirds + birdsAtThisDay : totalNumberOfBirds);
}

function averageNumber(days) {
    let sumOfVisits = 0;
    let daysCount = 0;

    for (const birdsCount of days) {
        if (birdsCount === 0) continue;

        sumOfVisits += birdsCount;
        daysCount++;
    }

    return daysCount > 0 ? sumOfVisits / daysCount : 0;
}

function averageNumberPredicate(days) {
    const daysWithVisits = days.filter((birdsCount) => birdsCount > 0);
    const sum = daysWithVisits.reduce((sum, birdsVisits) => sum + birdsVisits)
    return daysWithVisits.length > 0 ? sum / daysWithVisits.length : 0;
}

const BUSY_DAY_MEANING = 5; // birds or more
const days = [0, 2, 5, 3, 7, 8, 4]; // 7 days; 29

console.log("birds number for today = " + getTodayCount(days));
console.log("inc today = " + incToday(days));
console.log("days without birds (1) = " + dayWithoutBirds(days));
console.log("days without birds (2) = " + dayWithoutBirdsPredicate(days));
console.log("busy days number (1) = " + busyDays(days));
console.log("busy days number (2) = " + busyDaysPredicate(days));
console.log("nDaysCount = " + nDaysCount(days, 3));
console.log("averageNumber (1) = " + averageNumber(days));
console.log("averageNumber (2) = " + averageNumberPredicate(days));

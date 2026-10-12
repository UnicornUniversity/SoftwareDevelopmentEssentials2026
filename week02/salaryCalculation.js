// ---- global const declaration -------
const WEEKS_IN_YEAR = 52;
const HOUR_RATE = 1200; // CZK
const HOURS_PER_DAY = 8;
const DAYS_PER_WEEK = 5;
const TAX_RATE = 0.15; // 15%

// ---------------------------------------

const hoursPerWeek = HOURS_PER_DAY * DAYS_PER_WEEK;
const hoursPerYear = hoursPerWeek * WEEKS_IN_YEAR;
const grossAmountPerYear = hoursPerYear * HOUR_RATE;

console.log("gross salary per year = " + grossAmountPerYear + " CZK");

const taxAmount = grossAmountPerYear * TAX_RATE;

console.log("tax to be paid = " + taxAmount + " CZK");

const netAmountPerYear = grossAmountPerYear - taxAmount;

console.log("net salary per year = " + netAmountPerYear + " CZK");

const netAmountPerMonth = netAmountPerYear / 12;

console.log("net salary per month = " + netAmountPerMonth + " CZK");

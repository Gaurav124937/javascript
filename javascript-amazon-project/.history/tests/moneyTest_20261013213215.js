import { formatCurrency } from "../js/utils/money.js";

//BASIC CASE
console.log("convert cents to dollar");
if (formatCurrency(2095) === "20.95") {
    console.log("passed");
}
else {
    console.log("failed");
}

//EDGE CASE
console.log("works with 0");
if (formatCurrency(0) === "0.00") {
    console.log("passed");
}
else {
    console.log("failed");
}

console.log("round up to nearset cents");
if (formatCurrency(2000.5) === "20.01") {
    console.log("passed");
}
else {
    console.log("failed");
}
if (formatCurrency(2000.4) === "20.00") {
    console.log("passed");
}
else {
    console.log("failed");
}
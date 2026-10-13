import {fromatCurrency} from "../js/utils/money.js";

if(fromatCurrency(2095) === "20.95"){
    console.log("passed");
}
else{
    console.log("failed");
}
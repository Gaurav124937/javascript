import {fromatcurrency} from "../js/utils/money.js";

if(fromatcurrency(2095) === "20.95"){
    console.log("passed");
}
else{
    console.log("failed");
}
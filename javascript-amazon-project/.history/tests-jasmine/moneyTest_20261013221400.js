import { formatCurrency } from "../js/utils/money.js";

describe('test suite : formatCurrency',()=>{
    it('convert cents to dollar',()=>{
        except(formatCurrency(2095)).toEqual('20.95');
    });
});
import { formatCurrency } from "../js/utils/money.js";

describe('test suite : formatCurrency',()=>{
    it('convert cents to dollar',()=>{
        expect(formatCurrency(2095)).toEqual('20.95');
    });
});
angular.module('finance2', [])
    .factory('currencyConverter', ()=> {
        let currencies = ['USD', 'EUR', 'CNY'];
        let usdToForeignRates = {
            USD: 1,
            EUR: 0.74,
            CNY: 6.09
        };
        var convert = (amount, inCurr, outCurr)=> {
            return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
        };

        return {
            currencies: currencies,
            convert: convert
        };
    });
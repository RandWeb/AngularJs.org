angular.module('invoice3', ['finance3'])
    .controller('InvoiceController', ['currencyConverter', function InvoiceController(currencyConverter) {
        this.qty = 1;
        this.cost = 2;
        this.inCurr = 'EUR';
        this.currencies = currencyConverter.currencies;

        this.total = (outCurr)=> {
            return currencyConverter.convert(this.qty * this.cost, this.inCurr, outCurr);
        };
        this.pay = ()=> {
            window.alert('Thanks!');
        };
    }]);
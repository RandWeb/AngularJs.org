angular.module('finance3', [])
    .factory('currencyConverter', [() =>{
            let currencies = ['USD', 'EUR', 'CNY'];
            let usdToForeignRates = {};
            var convert = (amount, inCurr, outCurr) => {
                return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
            };
            let refresh = () => {
                let myHeaders = new Headers();
                myHeaders.append("apikey", "iDHBT4PsnE0blrBzv4u9mGHrfErdYbsM");

                let requestOptions = {
                    method: 'GET',
                    redirect: 'follow',
                    headers: myHeaders
                };
                let url = 'https://api.apilayer.com/exchangerates_data/latest?&base=USD&base='+currencies.join(",");
                fetch(url, requestOptions)
                    .then(response =>
                        {
                            usdToForeignRates = response.data.rates;
                            usdToForeignRates['USD'] = 1;
                        }
                    )
                    .catch(error => console.log('error', error));
            }
            refresh();
            return {
                currencies: currencies,
                convert: convert
            };
        }
    ]);
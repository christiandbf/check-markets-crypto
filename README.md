# check-markets-crypto

Check conditions against exchanges available in [ccxt](https://github.com/ccxt/ccxt) module.

## Installation

### NPM

```bash
$ npm install check-markets-crypto
```

## Example

```javascript
const controller = require('check-markets-crypto')

let obj = {
  "exchanges": [
    {
      "name": 'bittrex',
      "period": 1000,
      "checkers": [
        {
          'name': 'test-1-bittrex',
          'condition': (lastTicker, currentTicker) => currentTicker.symbol === 'BTC/USDT',
          'update': (lastTicker, currentTicker) => currentTicker,
          'do': data => console.log(data)
        },
        {
          'name': 'test-2-bittrex',
          'condition': (lastTicker, currentTicker) => currentTicker.symbol === 'BCH/USDT',
          'update': (lastTicker, currentTicker) => currentTicker,
          'do': data => console.log(data)
        }
      ],
      "error": function (error) {
        console.log(error)
        this.getTickers()
      }
    },
    {
      "name": 'poloniex',
      "period": 1000,
      "checkers": [
        {
          'name': 'test-1-poloniex',
          'condition': (lastTicker, currentTicker) => currentTicker.symbol === 'BTC/USDT',
          'update': (lastTicker, currentTicker) => currentTicker,
          'do': data => console.log(data)
        },
        {
          'name': 'test-2-poloniex',
          'condition': (lastTicker, currentTicker) => currentTicker.symbol === 'BCH/USDT',
          'update': (lastTicker, currentTicker) => currentTicker,
          'do': data => console.log(data)
        }
      ],
      "error": function (error) {
        console.log(error)
        this.getTickers()
      }
    }
  ]
}

controller(obj)
```

## Use

The module is a fuction which you pass a array of objects, each object must have the following properties:

* "name": Exchange ID defined in ccxt module, [click](https://github.com/ccxt/ccxt/wiki/Exchange-Markets-By-Country) to see the exchanges avaible and their ID´s.
* "period": Time to wait before make another REST request to the exchange (milliseconds).
* "checkers": Array of objects which you use to define conditions to check, below you will find an explanation to this.
* "error": Error handler, when the request could not work you receive an error here. So you can decide what to do, and **if you want to still making request you execute "this.getTickers()"**.

The properties of a checker object is the following:

* "name": This name is to identify the condition used to check in the data received in "do" method, because you can have an array of them.
* "condition": Condition to check against the tickers - You receive two tickers (last and current) to check.
* "update": Function to decide which ticker must be the last - You receive two tickers (last and current) to decide.
* "do": You receive here the tickers who accomplish the condition.

To check if the market accomplish a condition you need two tickers. Usually lastTicker is taken in a previous time than currentTicker, but you can decide which must be the lastTicker in a update method. **In every ticker you receive the information of all markets in the exchange**. In the ccxt [documentation](https://github.com/ccxt/ccxt/wiki/Manual#api-methods--endpoints) you can see how it is strutured the tickers and how it works on the exchange, the method used is "fetchTickers".


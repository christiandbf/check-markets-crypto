const controller = require('../index')

let obj = {
  'exchanges': [
    {
      'name': 'bittrex',
      'period': 1000,
      'checkers': [
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
      'error': function (error) {
        console.log(error)
        this.getTickers()
      }
    },
    {
      'name': 'poloniex',
      'period': 1000,
      'checkers': [
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
      'error': function (error) {
        console.log(error)
        this.getTickers()
      }
    }
  ]
}

controler(obj)

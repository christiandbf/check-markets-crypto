const exchangesFactory = require('./exchanges-factory')
const checkerFactory = require('./checkers-factory')

let controller = (obj) => {
  let result = []
  obj.exchanges.forEach((exchangeConfig) => {
    let exchange = exchangesFactory(exchangeConfig.name)

    exchangeConfig.checkers.forEach((checkerConfig) => {
      checkerConfig.exchange = exchangeConfig.name
      let checker = checkerFactory(checkerConfig)
      exchange.on('tickers', tickers => checker.check(tickers))
    })

    exchange.on('tickers', function (tickers) {
      setTimeout(() => {
        this.getTickers()
      }, exchangeConfig.period)
    })

    exchange.on('error', exchangeConfig.error)

    result.push(exchange)

    exchange.getTickers()
  })
  return result
}

module.exports = controller

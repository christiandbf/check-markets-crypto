class Checker {
  constructor (args) {
    this._tickers = null
    this._name = args.name
    this._exchange = args.exchange
    this._condition = args.condition
    this._update = args.update
    this._do = args.do
  }

  check (tickers) {
    if (!this._tickers) {
      this._tickers = tickers
    } else {
      let result = []
      let newTickers = []
      this._tickers.forEach((lastTicker) => {
        let currentTicker = tickers.find((ticker) => ticker.symbol === lastTicker.symbol)
        if (this._condition(lastTicker, currentTicker)) result.push({ 'last': lastTicker, 'current': currentTicker })
        newTickers.push(this._update(lastTicker, currentTicker))
      })
      this._tickers = newTickers
      if (result.length > 0) this._do({ name: this._name, exchange: this._exchange, result })
    }
  }
}

module.exports = (args) => new Checker(args)

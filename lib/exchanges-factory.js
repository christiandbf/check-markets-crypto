const ccxt = require('ccxt')
const EventEmitter = require('events')

class Exchange extends EventEmitter {
  constructor (id) {
    super()
    this._exchange = new ccxt[id]()
  }

  getTickers () {
    this._exchange.fetchTickers()
      .then(response => this.emit('tickers', Object.values(response)))
      .catch(response => this.emit('error', response))
  }
}

let exchangesFactory = (id) => (new Exchange(id))

module.exports = exchangesFactory

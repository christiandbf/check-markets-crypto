const assert = require('assert')
const exchangesFactory = require('../lib/exchanges-factory')

const exchangesID = ['bittrex', 'bitfinex', 'poloniex', 'cryptopia', 'binance', 'hitbtc']

describe('Module exchanges-factory', function () {
  it('Creating exchanges', function () {
    exchangesID.forEach((exchangeID) => assert.ok(exchangesFactory(exchangeID)))
  })
  it('Getting tickers Bittrex', function (done) {
    this.timeout(10000)
    let exchange = exchangesFactory('bittrex')
    exchange.on('tickers', (tickers) => {
      Array.isArray(tickers)
        ? done()
        : done(new Error('Tickers is not an array'))
    })
    exchange.on('error', (error) => done(error))
    exchange.getTickers()
  })
  it('Getting tickers Bitfinex', function (done) {
    this.timeout(10000)
    let exchange = exchangesFactory('bitfinex')
    exchange.on('tickers', (tickers) => {
      Array.isArray(tickers)
        ? done()
        : done(new Error('Tickers is not an array'))
    })
    exchange.on('error', (error) => done(error))
    exchange.getTickers()
  })
  it('Getting tickers Poloniex', function (done) {
    this.timeout(10000)
    let exchange = exchangesFactory('poloniex')
    exchange.on('tickers', (tickers) => {
      Array.isArray(tickers)
        ? done()
        : done(new Error('Tickers is not an array'))
    })
    exchange.on('error', (error) => done(error))
    exchange.getTickers()
  })
  it('Getting tickers Cryptopia', function (done) {
    this.timeout(10000)
    let exchange = exchangesFactory('cryptopia')
    exchange.on('tickers', (tickers) => {
      Array.isArray(tickers)
        ? done()
        : done(new Error('Tickers is not an array'))
    })
    exchange.on('error', (error) => done(error))
    exchange.getTickers()
  })
  it('Getting tickers Binance', function (done) {
    this.timeout(10000)
    let exchange = exchangesFactory('binance')
    exchange.on('tickers', (tickers) => {
      Array.isArray(tickers)
        ? done()
        : done(new Error('Tickers is not an array'))
    })
    exchange.on('error', (error) => done(error))
    exchange.getTickers()
  })
  it('Getting tickers Hitbtc', function (done) {
    this.timeout(10000)
    let exchange = exchangesFactory('hitbtc')
    exchange.on('tickers', (tickers) => {
      Array.isArray(tickers)
        ? done()
        : done(new Error('Tickers is not an array'))
    })
    exchange.on('error', (error) => done(error))
    exchange.getTickers()
  })
})

const assert = require('assert')
const fs = require('fs')
const checkersFactory = require('../lib/checkers-factory')

let tickers = JSON.parse(fs.readFileSync('./test/tickers/tickers.json', 'utf8'))
let tickers2 = JSON.parse(fs.readFileSync('./test/tickers/tickers-2.json', 'utf8'))

describe('Module checkers-factory', function () {
  it('Creating checker', function () {
    assert.ok(checkersFactory({
      'name': null,
      'exchange': null,
      'condition': null,
      'update': null,
      'do': null
    }))
  })
  it('Proving check method', function () {
    let checker = checkersFactory({
      'name': 'test',
      'exchange': 'test',
      'condition': (lastTicker, currentTicker) => currentTicker.symbol === 'BTC/USDT',
      'update': (lastTicker, currentTicker) => currentTicker,
      'do': data => {
        assert.ok(
          data.name === 'test' &&
          data.exchange === 'test' &&
          data.result.length === 1 &&
          data.result[0].last.symbol === 'BTC/USDT' &&
          data.result[0].current.symbol === 'BTC/USDT'
        )
      }
    })
    checker.check(tickers)
    checker.check(tickers)
  })
  it('Proving update method', function () {
    let checker = checkersFactory({
      'name': 'test',
      'exchange': 'test',
      'condition': (lastTicker, currentTicker) => true,
      'update': (lastTicker, currentTicker) => currentTicker,
      'do': data => {
        tickers2.forEach((ticker, index) => {
          assert.ok(ticker.last == checker._tickers[index].last)
        })
      }
    })
    checker.check(tickers)
    checker.check(tickers2)
  })
})

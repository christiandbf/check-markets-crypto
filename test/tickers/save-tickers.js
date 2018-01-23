const fs = require('fs')
const exchangesFactory = require('../../lib/exchanges-factory')

let bittrex = exchangesFactory('bittrex')

bittrex.on('tickers', (tickers) => {
  fs.writeFile('./tickers.json', JSON.stringify(tickers, null, 2), (err) => {
    if (err) throw err
    console.log('The tickers has been saved')
  })
})

bittrex.on('error', (error) => {
  throw error
})

bittrex.getTickers()

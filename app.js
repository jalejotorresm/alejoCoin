const Block = require('./block')
const BlockChain = require('./blockchain')
const Transaction = require('./transactions')

let alejoCoin = new BlockChain()

alejoCoin.createTransaction(new Transaction('address1', 'address2', 100))
alejoCoin.createTransaction(new Transaction('address2', 'address1', 50))

console.log('\nComienza el minado')
alejoCoin.minePendingTransactions('alejo-address')

console.log('Balance of alejo is ', alejoCoin.getBalanceOfAddress('alejo-address'))

console.log('\nComienza el minado')
alejoCoin.minePendingTransactions('alejo-address')

console.log('Balance of alejo is ', alejoCoin.getBalanceOfAddress('alejo-address'))


// console.log('Minando Bloque 1...')
// alejoCoin.addBlock(new Block(1, "10/09/2018", { amount: 4 }))

// console.log('Minando Bloque 2...')
// alejoCoin.addBlock(new Block(2, "12/09/2018", { amount: 20 }))

// console.log(alejoCoin.isChainValid())

// alejoCoin.chain[1].data = { amount: 100 }
// alejoCoin.chain[1].hash = alejoCoin.chain[1].calculateHash()

// console.log(alejoCoin.isChainValid())

console.log(JSON.stringify(alejoCoin, null, 4))
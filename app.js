const Block = require('./block')
const BlockChain = require('./blockchain')

let alejoCoin = new BlockChain()
alejoCoin.addBlock(new Block('02/01/2022', {quantity: 15}))
alejoCoin.addBlock(new Block('03/01/2022', {quantity: 25}))
alejoCoin.addBlock(new Block('04/01/2022', {quantity: 35}))

console.log(JSON.stringify(alejoCoin, null, 4))
const Block = require('./block')
const Transaction = require('./transactions')

class BlockChain {

    constructor() {
        this.chain = [this.createGenesisBlock()]
        this.difficulty = 4
        this.pendingTransactions = []
        this.miningReward = 100
    }

    createGenesisBlock() {
        return new Block('01/01/2018', 'Genesis Block', '0')
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1]
    }

    minePendingTransactions(miningRewardAddress) {
        let block = new Block(Date.now(), this.pendingTransactions)
        block.previousHash = this.getLatestBlock().hash
        block.mineBlock(this.difficulty)

        console.log('Block successfully mined')
        this.chain.push(block)

        this.pendingTransactions = [
            new Transaction(null, miningRewardAddress, this.miningReward)
        ]
    }

    createTransaction(transaction) {
        this.pendingTransactions.push(transaction)
    }

    getBalanceOfAddress(address) {
        let balance = 0
        for (const block of this.chain) {
            for (const trans of block.transactions) {
                if (trans.fromAddress === address) {
                    balance -= trans.amount
                }

                if (trans.toAddress === address) {
                    balance += trans.amount
                }
            }
        }
        return balance
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i]
            const previousBlock = this.chain[i - 1]

            // El hash del bloque no es válido
            if (currentBlock.hash != currentBlock.calculateHash()) {
                return false
            }

            // Comprobamos si apunta al anterior
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false
            }
        }
        return true
    }

}

module.exports = BlockChain
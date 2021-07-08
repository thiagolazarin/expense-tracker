const transaction = require("../models/transaction")
const transactionModel = require("../models/transaction")

const registerTransaction = async(tipo, valor, categoriaId) => {
    if(!tipo || !valor || !categoriaId){
        return 'missing information'
    }

    const data = Date()

    await transactionModel.registerTransaction(tipo, data, valor, categoriaId)


} 

module.exports = {registerTransaction};
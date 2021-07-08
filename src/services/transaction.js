// SERVICE

// Regras de negocios

const transaction = require("../models/transaction")
const transactionModel = require("../models/transaction")

const { ApplicationError } = require ('@pedromiotti/exerror');
const customExceptions = require('../exceptions/customExceptions');

const registerTransaction = async(tipo, valor, categoriaId) => {
    if(!tipo || !valor || !categoriaId){
        throw new ApplicationError(customExceptions.MISSING_INFORMATION);
    }

    await transactionModel.registerTransaction(tipo, valor, categoriaId)

} 

const getAllTransactions = async() => {

    return await transactionModel.getAllTransactions();

}


module.exports = { registerTransaction, getAllTransactions };








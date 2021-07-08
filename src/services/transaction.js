// SERVICE

// Regras de negocios

const transaction = require("../models/transaction")
const transactionModel = require("../models/transaction")

const { ApplicationError } = require ('@pedromiotti/exerror');
const customExceptions = require('../exceptions/customExceptions');

const registerTransaction = async(tipo, valor, categoriaId) => {
    try {
        
        if(!tipo || !valor || !categoriaId){
            throw new ApplicationError(customExceptions.MISSING_INFORMATION);
        }

        await transactionModel.registerTransaction(tipo, valor, categoriaId)
    } catch (error) {
        throw new ApplicationError(error);
    }

} 

const getAllTransactions = async() => {
    try {
        
        return await transactionModel.getAllTransactions();
        
    } catch (error) {
        throw new ApplicationError(error);
    }

}


module.exports = { registerTransaction, getAllTransactions };








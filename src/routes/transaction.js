// ROUTES

const express = require("express");
const router  = express.Router();
const servicesTransaction = require("../services/transaction")

// --> Register transaction
router.post("/", async(req, res, next) => {
    try {
        const {tipo, valor, categoriaId} = req.body;
        await servicesTransaction.registerTransaction(tipo, valor, categoriaId);

        res.status(201).send("Transacao criada !");

    } catch (error) {
        next(error);
    }
})

// --> Get all transactions
router.get("/", async(req, res) => {
    try {

        let transacoes;
        transacoes = await servicesTransaction.getAllTransactions();
        
        res.status(200).send(transacoes);
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;


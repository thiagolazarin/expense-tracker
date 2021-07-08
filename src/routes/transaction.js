const express = require("express");
const router  = express.Router();
const servicesTransaction = require("../services/transaction")

router.post("/", async(req, res) => {
    try {
        const {tipo, valor, categoriaId} = req.body
        await servicesTransaction.registerTransaction(tipo, valor, categoriaId)
    } catch (error) {
        
    }
})

router.get("/", async(req, res) => {
    res.send("thiago é forte")
})

module.exports = router;

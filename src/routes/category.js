// ROUTES 

const express = require("express");
const router = express.Router();
const servicesCategorys = require("../services/category");

// --> Register category
router.post("/", async(req, res, next) => {
    try {

        const { icon_id, nome } = req.body;
        await servicesCategorys.registerCategory(nome, icon_id);
        res.status(201).send("Categoria criada !");

    } catch (error) {
        next(error);
    }
})

// --> Get all categories
router.get("/", async(req, res) => {
    try {
        let categorias;
        categorias = await servicesCategorys.getAllCategorys();
        res.status(200).send(categorias);
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
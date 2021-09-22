//sintaxe para importar do node
const express = require("express");
const { errorHandler } = require('@pedromiotti/exerror');

const Transaction = require("./routes/transaction");
const Category = require("./routes/category");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 4000;

// CONFIG
// Express body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin: 'http://localhost:3000'}))


app.use("/api/v1/transaction", Transaction);
app.use("/api/v1/category", Category);

app.use(errorHandler);

app.listen(PORT, () => { 
    console.log("Servidor ok!")
})






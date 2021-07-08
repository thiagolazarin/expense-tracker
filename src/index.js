//sintaxe para importar do node
const express = require("express");
const Transaction = require("./routes/transaction");
//const Category = require("./routes/category");
const app = express();
const PORT = process.env.PORT || 3000

// CONFIG
// Express body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/transaction", Transaction);
//app.use("/api/v1/category", Category);

app.listen(PORT, () => {console.log("Servidor ok!")})




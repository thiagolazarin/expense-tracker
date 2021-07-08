// MODELS

// Conversas com o banco de dados

const Sql = require("../infra/sql");

class Transaction {
  constructor(tipo, valor, categoriaId, id, data) {
    this.id = id;
    this.data = data;
    this.categoriaId = categoriaId;
    this.valor = valor;
    this.tipo = tipo;
  }

  static async registerTransaction(
    tipo_transasao,
    transasao_valor,
    categoriaId
  ) {
    let resp = await Sql.conectar(async (sql) => {
      await sql.query(
        "insert into transasao (tipo_transasao, tran_data, tran_valor, cat_id) values (?, now(), ?, ?)",
        [tipo_transasao, transasao_valor, categoriaId]
      );
    });
  }

  static async getAllTransactions() {
    let transacoes = [];

    await Sql.conectar(async (sql) => {
      transacoes = await sql.query("SELECT * FROM transaeo");
    });

    return transacoes;
  }
}

<<<<<<< HEAD
module.exports = Transaction;
=======
module.exports = Transaction;
>>>>>>> d0bb0a7e9c6a3a33add27afdd9350c7747fcf7bb

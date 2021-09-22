// MODELS

// Conversas com o banco de dados

const Sql = require("../infra/sql");

class Transaction {
  constructor(tipo, valor, categoriaId, id, data, descricao) {
    this.id = id;
    this.descricao = descricao;
    this.data = data;
    this.categoriaId = categoriaId;
    this.valor = valor;
    this.tipo = tipo;
  }

  static async registerTransaction(
    tipo_transasao,
    transasao_valor,
    categoriaId,
    data,
    descricao
  ) {
    try{
      await Sql.conectar(async (sql) => {
        await sql.query(
            "insert into transasao (tipo_transasao_id, tran_data, descricao, tran_valor, cat_id) values (?, ?, ?, ?, ?)",
            [ tipo_transasao,data, descricao, transasao_valor, categoriaId ]
        );
      });
    }
    catch (e) {
      console.log(e);
    }
  }

  static async getAllTransactions() {
    let transacoes = [];

    try{
      await Sql.conectar(async (sql) => {
        transacoes = await sql.query("SELECT * FROM transasao");
      });
      return transacoes;

    }

    catch (e) {
      console.log(e);
    }
  }
}

module.exports = Transaction;

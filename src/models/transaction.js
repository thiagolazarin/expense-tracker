// MODELS

// Conversas com o banco de dados

const Sql = require("../infra/sql")

class Transaction {

    constructor(tipo, valor, categoriaId, id, data){
        
        this.id = id;
        this.data = data;
        this.categoriaId = categoriaId;
        this.valor = valor;
        this.tipo  = tipo;

    }

    static async registerTransaction(tipo_transasao, transasao_valor, categoriaId){
        try {

            let resp = await Sql.conectar(async(sql) => {
                await sql.query("insert into transasao (tipo_transasao, tran_data, tran_valor, cat_id) values (?, now(), ?, ?)", [tipo_transasao, transasao_valor, categoriaId])
            });

        } catch (error) {
            console.log(error);
        }
    }

    static async getAllTransactions(){
        let transacoes = [];

        try {
            await Sql.conectar(async(sql) => {
                transacoes = await sql.query("SELECT * FROM transasao");
            })
            
        } catch (error) {
            console.log(e);
        }

        return transacoes;

    }

}

module.exports = Transaction;
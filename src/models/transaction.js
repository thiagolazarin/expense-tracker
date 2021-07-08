const Sql = require("../infra/sql")

class transaction {

    constructor(tipo, valor, categoriaId, id, data){
        
        this.id = id;
        this.data = data;
        this.categoriaId = categoriaId;
        this.valor = valor;
        this.tipo  = tipo;

    }

    static async registerTransaction(tipo_transasao, transasao_data, transasao_valor, categoriaId){

        try {
            
            await Sql.conectar(async(sql) => {

                await sql.query("insert into transasao (tipo_transasao, tran_data, tran_valor, cat_id) values (?, ?, ?, ?)", [tipo_transasao, transasao_data, transasao_valor, categoriaId])

            })

        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = transaction;
// MODELS 

// Conversas com o banco de dados

const Sql = require("../infra/sql")

class Category {

    constructor(nome, id){
        this.id = id;
        this.nome = nome;
    }

    static async registerCategory(nome){

        try {
            
            await Sql.conectar(async(sql) => {
                await sql.query("insert into categoria (cat_nome) values(?)", [nome]);
            })

        } catch (error) {
            console.log(error);
        }
    }
    static async getAllCategorys(){

        let categorias = [];

        try {
            
            await Sql.conectar(async(sql) => {
                categorias = await sql.query("SELECT * FROM categoria");
            })

        } catch (error) {
            console.log(e);
        }

        return categorias
    }
}

module.exports = Category;


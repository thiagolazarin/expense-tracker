// SERVICE

//Regras de negocios

const categoryModel = require("../models/category");

const {ApplicationError} = require("@pedromiotti/exerror");
const customExceptions = require("../exceptions/customExceptions");

const registerCategory = async(nome) => {
    if(!nome){
        throw new ApplicationError(customExceptions.MISSING_INFORMATION);
    }

    await categoryModel.registerCategory(nome);

}

const getAllCategorys = async() => {
    return await categoryModel.getAllCategorys();
}

module.exports = { registerCategory, getAllCategorys};
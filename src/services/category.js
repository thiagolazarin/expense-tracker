// SERVICE

//Regras de negocios

const categoryModel = require("../models/category");

const {ApplicationError} = require("@pedromiotti/exerror");
const customExceptions = require("../exceptions/customExceptions");

const registerCategory = async(nome, icon_id) => {
    if(!nome){
        throw new ApplicationError(customExceptions.MISSING_INFORMATION);
    }

    await categoryModel.registerCategory(nome, icon_id);

}

const getAllCategorys = async() => {
    return await categoryModel.getAllCategorys();
}

module.exports = { registerCategory, getAllCategorys};
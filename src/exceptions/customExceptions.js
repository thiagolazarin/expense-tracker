const { ERROR_TYPES } = require('@pedromiotti/exerror'); 

const CustomExceptions = {
    MISSING_INFORMATION: {
        type: ERROR_TYPES.CLIENT,
        code: "MISSING_INFORMATION",
        message: "Preencha todos os campos obrigatorios.",
        statusCode: 400,
    }
};

module.exports = CustomExceptions;
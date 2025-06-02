var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUsuario, nome, email,senha FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function quiz(correta, errado, fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n\n function quiz():", fkUsuario,  correta, errado);

    var instrucaoSql = `
        INSERT INTO resultado (result_certo, result_errado, fkUsuario)
        VALUES (${correta}, ${errado}, ${fkUsuario});
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function quiz_conhece(correta, errado, fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n\n function quiz_conhece():", fkUsuario,  correta, errado);

    var instrucaoSql = `
        INSERT INTO resultado (result_certo, result_errado, fkUsuario)
        VALUES (${correta}, ${errado}, ${fkUsuario});
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function quiz_curiosidade(correta, errado, fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n\n function quiz_curiosidade():", fkUsuario,  correta, errado);

    var instrucaoSql = `
        INSERT INTO resultado (result_certo, result_errado, fkUsuario)
        VALUES (${correta}, ${errado}, ${fkUsuario});
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    quiz,
    quiz_conhece,
    quiz_curiosidade
};
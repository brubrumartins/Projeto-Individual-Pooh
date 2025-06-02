var database = require("../database/config");

function buscarUltimasMedidasConhece(idResultado, limite_linhas) {

    var instrucaoSql = `SELECT u.nome as "Nome do Jogador(a)", r.result_certo as "Quantidade de acertos",
                         r.result_errado as "Quantidade de erros" from usuario u
                        join resultado r on r.fkUsuario = u.idUsuario;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasCuriosidade(idResultado, limite_linhas) {

    var instrucaoSql = `SELECT u.nome as "Nome do Jogador(a)", r.result_certo as "Quantidade de acertos",
                         r.result_errado as "Quantidade de erros" from usuario u
                        join resultado r on r.fkUsuario = u.idUsuario;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasBosque(idResultado, limite_linhas) {

    var instrucaoSql = `SELECT u.nome as "Nome do Jogador(a)", r.result_certo as "Quantidade de acertos",
                         r.result_errado as "Quantidade de erros" from usuario u
                        join resultado r on r.fkUsuario = u.idUsuario;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterDados() {

    var instrucaoSql = `SELECT resultado.result_certo, resultado.result_errado from resultado ORDER BY idResultado DESC limit 10 ;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    buscarUltimasMedidasConhece,
    buscarUltimasMedidasBosque,
    buscarUltimasMedidasCuriosidade,
    obterDados
}

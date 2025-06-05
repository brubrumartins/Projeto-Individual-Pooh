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

function obterDados(fkUsuario) {
    var instrucaoSql = `
        SELECT r.result_certo, r.result_errado 
        FROM resultado r
        JOIN usuario u ON r.fkUsuario = u.idUsuario
        WHERE r.fkUsuario = ${fkUsuario}
        ORDER BY r.idResultado DESC;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function kpiMacertos(fkUsuario) {

    var instrucaoSql = `SELECT SUM(result_certo) as qntAcerto, 
SUM(result_errado) as qntErro, COUNT(idResultado) as qntQuiz
 FROM resultado JOIN usuario ON resultado.fkUsuario = usuario.idUsuario
    WHERE resultado.fkUsuario = ${fkUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}





module.exports = {
    buscarUltimasMedidasConhece,
    buscarUltimasMedidasBosque,
    buscarUltimasMedidasCuriosidade,
    obterDados,
    kpiMacertos
   
}

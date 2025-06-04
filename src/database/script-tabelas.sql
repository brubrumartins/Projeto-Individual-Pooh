CREATE DATABASE pi_pooh;
USE pi_pooh;

CREATE TABLE usuario(
idUsuario INT PRIMARY KEY auto_increment,
nome VARCHAR(45),
email VARCHAR(100),
senha VARCHAR(45)
);



CREATE TABLE quiz(
idQuiz INT PRIMARY KEY,
nome VARCHAR(75)
);

CREATE TABLE resultado(
idResultado INT PRIMARY KEY auto_increment,
fkUsuario INT,
fkQuiz INT,
FOREIGN KEY (fkUsuario) references usuario (idUsuario),
FOREIGN KEY (fkQuiz) references quiz (idQuiz),
result_certo INT,
result_errado INT
);

INSERT INTO quiz VALUES
(1, 'Bosque dos cem acres'),
(2, 'Personagens que mais conhce'),
(3, 'Curiosidades');


SELECT usuario.nome as "Nome do Jogador(a)", resultado.result_certo as "Quantidade de acertos", resultado.result_errado as "Quantidade de erros" from usuario
join resultado on resultado.fkUsuario = usuario.idUsuario;


SELECT resultado.result_certo, resultado.result_errado from resultado;
 
SELECT resultado.result_certo, resultado.result_errado from resultado ORDER BY idResultado DESC limit 10 ;

SELECT resultado.result_certo, resultado.result_errado from resultado ORDER BY idResultado DESC limit 10 ;

-- SELECT SUM(resultado.result_certo), SUM(resultado.result_errado) from resultado ;


SELECT ROUND(AVG(result_certo), 2), usuario.idUsuario FROM resultado JOIN usuario on usuario.idUsuario = resultado.fkUsuario GROUP BY idUsuario;

SELECT ROUND(AVG(result_errado),2) from resultado;

SELECT COUNT(*) from resultado;


truncate table resultado;

select *  from resultado;
select *  from quiz;

select * from usuario;

SELECT ROUND(AVG(result_certo), 2) as mediaAcerto, 
ROUND(AVG(result_errado), 2) as mediaErro, COUNT(idResultado)
 FROM resultado JOIN usuario ON resultado.fkUsuario = usuario.idUsuario
    WHERE resultado.fkUsuario;

SELECT resultado.result_certo, resultado.result_errado, usuario.idUsuario from resultado JOIN usuario on resultado.fkUsuario = usuario.idUsuario;


SELECT ROUND(AVG(result_errado), 2) as mediaErro FROM resultado JOIN usuario ON resultado.fkUsuario = usuario.idUsuario
    WHERE resultado.fkUsuario

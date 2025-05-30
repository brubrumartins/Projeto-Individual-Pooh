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


SELECT u.nome as "Nome do Jogador(a)", r.result_certo as "Quantidade de acertos", r.result_errado as "Quantidade de erros" from usuario u
join resultado r on r.fkUsuario = u.idUsuario;

SELECT u.nome as "Nome do Jogador(a)", r.result_certo as "Quantidade de acertos", r.result_errado as "Quantidade de erros", q.idQuiz, q.nome  from usuario u
join resultado r on r.fkUsuario = u.idUsuario join quiz q on r.fkQuiz = q.idQuiz;



select *  from resultado;
select *  from quiz;

select * from usuario;


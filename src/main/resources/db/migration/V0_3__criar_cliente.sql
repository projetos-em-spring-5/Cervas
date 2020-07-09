CREATE TABLE cliente (
	codigo BIGINT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(80) NOT NULL,
	tipo_pessoa VARCHAR(15) NOT NULL,
	cpf_cnpj VARCHAR(30) NOT NULL,
	telefone VARCHAR(20),
	email VARCHAR(50) NOT NULL,
	logradouro VARCHAR(50),
	numero VARCHAR(15),
	complemento VARCHAR(50),
	cep VARCHAR(15),
	codigo_cidade BIGINT,
	FOREIGN KEY (codigo_cidade) REFERENCES cidade (codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
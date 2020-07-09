CREATE TABLE estilo (
	codigo BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE cerveja (
	codigo BIGINT PRIMARY KEY AUTO_INCREMENT,
    sku VARCHAR(50) NOT NULL,
    nome VARCHAR(80) NOT NULL,
    descricao TEXT NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    teor_alcoolico DECIMAL(10, 2) NOT NULL,
    comissao DECIMAL(10, 2) NOT NULL,
    sabor VARCHAR(50) NOT NULL,
    origem VARCHAR(50) NOT NULL,
    codigo_estilo BIGINT NOT NULL,
    quantidade_estoque INTEGER,
    foto VARCHAR(100),
    content_type VARCHAR(100),
    FOREIGN KEY (codigo_estilo) REFERENCES estilo(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO estilo(nome) VALUES ('Amber Lager');
INSERT INTO estilo(nome) VALUES ('Dark Lager');
INSERT INTO estilo(nome) VALUES ('Pole Lager');
INSERT INTO estilo(nome) VALUES ('Pilsner');

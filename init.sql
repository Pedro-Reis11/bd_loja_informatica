DROP DATABASE IF EXISTS loja_db;
CREATE DATABASE loja_db;
USE loja_db;

CREATE TABLE cliente (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telefone VARCHAR(20) NOT NULL
);

CREATE TABLE produto (
    id_produto INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(255),
    preco DECIMAL(10,2) NOT NULL,
    estoque INT NOT NULL
);

CREATE TABLE pedido (
    id_pedido INT PRIMARY KEY AUTO_INCREMENT,
    data_pedido DATE NOT NULL,
    valor_total DECIMAL(10,2),
    id_cliente INT NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
);

CREATE TABLE item_pedido (
    id_item_pedido INT PRIMARY KEY AUTO_INCREMENT,
    id_pedido INT NOT NULL,
    id_produto INT NOT NULL,
    quantidade INT NOT NULL,
    preco_unitario DECIMAL(10,2) NOT NULL,

    FOREIGN KEY (id_pedido) REFERENCES pedido(id_pedido),
    FOREIGN KEY (id_produto) REFERENCES produto(id_produto)
);

-- CLIENTES
INSERT INTO cliente (nome, email, telefone) VALUES
('Pedro Reis', 'pedro@email.com', '(31) 99999-1111'),
('Cauã Debattisti', 'cdb@email.com', '(31) 98888-2222'),
('Ryan Lage', 'ryan@email.com', '(31) 97777-3333'),
('Samuel Ferraz', 'samuca@email.com', '(31) 96666-4444');

-- PRODUTOS
INSERT INTO produto (nome, descricao, preco, estoque) VALUES
('Mouse Gamer', 'Mouse RGB 7200 DPI', 89.90, 50),
('Teclado Mecânico', 'Switch Blue ABNT2', 249.90, 30),
('Monitor 24"', 'Monitor Full HD 144Hz', 899.90, 15),
('Headset Gamer', 'Headset com microfone', 199.90, 25),
('SSD NVMe 1TB', 'Leitura 3500MB/s', 449.90, 20);

-- PEDIDOS
INSERT INTO pedido (data_pedido, valor_total, id_cliente) VALUES
('2026-08-01', 1229.70, 1),
('2026-08-02', 539.80, 2),
('2026-08-03', 899.90, 3),
('2026-08-04', 649.80, 4);

-- ITENS DOS PEDIDOS

-- Pedido 1 (Pedro)
INSERT INTO item_pedido (id_pedido, id_produto, quantidade, preco_unitario) VALUES
(1, 1, 2, 89.90),   -- 2 Mouse
(1, 3, 1, 899.90),  -- 1 Monitor
(1, 4, 1, 199.90);  -- 1 Headset

-- Pedido 2 (Cauã)
INSERT INTO item_pedido (id_pedido, id_produto, quantidade, preco_unitario) VALUES
(2, 2, 1, 249.90),  -- 1 Teclado
(2, 5, 1, 449.90);  -- 1 SSD

-- Pedido 3 (Ryan)
INSERT INTO item_pedido (id_pedido, id_produto, quantidade, preco_unitario) VALUES
(3, 3, 1, 899.90);  -- 1 Monitor

-- Pedido 4 (Samuel)
INSERT INTO item_pedido (id_pedido, id_produto, quantidade, preco_unitario) VALUES
(4, 2, 1, 249.90),  -- 1 Teclado
(4, 5, 1, 449.90);  -- 1 SSD
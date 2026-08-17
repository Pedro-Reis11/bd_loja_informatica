DROP DATABASE IF EXISTS loja_db;
CREATE DATABASE loja_db;
USE loja_db;

CREATE TABLE cliente (
    id_clienet INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    telefone VARCHAR(20)
);
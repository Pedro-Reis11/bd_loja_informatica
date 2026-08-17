# bd_loja_informatica

CONSULTAS SQL — BANCO loja_db
================================

Este arquivo contém consultas SQL para o banco de dados loja_db,
juntamente com a função de cada consulta.


==================================================
1. CONSULTAS BÁSICAS
==================================================

1.1 — Listar todos os clientes
------------------------------

SELECT * FROM cliente;

FUNÇÃO:
Mostra todos os clientes cadastrados na tabela cliente.


1.2 — Listar todos os produtos
------------------------------

SELECT * FROM produto;

FUNÇÃO:
Mostra todos os produtos cadastrados na tabela produto.


1.3 — Listar todos os pedidos
-----------------------------

SELECT * FROM pedido;

FUNÇÃO:
Mostra todos os pedidos cadastrados.


1.4 — Listar todos os itens dos pedidos
---------------------------------------

SELECT * FROM item_pedido;

FUNÇÃO:
Mostra todos os itens relacionados aos pedidos.


1.5 — Mostrar apenas nome e e-mail dos clientes
------------------------------------------------

SELECT
    nome,
    email
FROM cliente;

FUNÇÃO:
Mostra somente o nome e o e-mail de cada cliente.


1.6 — Mostrar nome e preço dos produtos
---------------------------------------

SELECT
    nome,
    preco
FROM produto;

FUNÇÃO:
Mostra o nome e o preço de cada produto.


==================================================
2. FILTRANDO DADOS COM WHERE
==================================================

2.1 — Produtos com preço maior que R$ 200
-----------------------------------------

SELECT *
FROM produto
WHERE preco > 200;

FUNÇÃO:
Mostra somente produtos cujo preço seja maior que R$ 200.


2.2 — Produtos com estoque menor que 30
---------------------------------------

SELECT *
FROM produto
WHERE estoque < 30;

FUNÇÃO:
Mostra produtos que possuem menos de 30 unidades em estoque.


2.3 — Clientes cujo nome começa com P
-------------------------------------

SELECT *
FROM cliente
WHERE nome LIKE 'P%';

FUNÇÃO:
Busca clientes cujo nome começa com a letra P.


2.4 — Produtos que possuem "Gamer" no nome
------------------------------------------

SELECT *
FROM produto
WHERE nome LIKE '%Gamer%';

FUNÇÃO:
Busca produtos que possuem a palavra "Gamer" em qualquer parte
do nome.


2.5 — Produtos entre R$ 200 e R$ 500
-------------------------------------

SELECT *
FROM produto
WHERE preco BETWEEN 200 AND 500;

FUNÇÃO:
Mostra produtos cujo preço está entre R$ 200 e R$ 500.


==================================================
3. ORDENANDO RESULTADOS COM ORDER BY
==================================================

3.1 — Produtos do mais barato para o mais caro
----------------------------------------------

SELECT *
FROM produto
ORDER BY preco ASC;

FUNÇÃO:
Ordena os produtos pelo preço em ordem crescente.

ASC = crescente.


3.2 — Produtos do mais caro para o mais barato
----------------------------------------------

SELECT *
FROM produto
ORDER BY preco DESC;

FUNÇÃO:
Ordena os produtos pelo preço em ordem decrescente.

DESC = decrescente.


3.3 — Clientes em ordem alfabética
----------------------------------

SELECT *
FROM cliente
ORDER BY nome ASC;

FUNÇÃO:
Ordena os clientes alfabeticamente pelo nome.


==================================================
4. LIMIT
==================================================

4.1 — Os 3 produtos mais caros
------------------------------

SELECT *
FROM produto
ORDER BY preco DESC
LIMIT 3;

FUNÇÃO:
Mostra somente os 3 produtos mais caros.


4.2 — Os 2 produtos mais baratos
--------------------------------

SELECT *
FROM produto
ORDER BY preco ASC
LIMIT 2;

FUNÇÃO:
Mostra somente os 2 produtos mais baratos.


==================================================
5. INNER JOIN
==================================================

5.1 — Mostrar pedidos e seus clientes
-------------------------------------

SELECT
    pedido.id_pedido,
    pedido.data_pedido,
    pedido.valor_total,
    cliente.nome
FROM pedido
INNER JOIN cliente
    ON pedido.id_cliente = cliente.id_cliente;

FUNÇÃO:
Relaciona cada pedido ao cliente que realizou o pedido.


5.2 — Mostrar os produtos de cada pedido
----------------------------------------

SELECT
    item_pedido.id_pedido,
    produto.nome,
    item_pedido.quantidade,
    item_pedido.preco_unitario
FROM item_pedido
INNER JOIN produto
    ON item_pedido.id_produto = produto.id_produto;

FUNÇÃO:
Mostra quais produtos pertencem a cada pedido,
suas quantidades e seus preços.


5.3 — Mostrar cliente, pedido e produto
---------------------------------------

SELECT
    cliente.nome AS cliente,
    pedido.id_pedido,
    produto.nome AS produto,
    item_pedido.quantidade,
    item_pedido.preco_unitario
FROM cliente
INNER JOIN pedido
    ON cliente.id_cliente = pedido.id_cliente
INNER JOIN item_pedido
    ON pedido.id_pedido = item_pedido.id_pedido
INNER JOIN produto
    ON item_pedido.id_produto = produto.id_produto;

FUNÇÃO:
Relaciona cliente, pedido e produto em uma única consulta.


==================================================
6. PEDIDOS DE CADA CLIENTE
==================================================

6.1 — Mostrar os pedidos de cada cliente
----------------------------------------

SELECT
    c.nome AS cliente,
    p.id_pedido AS pedido,
    p.data_pedido,
    p.valor_total
FROM cliente c
JOIN pedido p
    ON c.id_cliente = p.id_cliente
ORDER BY p.id_pedido ASC;

FUNÇÃO:
Mostra quais pedidos pertencem a cada cliente e
ordena os pedidos do menor para o maior ID.


==================================================
7. PEDIDOS E PRODUTOS
==================================================

7.1 — Mostrar os produtos de cada pedido
----------------------------------------

SELECT
    p.id_pedido,
    pr.nome AS produto,
    ip.quantidade,
    ip.preco_unitario
FROM pedido p
JOIN item_pedido ip
    ON p.id_pedido = ip.id_pedido
JOIN produto pr
    ON ip.id_produto = pr.id_produto
ORDER BY p.id_pedido ASC;

FUNÇÃO:
Mostra todos os produtos que pertencem a cada pedido.


7.2 — Produtos ordenados pela maior quantidade comprada
--------------------------------------------------------

SELECT
    p.id_pedido,
    pr.nome AS produto,
    ip.quantidade,
    ip.preco_unitario
FROM pedido p
JOIN item_pedido ip
    ON p.id_pedido = ip.id_pedido
JOIN produto pr
    ON ip.id_produto = pr.id_produto
ORDER BY ip.quantidade DESC;

FUNÇÃO:
Mostra os produtos dos pedidos e coloca primeiro os produtos
que possuem maior quantidade comprada.


7.3 — Pedidos em ordem e produtos pela maior quantidade
--------------------------------------------------------

SELECT
    c.nome AS cliente,
    p.id_pedido AS pedido,
    p.data_pedido,
    pr.nome AS produto,
    ip.quantidade,
    ip.preco_unitario
FROM cliente c
JOIN pedido p
    ON c.id_cliente = p.id_cliente
JOIN item_pedido ip
    ON p.id_pedido = ip.id_pedido
JOIN produto pr
    ON ip.id_produto = pr.id_produto
ORDER BY
    p.id_pedido ASC,
    ip.quantidade DESC;

FUNÇÃO:
Primeiro organiza os pedidos em ordem crescente.
Depois, dentro de cada pedido, coloca os produtos com
maior quantidade comprada primeiro.


==================================================
8. FUNÇÕES DE AGREGAÇÃO
==================================================

8.1 — Contar clientes
---------------------

SELECT COUNT(*) AS total_clientes
FROM cliente;

FUNÇÃO:
Conta quantos clientes existem.


8.2 — Contar produtos
---------------------

SELECT COUNT(*) AS total_produtos
FROM produto;

FUNÇÃO:
Conta quantos produtos existem.


8.3 — Encontrar o maior preço
-----------------------------

SELECT MAX(preco) AS maior_preco
FROM produto;

FUNÇÃO:
Retorna o maior preço entre os produtos.


8.4 — Encontrar o menor preço
-----------------------------

SELECT MIN(preco) AS menor_preco
FROM produto;

FUNÇÃO:
Retorna o menor preço entre os produtos.


8.5 — Calcular preço médio
--------------------------

SELECT AVG(preco) AS preco_medio
FROM produto;

FUNÇÃO:
Calcula o preço médio dos produtos.


8.6 — Calcular faturamento
--------------------------

SELECT SUM(valor_total) AS faturamento
FROM pedido;

FUNÇÃO:
Soma o valor de todos os pedidos.


==================================================
9. GROUP BY
==================================================

9.1 — Quanto cada cliente gastou
--------------------------------

SELECT
    cliente.nome,
    SUM(pedido.valor_total) AS total_gasto
FROM cliente
INNER JOIN pedido
    ON cliente.id_cliente = pedido.id_cliente
GROUP BY
    cliente.id_cliente,
    cliente.nome;

FUNÇÃO:
Agrupa os pedidos por cliente e calcula quanto cada cliente gastou.


9.2 — Quantidade de pedidos por cliente
---------------------------------------

SELECT
    cliente.nome,
    COUNT(pedido.id_pedido) AS quantidade_pedidos
FROM cliente
LEFT JOIN pedido
    ON cliente.id_cliente = pedido.id_cliente
GROUP BY
    cliente.id_cliente,
    cliente.nome;

FUNÇÃO:
Conta quantos pedidos cada cliente realizou.


9.3 — Quantidade vendida de cada produto
----------------------------------------

SELECT
    produto.nome,
    SUM(item_pedido.quantidade) AS quantidade_vendida
FROM produto
INNER JOIN item_pedido
    ON produto.id_produto = item_pedido.id_produto
GROUP BY
    produto.id_produto,
    produto.nome;

FUNÇÃO:
Calcula quantas unidades de cada produto foram vendidas.


==================================================
10. HAVING
==================================================

10.1 — Clientes que gastaram mais de R$ 600
-------------------------------------------

SELECT
    cliente.nome,
    SUM(pedido.valor_total) AS total_gasto
FROM cliente
INNER JOIN pedido
    ON cliente.id_cliente = pedido.id_cliente
GROUP BY
    cliente.id_cliente,
    cliente.nome
HAVING SUM(pedido.valor_total) > 600;

FUNÇÃO:
Mostra somente os clientes cujo gasto total ultrapassa R$ 600.


10.2 — Produtos vendidos mais de uma vez
----------------------------------------

SELECT
    produto.nome,
    SUM(item_pedido.quantidade) AS quantidade_vendida
FROM produto
INNER JOIN item_pedido
    ON produto.id_produto = item_pedido.id_produto
GROUP BY
    produto.id_produto,
    produto.nome
HAVING SUM(item_pedido.quantidade) > 1;

FUNÇÃO:
Mostra produtos cuja quantidade total vendida seja maior que 1.


==================================================
11. CONSULTAS MAIS ESPECÍFICAS
==================================================

11.1 — Pedido mais caro
-----------------------

SELECT *
FROM pedido
ORDER BY valor_total DESC
LIMIT 1;

FUNÇÃO:
Encontra o pedido de maior valor.


11.2 — Cliente que fez o pedido mais caro
-----------------------------------------

SELECT
    cliente.nome,
    pedido.id_pedido,
    pedido.valor_total
FROM cliente
INNER JOIN pedido
    ON cliente.id_cliente = pedido.id_cliente
ORDER BY pedido.valor_total DESC
LIMIT 1;

FUNÇÃO:
Descobre qual cliente realizou o pedido de maior valor.


11.3 — Produto mais vendido
---------------------------

SELECT
    produto.nome,
    SUM(item_pedido.quantidade) AS total_vendido
FROM produto
INNER JOIN item_pedido
    ON produto.id_produto = item_pedido.id_produto
GROUP BY
    produto.id_produto,
    produto.nome
ORDER BY total_vendido DESC
LIMIT 1;

FUNÇÃO:
Encontra o produto que teve a maior quantidade de unidades vendidas.


11.4 — Produtos nunca vendidos
------------------------------

SELECT
    produto.nome
FROM produto
LEFT JOIN item_pedido
    ON produto.id_produto = item_pedido.id_produto
WHERE item_pedido.id_produto IS NULL;

FUNÇÃO:
Mostra produtos que nunca apareceram em nenhum pedido.


==================================================
12. CÁLCULO DE SUBTOTAL
==================================================

12.1 — Calcular subtotal de cada item
-------------------------------------

SELECT
    produto.nome,
    item_pedido.quantidade,
    item_pedido.preco_unitario,
    item_pedido.quantidade * item_pedido.preco_unitario AS subtotal
FROM item_pedido
JOIN produto
    ON item_pedido.id_produto = produto.id_produto;

FUNÇÃO:
Calcula quanto cada item representa no pedido.

Exemplo:

quantidade = 2
preco_unitario = 89.90

2 × 89.90 = 179.80


==================================================
13. CONSULTA COMPLETA DE UM PEDIDO
==================================================

13.1 — Mostrar todos os detalhes do pedido 1
--------------------------------------------

SELECT
    pedido.id_pedido,
    cliente.nome AS cliente,
    pedido.data_pedido,
    produto.nome AS produto,
    item_pedido.quantidade,
    item_pedido.preco_unitario,
    item_pedido.quantidade * item_pedido.preco_unitario AS subtotal
FROM pedido
INNER JOIN cliente
    ON pedido.id_cliente = cliente.id_cliente
INNER JOIN item_pedido
    ON pedido.id_pedido = item_pedido.id_pedido
INNER JOIN produto
    ON item_pedido.id_produto = produto.id_produto
WHERE pedido.id_pedido = 1;

FUNÇÃO:
Mostra todos os detalhes dos produtos pertencentes ao pedido 1.


==================================================
14. VALIDAR O VALOR DOS PEDIDOS
==================================================

14.1 — Comparar valor cadastrado e calculado
--------------------------------------------

SELECT
    pedido.id_pedido,
    cliente.nome AS cliente,
    pedido.valor_total AS valor_cadastrado,
    SUM(
        item_pedido.quantidade * item_pedido.preco_unitario
    ) AS valor_calculado
FROM pedido
INNER JOIN cliente
    ON pedido.id_cliente = cliente.id_cliente
INNER JOIN item_pedido
    ON pedido.id_pedido = item_pedido.id_pedido
GROUP BY
    pedido.id_pedido,
    cliente.nome,
    pedido.valor_total;

FUNÇÃO:
Calcula o valor real de cada pedido com base nos produtos
e compara com o valor_total cadastrado.

Essa consulta ajuda a encontrar erros ou inconsistências
nos valores dos pedidos.


==================================================
15. CONSULTA GERAL DA LOJA
==================================================

15.1 — Cliente + pedido + produto + subtotal
--------------------------------------------

SELECT
    c.nome AS cliente,
    p.id_pedido AS pedido,
    p.data_pedido,
    pr.nome AS produto,
    ip.quantidade,
    ip.preco_unitario,
    ip.quantidade * ip.preco_unitario AS subtotal
FROM cliente c
JOIN pedido p
    ON c.id_cliente = p.id_cliente
JOIN item_pedido ip
    ON p.id_pedido = ip.id_pedido
JOIN produto pr
    ON ip.id_produto = pr.id_produto
ORDER BY p.id_pedido ASC;

FUNÇÃO:
Mostra uma visão geral das vendas:
cliente, pedido, data, produto, quantidade, preço e subtotal.


==================================================
16. RESUMO DOS PRINCIPAIS COMANDOS
==================================================

SELECT
Função:
Seleciona dados de uma ou mais tabelas.


WHERE
Função:
Filtra registros.


LIKE
Função:
Pesquisa padrões em textos.


BETWEEN
Função:
Filtra valores dentro de um intervalo.


ORDER BY
Função:
Ordena os resultados.


ASC
Função:
Ordenação crescente.


DESC
Função:
Ordenação decrescente.


LIMIT
Função:
Limita a quantidade de resultados.


INNER JOIN
Função:
Relaciona tabelas retornando apenas registros que possuem
correspondência entre elas.


LEFT JOIN
Função:
Retorna todos os registros da tabela da esquerda, mesmo quando
não existe correspondência na tabela da direita.


COUNT()
Função:
Conta registros.


SUM()
Função:
Soma valores.


AVG()
Função:
Calcula uma média.


MAX()
Função:
Retorna o maior valor.


MIN()
Função:
Retorna o menor valor.


GROUP BY
Função:
Agrupa registros para realizar cálculos por grupo.


HAVING
Função:
Filtra grupos depois do GROUP BY.


AS
Função:
Cria um apelido para uma coluna ou expressão.


==================================================
17. ESTRUTURA DO BANCO
==================================================

cliente
   |
   | 1:N
   v
pedido
   |
   | 1:N
   v
item_pedido
   ^
   |
   | N:1
   |
produto


RELACIONAMENTOS:

1 cliente pode possuir vários pedidos.

1 pedido pode possuir vários itens.

1 produto pode aparecer em vários itens de pedidos.

A tabela item_pedido funciona como tabela associativa
entre pedido e produto.

Isso cria uma relação N:N:

pedido N:N produto


==================================================
FIM
==================================================
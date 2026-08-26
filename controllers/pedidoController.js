import bd from '../bd.js';

export const listarPedidos = (req,res)=>{
    bd.query('SELECT * FROM pedido',(erro,resultado)=>{
        if(erro){
            return res.status(500).json({
                msg_erro: erro.message
            });
        }

        res.json(resultado);
    });
};

export const buscarPedidoPorId = (req, res) => {
    const { id } = req.params;

    const query = `
        SELECT
            p.id,
            p.data_pedido,
            p.valor_total,
            c.id AS id_cliente,
            c.nome AS cliente,
            ip.id AS id_item,
            ip.quantidade,
            ip.preco_unitario,
            pr.id AS id_produto,
            pr.nome AS produto
        FROM pedido p
        INNER JOIN cliente c
            ON p.id_cliente = c.id
        INNER JOIN item_pedido ip
            ON p.id = ip.id_pedido
        INNER JOIN produto pr
            ON ip.id_produto = pr.id
        WHERE p.id = ?
    `;

    bd.query(query, [id], (erro, resultado) => {
        if (erro) {
            return res.status(500).json({
                msg_erro: erro.message
            });
        }

        if (resultado.length === 0) {
            return res.status(404).json({
                mensagem: 'Pedido não encontrado'
            });
        }

        res.json(resultado);
    });
};

export const cadastrarPedido = (req, res) => {
    const { valor_total, id_cliente, itens } = req.body;

    const queryPedido = `
        INSERT INTO pedido
        (data_pedido, valor_total, id_cliente)
        VALUES (CURDATE(), ?, ?)
    `;

    bd.query(
        queryPedido,
        [valor_total, id_cliente],
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json({
                    msg_erro: erro.message
                });
            }

            const idPedido = resultado.insertId;

            const valores = itens.map(item => [
                item.quantidade,
                item.preco_unitario,
                idPedido,
                item.id_produto
            ]);

            const queryItens = `
                INSERT INTO item_pedido
                (quantidade, preco_unitario, id_pedido, id_produto)
                VALUES ?
            `;

            bd.query(queryItens, [valores], (erro) => {

                if (erro) {
                    return res.status(500).json({
                        msg_erro: erro.message
                    });
                }

                res.status(201).json({
                    mensagem: 'Pedido criado com sucesso',
                    id: idPedido
                });
            });
        }
    );
};

export const atualizarPedido = (req,res)=>{
    const{id}=req.params;

    const{
        data_pedido,
        valor_total,
        id_cliente
    } = req.body;

    const query = `
    UPDATE pedido
    SET data_pedido = ?,
        valor_total = ?,
        id_cliente = ?
    WHERE id = ?
    `;

    bd.query(query,[data_pedido,valor_total,id_cliente,id],(erro,resultado)=>{
        if(erro){
            return res.status(500).json({
                msg_erro:erro.message
            });
        }

        if(resultado.affectedRows === 0){
            return res.status(404).json({
                msg_erro: `Ǹenhum pedido encontrado com ID ${id}`
            });
        }

        res.json({
            mensagem: 'Pedido atualizado com sucesso'
        });
    });
};

export const removerPedido = (req,res)=>{
    const{id}=req.params;

    const query = 'DELETE FROM pedido WHERE id = ?';

    bd.query(query,[id],(erro,resultado)=>{
        if(erro){
            return res.status(500).json({
                msg_erro:erro.message
            });
        }

        if(resultado.affectedRows === 0){
            return res.status(404).json({
                msg_erro: `Ǹenhum pedido encontrado ID ${id}`
            });
        }

        res.json({
            mensagem: 'Pedido removido com sucesso'
        });
    });
};
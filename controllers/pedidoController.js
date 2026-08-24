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

export const buscarPedidoPorId = (req,res)=>{
    const{id}=req.params;

    const query = `
    SELECT id,data_pedido,valor_total,id_cliente
    FROM pedido
    WHERE id = ?
    `;

    bd.query(query,[id],(erro,resultado)=>{
        if(erro){
            return res.json({
                msg_erro:erro.message
            });
        }

        if(resultado.length === 0){
            return res.status(404).json({
                msg_erro:`Nenhum pedido encontrado com ID ${id}`
            });
        }

        res.json(resultado[0]);
    });
};

export const cadastrarPedido = (req,res)=>{
    const{
        data_pedido,
        valor_total,
        id_cliente
    } = req.body;

    if(!data_pedido||!valor_total||!id_cliente){
        return res.status(400).json({
            msg_erro: 'Todos os campos são obrigatórios'
        });
    }

    const query = `
    INSERT INTO pedido
    (data_pedido,valor_total,id_cliente)
    VALUES(?,?,?)
    `;

    bd.query(query,[data_pedido,valor_total,id_cliente],(erro,resultado)=>{
        if(erro){
            return res.status(500).json({
                msg_erro:erro.message
            });
        }

        res.status(201).json({
            id: resultado.insertId,
            data_pedido,
            valor_total,
            id_cliente
        });
    });
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
import bd from '../bd.js';

export const listarProdutos = (req,res)=>{
    bd.query('SELECT * FROM produto', (erro,resultado)=>{
        if(erro) {
            return res.status(500).json({
                msg_erro: erro.message
            });
        }

        res.json(resultado);
    });
};

export const buscarProdutoPorId = (req,res)=>{
    const {id} = req.params;

    const query = `
    SELECT id,nome,descricao,preco,estoque
    FROM produto
    WHERE id = ?
    `;

    bd.query(query,[id],(erro,resultado)=>{
        if(erro) {
            return res.status(500).json({
                msg_erro: erro.message
            });
        }

        if(resultado.length === 0){
            return res.status(404).json({
                msg_erro: `Nenhum produto encontrado com ID ${id}`
            });
        }

        res.json(resultado[0]); 
    });
};

export const cadastrarProduto = (req,res)=>{
    const {
        nome,
        descricao,
        preco,
        estoque
    } = req.body;

    if(!nome || !descricao || preco === undefined || estoque === undefined){
        return res.status(400).json({
            msg_erro: 'Todos os campos são obrigatórios'
        })
    }

    const query = `
    INSERT INTO produto
    (nome,descricao,preco,estoque)
    VALUES(?,?,?,?)
    `;

    bd.query(query,[nome,descricao,preco,estoque],(erro,resultado)=>{
        if (erro) {
        return res.status(500).json({
          msg_erro: erro.message
        });
    }

    res.status(201).json({
        id: resultado.insertId,
        nome,
        descricao,
        preco,
        estoque
    });
    });
};

export const atualizarProduto = (req,res)=>{
    const {id} = req.params;

    const {
        nome,
        descricao,
        preco,
        estoque
    } = req.body;

    if(!nome || !descricao || preco === undefined || estoque === undefined){
        return res.status(400).json({
            msg_erro: 'Todos os campos são obrigatórios'
        });
    }

    const query = `
    UPDATE produto
    SET nome = ?,
        descricao = ?,
        preco = ?,
        estoque = ?
    WHERE id = ?
    `;

    bd.query(query,[nome,descricao,preco,estoque,id],(erro,resultado)=>{
        if (erro) {
        return res.status(500).json({
          msg_erro: erro.message
        });
    }

    if (resultado.affectedRows === 0){
        return res.status(404).json({
            msg_erro: `Ǹenhum produto encontrado com ID ${id}`
        });
    }

    res.json({
        mensagem: 'Produto atualizado com sucesso'
    }); 
    });
};

export const removerProduto = (req,res)=>{
    const {id} = req.params;

    const query = 'DELETE FROM produto WHERE id = ?';

    bd.query(query,[id],(erro,resultado)=>{
        if (erro) {
        return res.status(500).json({
          msg_erro: erro.message
        });
    }

    if (resultado.affectedRows === 0){
        return res.status(404).json({
            msg_erro: `Ǹenhum produto encontrado com ID ${id}`
        });
    }

    res.json({
        mensagem: 'Produto removido com sucesso'
    }); 
    });
};

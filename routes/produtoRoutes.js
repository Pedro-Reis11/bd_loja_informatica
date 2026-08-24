import {Router} from 'express';

import{
    listarProdutos,
    buscarProdutoPorId,
    cadastrarProduto,
    atualizarProduto,
    removerProduto
} from '../controllers/produtoController.js';

const router = Router();

router.get('/', listarProdutos);

router.get('/:id', buscarProdutoPorId);

router.post('/', cadastrarProduto);

router.put('/:id', atualizarProduto);

router.delete('/:id', removerProduto);

export default router;
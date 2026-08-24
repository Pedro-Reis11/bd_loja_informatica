import {Router} from 'express';

import{
    listarPedidos,
    buscarPedidoPorId,
    cadastrarPedido,
    atualizarPedido,
    removerPedido
} from '../controllers/pedidoController.js';

const router = Router();

router.get('/', listarPedidos);

router.get('/:id', buscarPedidoPorId);

router.post('/', cadastrarPedido);

router.put('/:id', atualizarPedido);

router.delete('/:id', removerPedido);

export default router;
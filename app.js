import express from 'express';
import cors from 'cors';

import clienteRoutes from './routes/clienteRoutes.js';
import produtoRoutes from './routes/produtoRoutes.js';
import pedidoRoutes from './routes/pedidoRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/clientes', clienteRoutes);  
app.use('/produtos', produtoRoutes);
app.use('/pedidos', pedidoRoutes);

app.listen(3000, () => {
  console.log('API (CRUD) ativa na porta 3000.');
});
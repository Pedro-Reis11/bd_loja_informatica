import { InterfaceItempedido } from '../../interface/InterfaceItempedido'; import { URL_ITEMPEDIDOS } from '../../config/api';
export async function lerItempedidos(): Promise<InterfaceItempedido[]> { console.warn(`Não há rota de item_pedido disponível em ${URL_ITEMPEDIDOS}.`); return []; }

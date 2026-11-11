import { InterfacePedido } from '../../interface/InterfacePedido'; import { URL_PEDIDOS } from '../../config/api';
export async function lerPedidos(): Promise<InterfacePedido[]> { let pedidos: InterfacePedido[] = []; await fetch(URL_PEDIDOS).then(r => r.json()).then(d => { pedidos = d; }).catch(e => console.error('Erro ao buscar pedidos:', e)); return pedidos; }

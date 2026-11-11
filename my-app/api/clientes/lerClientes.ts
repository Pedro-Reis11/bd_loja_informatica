import { InterfaceCliente } from '../../interface/InterfaceCliente';
import { URL_CLIENTES } from '../../config/api';
export async function lerClientes(): Promise<InterfaceCliente[]> {
  let clientes: InterfaceCliente[] = [];
  await fetch(URL_CLIENTES).then(r => r.json()).then(d => { clientes = d; }).catch(e => console.error('Erro ao buscar clientes:', e));
  return clientes;
}

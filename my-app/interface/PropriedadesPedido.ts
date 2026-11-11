import { InterfacePedido } from './InterfacePedido';
import { InterfaceCliente } from './InterfaceCliente';
import { InterfaceProduto } from './InterfaceProduto';
export interface PropriedadesPedido {
  item: InterfacePedido;
  clientes: InterfaceCliente[];
  produtos: InterfaceProduto[];
  iniciarEdicao: (pedido: InterfacePedido) => void;
  excluirPedido: (id: number | undefined) => void;
}

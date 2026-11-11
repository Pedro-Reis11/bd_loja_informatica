import { InterfacePedido } from './InterfacePedido';
import { InterfaceCliente } from './InterfaceCliente';
import { InterfaceProduto } from './InterfaceProduto';
export interface PropriedadesFormularioPedido {
  idEdicao?: number; data_pedido: string; setDataPedido: (v: string) => void;
  valorTotal: string; setValorTotal: (v: string) => void;
  idCliente: string; setIdCliente: (v: string) => void;
  itens: NonNullable<InterfacePedido['itens']>; setItens: (v: NonNullable<InterfacePedido['itens']>) => void;
  clientes: InterfaceCliente[]; produtos: InterfaceProduto[];
  salvarDados: (id: number | undefined, pedido: InterfacePedido) => void;
  limparFormulario: () => void;
}

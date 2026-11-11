export interface InterfacePedido {
  id?: number;
  data_pedido: string;
  valor_total: number;
  id_cliente: number;
  cliente?: string;
  id_item?: number;
  id_produto?: number;
  produto?: string;
  quantidade?: number;
  preco_unitario?: number;
  itens?: InterfaceItemPedido[];
}
export interface InterfaceItemPedido {
  id?: number;
  id_pedido?: number;
  id_produto: number;
  quantidade: number;
  preco_unitario: number;
  produto?: string;
}

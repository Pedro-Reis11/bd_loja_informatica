import { InterfaceCliente } from './InterfaceCliente';
export interface PropriedadesCliente {
  item: InterfaceCliente;
  iniciarEdicao: (cliente: InterfaceCliente) => void;
  excluirCliente: (id: number | undefined) => void;
}

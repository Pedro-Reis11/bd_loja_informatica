import { InterfaceCliente } from './InterfaceCliente';
export interface PropriedadesFormularioCliente {
  idEdicao?: number;
  nome: string; setNome: (valor: string) => void;
  email: string; setEmail: (valor: string) => void;
  telefone: string; setTelefone: (valor: string) => void;
  salvarDados: (id: number | undefined, cliente: InterfaceCliente) => void;
  limparFormulario: () => void;
}

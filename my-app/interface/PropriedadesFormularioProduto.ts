import { InterfaceProduto } from './InterfaceProduto';
export interface PropriedadesFormularioProduto {
  idEdicao?: number;
  nome: string; setNome: (valor: string) => void;
  descricao: string; setDescricao: (valor: string) => void;
  preco: string; setPreco: (valor: string) => void;
  estoque: string; setEstoque: (valor: string) => void;
  salvarDados: (id: number | undefined, produto: InterfaceProduto) => void;
  limparFormulario: () => void;
}

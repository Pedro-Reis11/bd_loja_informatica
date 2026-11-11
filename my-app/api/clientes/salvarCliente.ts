import { Alert } from 'react-native';
import { InterfaceCliente } from '../../interface/InterfaceCliente';
import { URL_CLIENTES } from '../../config/api';
export async function salvarCliente(idEdicao: number | undefined, cliente: InterfaceCliente): Promise<boolean> {
  if (!cliente.nome.trim() || !cliente.email.trim() || !cliente.telefone.trim()) { Alert.alert('Erro', 'Por favor, realize o preenchimento de todos os campos!'); return false; }
  try { const r = await fetch(idEdicao === undefined ? URL_CLIENTES : `${URL_CLIENTES}/${idEdicao}`, { method: idEdicao === undefined ? 'POST' : 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ nome: cliente.nome.trim(), email: cliente.email.trim(), telefone: cliente.telefone.trim() }) }); if (!r.ok) throw new Error(`Erro HTTP ${r.status}`); Alert.alert('Sucesso!', idEdicao === undefined ? 'Cliente cadastrado no MySQL!' : 'Cliente atualizado no MySQL!'); return true; } catch (e) { console.error(e); Alert.alert('Erro', 'Ocorreu um erro ao salvar o cliente.'); return false; }
}

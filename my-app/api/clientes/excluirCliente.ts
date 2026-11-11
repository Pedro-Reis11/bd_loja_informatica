import { Alert, Platform } from 'react-native';
import { URL_CLIENTES } from '../../config/api';
export async function excluirCliente(id: number | undefined): Promise<boolean> {
  if (id === undefined) return false; const msg = 'Deseja realmente apagar este registro do banco de dados?';
  if (Platform.OS === 'web' ? !window.confirm(msg) : !(await new Promise<boolean>(ok => Alert.alert('Confirmar Exclusão', msg, [{ text: 'Cancelar', onPress: () => ok(false) }, { text: 'Excluir', onPress: () => ok(true) }])))) return false;
  try { const r = await fetch(`${URL_CLIENTES}/${id}`, { method: 'DELETE' }); if (!r.ok) throw new Error(); Platform.OS === 'web' ? window.alert('O registro foi removido do Banco de Dados MySQL.') : Alert.alert('Removido!', 'O registro foi removido do Banco de Dados MySQL.'); return true; } catch { Platform.OS === 'web' ? window.alert('Ocorreu um erro ao excluir o registro.') : Alert.alert('Erro', 'Ocorreu um erro ao excluir o registro.'); return false; }
}

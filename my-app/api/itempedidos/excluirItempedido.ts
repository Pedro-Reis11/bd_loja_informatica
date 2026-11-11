import { Alert } from 'react-native';
export async function excluirItempedido(_id: number | undefined): Promise<boolean> { Alert.alert('Indisponível', 'O back-end não possui rota própria para item_pedido.'); return false; }

import { Alert } from 'react-native'; import { InterfaceItempedido } from '../../interface/InterfaceItempedido';
export async function salvarItempedido(_idEdicao: number | undefined, _item: InterfaceItempedido): Promise<boolean> { Alert.alert('Indisponível', 'O back-end não possui rota própria para item_pedido.'); return false; }

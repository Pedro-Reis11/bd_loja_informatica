import { InterfaceProduto } from '../../interface/InterfaceProduto'; import { URL_PRODUTOS } from '../../config/api';
export async function lerProdutos(): Promise<InterfaceProduto[]> { let produtos: InterfaceProduto[] = []; await fetch(URL_PRODUTOS).then(r => r.json()).then(d => { produtos = d; }).catch(e => console.error('Erro ao buscar produtos:', e)); return produtos; }

import {Link} from 'react-router-dom';
import Navegacao from '../componentes/Navegacao';
import Exibidor from '../componentes/Exibidor';
import ProdutoExemplo from '../data/ProdutosExemplo';

export default function Produto() {
    return (
        <>
        <Navegacao titulo="VITRINE">
        <Link to="/"> Inicio </Link>
        <Link to="/promocao"> Promocao </Link>
        <Link to="/carrinho"> Carrinho </Link>
      </Navegacao>

      <Exibidor produto={ProdutoExemplo[0]} />
    </>
  )
}

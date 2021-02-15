import { Switch, Route } from 'react-router-dom';
import Index from './paginas/paginainicial';
import Produtos from './paginas/produtos';
import Lojas from './paginas/lojas';
import Contato from './paginas/contato';


export default function Rotas() {
  return (
    <Switch>
      <Route exact path="/Contato" component={Contato} />
      <Route exact path="/Lojas" component={Lojas} />
      <Route exact path="/Produtos" component={Produtos} />
      <Route exact path="/" component={Index} />
    </Switch>
  );
};
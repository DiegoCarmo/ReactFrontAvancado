import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Rotas from './rotas';

export default class cabecalho extends React.Component {
  render() {
    return (
      <Router>

        <div className="imagem01 container-fluid">
          <Link as={Link} to="/">
            <img src={require('./../imagens/box logo.png').default} className="boxlogo" alt="" />
            <script src="main.js"></script>
          </Link>
        </div>

        <div className="container-fluid bg-dark mx-0 px-0 py-3">
          <nav className="navbar-expand-lg navbar-dark">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menuNav">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div id="menuNav" className="collapse navbar-collapse">
              <ul className="navbar-nav nav-fill w-100">
                <li className="nav-item">
                  <Link className="nav-link" as={Link} to="/Produtos">PRODUTOS</Link>
                </li>
                <li className="nav-item">
                  <Link className="navbar-item nav-link" as={Link} to="/Lojas">LOJAS</Link>
                </li>
                <li className="nav-item">
                  <Link className="navbar-item nav-link" as={Link} to="/Contato">CONTATO</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <Rotas />
      </Router>
    );
  }
}



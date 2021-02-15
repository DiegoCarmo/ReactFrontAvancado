import React from 'react';
export default class Lojas extends React.Component {
  render() {
    return (
      <div>

        <div className="container">
          <br /><br /><br />
          <h2 className="h2">Endereços</h2>
          <br /><br /><br />
          <ul className="list-group">
            <h3 className="h4">Rio de Janeiro</h3>
            <li className="list-group-item">Avenida vargas, 100</li>
            <li className="list-group-item">10 &ordm; andar</li>
            <li className="list-group-item">Centro</li>
            <li className="list-group-item">(21) 2222-2222</li>
          </ul>

          <br /><br /><br />

          <ul className="list-group">
            <h3 className="h4">São Paulo</h3>
            <li className="list-group-item">Avenida Paulista, 200</li>
            <li className="list-group-item">10 &ordm; andar</li>
            <li className="list-group-item">Centro</li>
            <li className="list-group-item">(30) 3333-3333</li>
          </ul>

          <br /><br /><br />

          <ul className="list-group">
            <h3 className="h4">Fortaleza</h3>
            <li className="list-group-item">Avenida Céara, 136</li>
            <li className="list-group-item">20 &ordm; andar</li>
            <li className="list-group-item">Centro</li>
            <li className="list-group-item">(88) 4444-4444</li>
          </ul>
        </div>
      </div>
    );
  }
}
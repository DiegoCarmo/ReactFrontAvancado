import React from 'react';
export default class Footer extends React.Component {
  render() {
    return (

      <footer className="container-fluid" >
        <div className="boxpagamentos text-center">
          <p className="h2">Formas de pagamentos</p>
          <img src={require('../imagens/pagamentos.png').default} className="imgpagamentos" />
        </div>
      </footer>

    );
  }
}
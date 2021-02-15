import React from 'react';

export default class Pagina_inicial extends React.Component {
  render() {
    return (
      <div className="container-fluid px-0">
        <div className="imagem02">
          <div className="pt-4 d-flex justify-content-center">
            <img src={require('./../../imagens/informes02.png').default} className="informes" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
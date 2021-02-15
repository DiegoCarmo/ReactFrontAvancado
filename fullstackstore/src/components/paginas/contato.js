import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { inserir } from "../../Actions/mensagens"
import { passe_livre, passe_negado } from '../../Actions/passe'


const FormasContato = lazy(() => import('./../FormasdeContato'))

const estados = (state) => {
  return {
    mensagens: state.mensagens,
    passe: state.passe
  }
}
const funcoes = () => {
  return {
    passelivre: passe_livre,
    passenegado: passe_negado,
    inserir: inserir
  }
}

class Contato extends React.Component {
  constructor(props) {
    super(props);
    this.enviarFormulario = this.enviarFormulario.bind(this);
  }

  async componentDidMount() {
    if (this.props.passe) {
      this.props.passenegado()
      console.log('Passou!')
      const resposta = await fetch('http://localhost:8000/pegarMensagem');
      const json = await resposta.json();
      this.props.inserir(json)
    }
  }

  async enviarFormulario(elemento) {
    elemento.preventDefault();
    const url = "http://localhost:8000/enviarMensagem";
    const dados = new FormData(elemento.target);
    let json = {}
    dados.forEach((valor, chave) => {
      json[chave] = valor;
    })
    const cabecalho = {
      method: 'post',
      body: JSON.stringify(json),
      headers: {
        'Content-Type': 'application/json'
      }

    }
    await fetch(url, cabecalho);
  }

  render() {
    return (
      <Suspense fallback={<h1 style={{ position: 'absolute', zIndex: '2' }}>Carregando o conteudo da Página!</h1>}>
        <FormasContato enviarFormulario={this.enviarFormulario} passelivre={this.props.passelivre} mensagens={this.props.mensagens} />
      </Suspense>

    );
  }
}

export default connect(estados, funcoes())(Contato)
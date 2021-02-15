// import React from 'react';
import React, { lazy, Suspense } from 'react';
import * as Script from './../../JavaScript/main';
const BoxMenu = lazy(() => import('../boxmenu'))
const ComponenteProduto = lazy(() => import('./../componenteProduto'))

export default class Produtos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			BD: []
		}
		this.enviarCompra = this.enviarCompra.bind(this);
	}
	async componentDidMount() {
		let resposta = await fetch('http://localhost:8000/produto');
		let dados = await resposta.json();
		this.setState({ BD: dados });
	}

	async enviarCompra(elemento) {
		elemento.preventDefault();
		const url = "http://localhost:8000/compra";
		const dados = new FormData(elemento.target);
		let json = {};
		dados.forEach((valor, chave) => {
			json[chave] = valor;
		})
		const cabecalho = {
			method: "post",
			body: JSON.stringify(json),
			headers: {
				'Content-Type': 'application/json'
			}
		};
		await fetch(url, cabecalho);
	}

	render() {

		return (
			<div>
				<Suspense fallback={<h2>Carregando Menu...</h2>}>
					<BoxMenu />
				</Suspense>
				<Suspense fallback={<h2>Carregando Produtos...</h2>}>
					<ComponenteProduto BD={this.state.BD} enviarCompra={this.enviarCompra} Script={Script} />
				</Suspense>

			</div>
		)
	}
}
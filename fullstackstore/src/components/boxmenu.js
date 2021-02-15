import React from 'react'
import * as Script from './../JavaScript/main';
export default function BoxProduto() {
  return (
    <div className="container-fluid bg-secondary mx-0 px-0 py-2">
      <nav className="navbar-expand-lg navbar-dark">

        <button className="navbar-toggler w-100" type="button" data-toggle="collapse" data-target="#categoriasNav">
          <span className="text-light">Categorias</span></button>

        <div id="categoriasNav" className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav nav-fill w-100">
            <li className="nav-item font-weight-bold">
              <span className="col text-light mx-4" onClick={Script.exibir_todos}>Todos(12)</span>
            </li>
            <li className="nav-item font-weight-bold">
              <span className="col text-light mx-4" onClick={() => Script.exibir_categoria('acessorios')}>Acessorios(3)</span>
            </li>
            <li className="nav-item font-weight-bold">
              <span className="col text-light mx-4" onClick={() => Script.exibir_categoria('livros')}>Livros(3)</span>
            </li>
            <li className="nav-item font-weight-bold">
              <span className="col text-light mx-4" onClick={() => Script.exibir_categoria('eletronicos')}>Eletronicos(3)</span>
            </li>
            <li className="nav-item font-weight-bold">
              <span className="col text-light mx-4" onClick={() => Script.exibir_categoria('canecas')}>Canecas(3)</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )


}
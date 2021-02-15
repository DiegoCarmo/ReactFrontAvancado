import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap';
import store from './Reducers/index';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const Header = lazy(() => import('./components/cabecalho'))
const Footer = lazy(() => import('./components/footer'))

const loja = createStore(
  store
)


ReactDOM.render(
  <Provider store={loja}>

    <Suspense fallback={<h1>Ops!...</h1>}>
      <Header />
    </Suspense>
    <Suspense fallback={<h1> Carregando... </h1>}>
      <Footer />
    </Suspense>
  </Provider>,

  document.getElementById('root')
);

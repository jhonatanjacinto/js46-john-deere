import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Autores from './pages/Autores/index.js';
import Categorias from './pages/Categorias/index.js';
import Livros from './pages/Livros/index.js';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Dashboard} exact />
      <Route path="/autores" component={Autores} />
      <Route path="/Categorias" component={Categorias} />
      <Route path="/livros" component={Livros} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

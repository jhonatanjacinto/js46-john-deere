import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ConcessionariaContextProvider } from './contexts/ConcessionariaContext.js';
import CadastroPage from './pages/CadastroPage/index.js';
import HomePage from './pages/HomePage/index.js';
import ListagemPage from './pages/ListagemPage/index.js';
import PageNotFound from './pages/PageNotFound/index.js';
import SobrePage from './pages/SobrePage/index.js';


ReactDOM.render(
  <ConcessionariaContextProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/sobre" component={SobrePage} />
        <Route path="/listagem" component={ListagemPage} />
        <Route path="/cadastro" component={CadastroPage} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  </ConcessionariaContextProvider>,
  document.getElementById('root')
);


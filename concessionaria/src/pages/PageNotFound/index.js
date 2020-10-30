import React from 'react';
import { Link } from 'react-router-dom';
import MasterPage from '../../components/MasterPage/index.js';

function PageNotFound(props) {
  return (
    <MasterPage titulo="404">
      <div className="alert alert-warning p-4">
          A URL <strong>{ props.location.pathname }</strong> não existe no nosso site. <br />
          <Link to="/">Clique aqui para voltar para a Home.</Link>
      </div>
    </MasterPage>
  );
}

export default PageNotFound;
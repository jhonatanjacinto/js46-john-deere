import React, { useEffect, useState } from 'react';
import MasterPage from '../../components/MasterPage/index.js';
import DashboardService from '../../services/DashboardService.js';

function Dashboard() {

  const [dashboardInfo, setDashboard] = useState({});

  async function carregarDados() {
    const dados = await DashboardService.getDashboardStatus();
    setDashboard(dados);
  }

  useEffect(function() {

    carregarDados();

  }, []);
  

  return (
    <MasterPage titulo="Dashboard">
      <div className="row text-center">
        <div className="col-md-4 alert alert-secondary p-4">
          <strong className="h1 d-block">{dashboardInfo.categoryCount}</strong>
              Categorias
          </div>
        <div className="col-md-4 alert alert-success p-4">
          <strong className="h1 d-block">{dashboardInfo.authorCount}</strong>
              Autores
          </div>
        <div className="col-md-4 alert alert-warning p-4">
          <strong className="h1 d-block">{dashboardInfo.bookCount}</strong>
              Livros
          </div>
      </div>
    </MasterPage>
  );
}

export default Dashboard;

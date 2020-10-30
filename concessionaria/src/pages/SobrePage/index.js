import React from 'react';
import MasterPage from '../../components/MasterPage/index.js';

function SobrePage() {
  return (
    <MasterPage titulo="Sobre">
      <section className="card">
            <header className="card-header p-3">
                <h2>Sobre nós</h2>
            </header>
            <div className="card-body p-3">
                <div className="row">
                    <div className="col-lg-6">
                        <img src="https://placehold.it/200x200" className="img-thumbnail float-left mr-3" alt="" />
                        <p>
                            <strong>Nome:</strong> Nome do Aluno <br />
                            <strong>E-mail:</strong> aluno@caelum.com.br<br />
                            <strong>Curso:</strong> Nome do Curso <br />
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <img src="https://placehold.it/200x200" className="img-thumbnail float-left mr-3" alt="" />
                        <p>
                            <strong>Nome:</strong> Nome do Aluno <br />
                            <strong>E-mail:</strong> aluno@caelum.com.br<br />
                            <strong>Curso:</strong> Nome do Curso <br />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </MasterPage>
  );
}

export default SobrePage;
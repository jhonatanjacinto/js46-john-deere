import React, { useContext } from 'react';
import { Carro } from '../../components/Carro/index.js';
import MasterPage from '../../components/MasterPage/index.js';
import { ConcessionariaContext } from '../../contexts/ConcessionariaContext.js';

function ListagemPage() 
{
    const concessionaria = useContext(ConcessionariaContext);
    console.log(concessionaria.carros);

    return (
        <MasterPage titulo="Listagem">
            <section>
                <header className="card-header p-3 mb-3">
                    <h2>Veja os nossos veículos</h2>
                </header>
                <div id="lista-de-carros" className="card p-2 my-3">
                    { 
                        concessionaria.carros.map((carro, indice) => {
                            return <Carro {...carro} key={indice} indice={indice} />;
                        }) 
                    }
                </div>
            </section>
        </MasterPage>
    );
}

export default ListagemPage;
import React, { useContext } from 'react';
import { ConcessionariaContext } from '../../contexts/ConcessionariaContext.js';

export function Carro(props)
{
    const concessionaria = useContext(ConcessionariaContext);

    const removeHandler = (e) => {
        concessionaria.carros.splice(props.indice, 1);
        concessionaria.setCarros([ ...concessionaria.carros ]);
    }

    return (
        <div className="row">
            <div className="col-md-3">
                <img src={`/imagens/${props.foto}.jpg`} className="img-thumbnail img-fluid" alt="" />
            </div>
            <div className="col-md-9 p-3">
                <h3>{props.modelo}</h3>
                <p>
                    <strong>Marca:</strong> {props.marca} <br />
                    <strong>Ano:</strong> {props.ano} <br />
                    <strong>Preço:</strong> R$ {props.preco} <br />
                    <strong>Cor:</strong> {props.cor}
                </p>
                <p>
                    {props.descricao}
                </p>
                <p className="text-right">
                    <button onClick={removeHandler} href="#" className="btn btn-danger">
                        Excluir
                    </button>
                </p>
            </div>
        </div>
    );
}
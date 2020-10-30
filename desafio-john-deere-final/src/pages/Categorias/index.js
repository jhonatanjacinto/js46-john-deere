import React, { createRef, useEffect, useState } from 'react';
import MasterPage from '../../components/MasterPage/index.js';
import CategoriaService from '../../services/CategoriaService.js';

export default function Categorias() {
    const inputTitulo = createRef();
    const inputDescricao = createRef();
    const [categorias, setState] = useState([]);

    async function salvarHandler(e) {
        e.preventDefault();
        const form = e.target;
        let titulo = inputTitulo.current.value.trim();
        let descricao = inputDescricao.current.value.trim();

        if (!titulo) {
            alert('Título é obrigatório!');
            return;
        }

        if (!descricao) {
            alert('Descrição é obrigatória!');
            return;
        }

        const dadosCategoria = await CategoriaService.salvar();
        setState([dadosCategoria, ...categorias]);

        form.reset();
    }

    async function carregarCategorias() {
        const categorias = await CategoriaService.getCategorias();
        setState(categorias);
    }

    useEffect(() => {
        carregarCategorias();
    }, []);

    return (
        <MasterPage titulo="Categorias">
            <div className="row">
                <form className="col-md-6 p-3" onSubmit={salvarHandler}>
                    <div className="form-group">
                        <label>* Título:</label>
                        <input ref={inputTitulo} type="text" className="form-control" placeholder="Digite o nome da categoria" />
                    </div>
                    <div className="form-group">
                        <label>* Descrição:</label>
                        <input ref={inputDescricao} type="text" className="form-control" placeholder="Digite uma descrição da categoria" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">
                            Salvar
                        </button>
                    </div>
                </form>

                <div className="col-md-6 p-3 table-responsive">
                    <table className="table table-bordered">
                        <tbody>
                            {
                                categorias.map(cat => {
                                    return (
                                        <tr>
                                            <th scope="row">{cat.id}</th>
                                            <td>{cat.title}</td>
                                            <td>{cat.description}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </MasterPage>
    );
}
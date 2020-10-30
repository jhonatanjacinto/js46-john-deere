import React, { createRef, useState, useEffect } from 'react';
import MasterPage from '../../components/MasterPage/index.js';
import AutorService from '../../services/AutorService.js';

export default function Autores() {
    const inputNome = createRef();
    const inputEmail = createRef();
    const inputAvatar = createRef();
    const inputDesc = createRef();
    const [autores, setState] = useState([]);

    async function salvarHandler(e) {
        e.preventDefault();
        const form = e.target;
        let nome = inputNome.current.value.trim();
        let email = inputEmail.current.value.trim();
        let avatar = inputAvatar.current.value.trim();
        let descricao = inputDesc.current.value.trim();

        if (!nome) {
            alert('Nome é obrigatório!');
            return;
        }

        if (!email) {
            alert('E-mail é obrigatório!');
            return
        }

        if (!descricao) {
            alert('Descrição é obrigatório!');
            return;
        }

        const autor = await AutorService.salvar(nome, email, descricao, avatar);
        setState([...autores, autor]);

        form.reset();
    }

    async function carregarAutores() {
        const autores = await AutorService.getAutores();
        setState(autores);
    }

    useEffect(function () {
        carregarAutores();
    }, []);

    return (
        <MasterPage titulo="Autores">
            <form className="row" onSubmit={salvarHandler}>
                <div className="form-group col-md-6">
                    <label>* Nome:</label>
                    <input ref={inputNome} type="text" className="form-control" placeholder="Digite o nome do autor" />
                </div>
                <div className="form-group col-md-6">
                    <label>* E-mail:</label>
                    <input ref={inputEmail} type="text" className="form-control" placeholder="Digite o e-mail do autor" />
                </div>
                <div className="form-group col-md-6">
                    <label>Avatar:</label>
                    <input ref={inputAvatar} type="text" className="form-control" placeholder="Avatar URL" />
                </div>
                <div className="form-group col-md-6">
                    <label>* Descrição:</label>
                    <input ref={inputDesc} type="text" className="form-control" placeholder="Descrição do autor" />
                </div>
                <div className="form-group col-md-12">
                    <button className="btn btn-primary">
                        Salvar
                </button>
                </div>
            </form>

            <div className="table-responsive">
                <table className="table table-bordered">
                    <tbody>
                        {
                            autores.map(autor => {
                                return (
                                    <tr key={autor.id}>
                                        <th scope="row">{autor.id}</th>
                                        <td>{autor.name}</td>
                                        <td>{autor.email}</td>
                                        <td>{autor.avatarUrl}</td>
                                        <td>{autor.description}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </MasterPage>
    );
}
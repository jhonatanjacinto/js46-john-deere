import React, { createRef, useEffect, useState } from 'react';
import MasterPage from '../../components/MasterPage/index.js';
import AutorService from '../../services/AutorService.js';
import CategoriaService from '../../services/CategoriaService.js';
import LivroService from '../../services/LivroService.js';

export default function Livros() {
    const inputTitulo = createRef();
    const inputDataPub = createRef();
    const inputPages = createRef();
    const inputAutor = createRef();
    const inputCategoria = createRef();
    const inputDesc = createRef();

    const [state, setState] = useState({
        livros: [],
        categorias: [],
        autores: []
    });

    async function cadastroHandler(e)
    {
        e.preventDefault();
        const form = e.target;

        let titulo = inputTitulo.current.value.trim();
        let dataPub = inputDataPub.current.value.trim();
        let pages = inputPages.current.value.trim();
        let autorId = inputAutor.current.value.trim();
        let categoriaId = inputCategoria.current.value.trim();
        let descricao = inputDesc.current.value.trim();

        if (!titulo) {
            alert('Título é obrigatório!');
            return;
        }

        if (!autorId) {
            alert('Autor é obrigatório!');
            return;
        }

        if (!categoriaId) {
            alert('Categoria é obrigatório!');
            return;
        }

        const livro = await LivroService.salvar(titulo, descricao, pages, autorId, categoriaId, dataPub);
        setState({
            ...state,
            livros: [...state.livros, livro]
        });

        form.reset();
    }

    async function carregarDados() {
        const listaLivros = await LivroService.getLivros();
        const listaCategorias = await CategoriaService.getCategorias();
        const listaAutores = await AutorService.getAutores();

        setState({
            livros: listaLivros,
            categorias: listaCategorias,
            autores: listaAutores
        });
    }

    useEffect(function () {
        carregarDados();
    }, []);

    return (
        <MasterPage titulo="Livros">
            <form className="row" onSubmit={cadastroHandler}>
                <div className="form-group col-md-6">
                    <label>* Título:</label>
                    <input ref={inputTitulo} type="text" className="form-control" placeholder="Digite o título do livro" />
                </div>
                <div className="form-group col-md-6">
                    <label>Data de Publicação:</label>
                    <input ref={inputDataPub} type="text" className="form-control" placeholder="AAAA-MM-DD" />
                </div>
                <div className="form-group col-md-6">
                    <label>Páginas:</label>
                    <input ref={inputPages} type="text" className="form-control" placeholder="Quantidade de páginas do livro" />
                </div>
                <div className="form-group col-md-6">
                    <label>* Autor:</label>
                    <select ref={inputAutor} className="form-control">
                        <option value=""></option>
                        {
                            state.autores.map(autor => {
                                return (
                                    <option key={autor.id} value={autor.id}>
                                        {autor.name}
                                    </option>
                                );
                            })
                        }
                    </select>
                </div>
                <div className="form-group col-md-6">
                    <label>* Categoria:</label>
                    <select ref={inputCategoria} className="form-control">
                        <option value=""></option>
                        {
                            state.categorias.map(categoria => {
                                return (
                                    <option key={categoria.id} value={categoria.id}>
                                        {categoria.title}
                                    </option>
                                );
                            })
                        }
                    </select>
                </div>
                <div className="form-group col-md-6">
                    <label>Descrição:</label>
                    <input ref={inputDesc} type="text" className="form-control" placeholder="Descrição do Livro" />
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
                            state.livros.map(livro => {
                                return (
                                    <tr key={livro.id}>
                                        <th scope="row">{livro.id}</th>
                                        <td>{livro.title}</td>
                                        <td>{livro.authorId}</td>
                                        <td>{livro.categoryId}</td>
                                        <td>{livro.description}</td>
                                        <td>{livro.pages}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </MasterPage>
    );
}
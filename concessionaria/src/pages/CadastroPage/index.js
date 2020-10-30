import React, { createRef, useContext } from 'react';
import MasterPage from '../../components/MasterPage/index.js';
import { ConcessionariaContext } from '../../contexts/ConcessionariaContext.js';

function CadastroPage() 
{
    const concessionaria = useContext(ConcessionariaContext);

    const inputMarca = createRef();
    const inputModelo = createRef();
    const inputAno = createRef();
    const inputPreco = createRef();
    const inputFoto = createRef();
    const inputCor = createRef();
    const inputDescricao = createRef();

    const cadastroHandler = (e) => {
        e.preventDefault();
        let marca = inputMarca.current.value.trim();
        let modelo = inputModelo.current.value.trim();
        let ano = inputAno.current.value.trim();
        let preco = inputPreco.current.value.trim();
        let foto = inputFoto.current.value.trim();
        let cor = inputCor.current.value.trim();
        let descricao = inputDescricao.current.value.trim();

        if (!marca) {
            alert('Marca é obrigatório'); 
            return;
        }

        if (!modelo) {
            alert('Modelo é obrigatório!'); 
            return;
        }

        if (!ano) {
            alert('Ano é obrigatório!'); 
            return;
        }

        if (!preco) {
            alert('Preço é obrigatório!'); 
            return;
        }

        if (!foto) {
            alert('Foto é obrigatório!'); 
            return;
        }

        if (!cor) {
            alert('Cor é obrigatório!');
            return;
        }

        if (!descricao) {
            alert('Descrição é obrigatório!');
        }

        // Gera um objeto com os dados do carro
        const carro = { marca, modelo, ano, preco, foto, cor, descricao };
        concessionaria.setCarros([
            carro, ...concessionaria.carros
        ]);

        alert('Cadastro realizado com sucesso!');
        e.target.reset(); 
    }
    
    return (
        <MasterPage titulo="Cadastro">
            <div className="alert alert-success d-none" id="alertaSucesso">
                Cadastro realizado com sucesso!
            </div>

            <form id="formVeiculo" method="POST" className="row" onSubmit={cadastroHandler}>
                <div className="form-group col-md-6">
                    <label>Marca:</label>
                    <select ref={inputMarca} id="marca" className="form-control custom-select">
                        <option value="">-- Selecionar --</option>
                        <option value="Chevrolet">Chevrolet</option>
                        <option value="Ford">Ford</option>
                        <option value="Hyiundai">Hyiundai</option>
                    </select>
                </div>
                <div className="form-group col-md-6">
                    <label>Modelo:</label>
                    <input ref={inputModelo} type="text" id="modelo" className="form-control" placeholder="Insira o nome do modelo" />
                </div>
                <div className="form-group col-md-6">
                    <label>Ano:</label>
                    <input ref={inputAno} type="number" id="ano" className="form-control" placeholder="Insira o ano do modelo" />
                </div>
                <div className="form-group col-md-6">
                    <label>Preço:</label>
                    <input ref={inputPreco} type="text" id="preco" className="form-control" placeholder="Insira o preço do modelo" />
                </div>
                <div className="form-group col-md-6">
                    <label>Foto:</label>
                    <input ref={inputFoto} type="text" id="foto" className="form-control" placeholder="Insira o nome da foto" />
                </div>
                <div className="form-group col-md-6">
                    <label>Cor:</label>
                    <select ref={inputCor} id="cor" className="form-control custom-select">
                        <option value="">-- Selecionar --</option>
                        <option value="Preto">Preto</option>
                        <option value="Branco">Branco</option>
                        <option value="Prata">Prata</option>
                        <option value="Vermelho">Vermelho</option>
                    </select>
                </div>
                <div className="form-group col-md-12">
                    <label>Descrição:</label>
                    <textarea ref={inputDescricao} className="form-control" id="descricao" rows="10" placeholder="Insira a descrição do veículo"></textarea>
                </div>
                <div className="form-group col-md-12 text-right">
                    <button className="btn btn-primary">
                        Cadastrar Veículo
                    </button>
                    <button type="reset" className="btn btn-secondary">
                        Limpar
                    </button>
                </div>
            </form>
        </MasterPage>
    );
}

export default CadastroPage;
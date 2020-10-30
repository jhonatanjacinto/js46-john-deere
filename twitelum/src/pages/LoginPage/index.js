import React, { Component, Fragment } from 'react'
import Cabecalho from '../../components/Cabecalho'
import Widget from '../../components/Widget'
import { NotificacaoContext } from '../../contexts/NotificacaoContext.js'
import LoginService from '../../services/LoginService.js'
import './loginPage.css'

const InputFormField = ({ id, type, label, error, value, onChange }) => {
    return (
        <div className="loginPage__inputWrap">
            <label className="loginPage__label" htmlFor={id}>
                { label }
            </label>

            <input className="loginPage__input"
                   id={id}
                   type={type}
                   name={id} 
                   value={value}
                   onChange={onChange}
            />

            <p style={{color: 'red'}}>
                { error }
            </p>
        </div>
    );
}

class LoginPage extends Component {
    static contextType = NotificacaoContext;
    state = {
        values: {
            inputLogin: '',
            inputSenha: ''
        },
        errors: {}
    }

    formValidations = () => {
        const { inputLogin, inputSenha } = this.state.values;
        const errors = {};

        if (!inputLogin) errors.inputLogin = "Login é obrigatório!";
        if (!inputSenha) errors.inputSenha = "Senha é obrigatório!";

        this.setState({ errors });
    }

    onFormFieldChange = (e) => {
        let valor = e.target.value;
        let idCampo = e.target.id;
        const values = { ...this.state.values, [idCampo] : valor };

        this.setState({ values }, () => {
            this.formValidations();
        });
    }

    loginHandler = async (e) => {
        e.preventDefault();
        let login = this.state.values.inputLogin.trim();
        let senha = this.state.values.inputSenha.trim();

        if (!login || !senha) {
            alert('Por favor, preencha os campos de login e senha!');
            return;
        }

        const token = await LoginService.logar(login, senha);
        localStorage.setItem('TOKEN', token);
        this.context.setMsg('Bem-vindo(a) ao Twitelum, login realizado com sucesso!');
        this.props.history.push('/'); // redireciona o usuário para a HomePage
    }

    render() {
        return (
            <Fragment>
                <Cabecalho />
                <div className="loginPage">
                    <div className="container">
                        <Widget>
                            <h2 className="loginPage__title">Seja bem vindo!</h2>

                            <form onSubmit={this.loginHandler} className="loginPage__form" action="/">
                                <InputFormField
                                    id="inputLogin"
                                    type="text"
                                    label="Login:"
                                    onChange={this.onFormFieldChange}
                                    value={this.state.values.inputLogin} 
                                    error={this.state.errors.inputLogin} 
                                />

                                <InputFormField
                                    id="inputSenha"
                                    type="password"
                                    label="Senha:"
                                    onChange={this.onFormFieldChange}
                                    value={this.state.values.inputSenha} 
                                    error={this.state.errors.inputSenha} 
                                />

                                <div className="loginPage__inputWrap">
                                    <button className="loginPage__btnLogin" type="submit">
                                        Logar
                                    </button>
                                </div>
                            </form>
                        </Widget>
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default LoginPage
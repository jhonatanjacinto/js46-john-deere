import React, { Component } from 'react'
import TweetService from '../../services/TweetService.js';
import './tweet.css';
import PropTypes from 'prop-types';

class Tweet extends Component {
    constructor(props) {
        super();
        this.state = {
            likeado: props.likeado,
            totalLikes: props.totalLikes
        }
    }

    getStatusIcon = () => {
        let classes = "icon icon--small iconHeart";

        if (this.state.likeado) {
            classes += " iconHeart--active";
        }

        return classes;
    }

    exibirBotaoRemover = () => {
        if (this.props.removivel === true) {
            return (
                <button onClick={this.removeTweetHandler} className="btn btn--blue btn--remove">
                    X
                </button>
            );
        }
    }

    removeTweetHandler = () => {
        this.props.removerCallback(this.props.id);
    }

    likeHandler = async () => {
        let { likeado, totalLikes } = this.state;
        const tweetId = this.props.id;

        likeado = !likeado;
        totalLikes = !likeado ? --totalLikes : ++totalLikes;

        this.setState({ likeado, totalLikes });
        const dadosLike = await TweetService.salvarLike(tweetId);
        console.log('Dados Like: ', dadosLike);
    }

    clickConteudoHandler = () => {
        this.props.clickConteudoCallback();
    }

    render() {
        return (
            <article className="tweet">
                <div className="tweet__cabecalho">
                    <img className="tweet__fotoUsuario" src={this.props.usuario.foto} alt="" />
                    <span className="tweet__nomeUsuario">{this.props.usuario.nome}</span>
                    <a href="/"><span className="tweet__userName">@{this.props.usuario.login}</span></a>
                </div>
                <p onClick={this.clickConteudoHandler} className="tweet__conteudo">
                    { this.props.texto }
                </p>
                <footer className="tweet__footer">
                    <button onClick={this.likeHandler} className="btn btn--clean">
                        <svg className={this.getStatusIcon()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.5 47.5">
                            <defs>
                                <clipPath id="a">
                                    <path d="M0 38h38V0H0v38z"></path>
                                </clipPath>
                            </defs>
                            <g clipPath="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
                                <path d="M36.885 25.166c0 5.45-4.418 9.868-9.867 9.868-3.308 0-6.227-1.632-8.018-4.128-1.79 2.496-4.71 4.129-8.017 4.129-5.45 0-9.868-4.418-9.868-9.868 0-.773.098-1.52.266-2.242C2.75 14.413 12.216 5.431 19 2.965c6.783 2.466 16.249 11.448 17.617 19.96.17.721.268 1.47.268 2.241"></path>
                            </g>
                        </svg>
                        { this.state.totalLikes }
                    </button>

                    {this.exibirBotaoRemover()}
                </footer>
            </article>
        )
    }
}

export default Tweet

Tweet.propTypes = {
    removivel: PropTypes.bool,
    totalLikes: PropTypes.number.isRequired,
    likeado: PropTypes.bool.isRequired,
    usuario: PropTypes.shape({
        foto: PropTypes.string,
        login: PropTypes.string,
        nome: PropTypes.string
    }),
    conteudo: PropTypes.string,
    removerCallback: PropTypes.func,
    id: PropTypes.string.isRequired,
    clickConteudoCallback: PropTypes.func
}

Tweet.defaultProps = {
    usuario: {},
    likeado: false
}
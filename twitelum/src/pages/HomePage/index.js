import React, { Component, Fragment } from 'react';
import Cabecalho from '../../components/Cabecalho'
import NavMenu from '../../components/NavMenu'
import Dashboard from '../../components/Dashboard'
import Widget from '../../components/Widget'
import TrendsArea from '../../components/TrendsArea'
import Tweet from '../../components/Tweet'
import TweetService from '../../services/TweetService.js';
import { Modal } from '../../components/Modal/index.js';
import { ReactReduxContext } from 'react-redux';

class HomePage extends Component {
    static contextType = ReactReduxContext;

    state = {
        novoTweet: '',
        tweets: [],
        tweetAtivoModal: {}
    }

    abreModal = (tweetModal) => {
        this.setState({
            tweetAtivoModal: tweetModal
        });
    }

    fechaModal = () => {
        this.setState({
            tweetAtivoModal: {}
        });
    }

    statusContador = () => {
        let classeCSS = "novoTweet__status";
        if (this.state.novoTweet.length > 140) {
            classeCSS += " novoTweet__status--invalido";
        }

        return classeCSS;
    }

    changeTextHandler = (e) => {
        this.setState({ novoTweet: e.target.value });
    }

    adicionarTweet = async (e) => {
        e.preventDefault();
        const form = e.target;
        const dadosTweet = await TweetService.adicionarTweet(this.state.novoTweet);

        this.setState({
            tweets: [dadosTweet, ...this.state.tweets],
            novoTweet: ''
        });

        form.reset();
    }

    removerTweet = async (id) => {
        const dadosServidor = await TweetService.removerTweet(id);
        console.log(dadosServidor);

        const listaTweetsFiltrada = this.state.tweets.filter(tweet => tweet._id !== id);
        this.setState({
            tweets: listaTweetsFiltrada
        });

        this.fechaModal();
    }

    renderTweets = () => {
        // se não tem tweet, retorna uma mensagem
        if (this.state.tweets.length === 0) {
            return <div>Faça seu primeiro Tweet...</div>
        }

        // se tem tweets, retorna a lista de tweets cadastrada
        return this.state.tweets.map(tweetInfo => {
            return <Tweet
                key={tweetInfo._id}
                id={tweetInfo._id}
                texto={tweetInfo.conteudo}
                usuario={tweetInfo.usuario}
                likeado={tweetInfo.likeado}
                totalLikes={tweetInfo.totalLikes}
                removivel={tweetInfo.removivel}
                removerCallback={this.removerTweet}
                clickConteudoCallback={() => this.abreModal(tweetInfo)}
            />
        });
    }

    // Método executado um pouco antes do render()
    // isso quer dizer que esse método é executado no instante anterior à exibição do componente na tela
    // logo é um ótimo local para realizar consultas a API's externas que devem ser realizadas antes do 
    // componente ser renderizado na interface
    async componentDidMount() {
        const store = this.context.store;
        
        store.subscribe(() => {
            this.setState({
                tweets: store.getState()
            });
        });

        const tweets = await TweetService.getTweets();
        store.dispatch({ type: 'CARREGAR_TWEETS', tweets });
    }

    render() {
        return (
            <Fragment>
                <Cabecalho>
                    <NavMenu usuario="@omariosouto" />
                </Cabecalho>
                <div className="container">
                    <Dashboard>
                        <Widget>
                            <form onSubmit={this.adicionarTweet} className="novoTweet">
                                <div className="novoTweet__editorArea">
                                    <span className={this.statusContador()}>
                                        {this.state.novoTweet.length}/140
                            </span>
                                    <textarea onChange={this.changeTextHandler} className="novoTweet__editor" placeholder="O que está acontecendo?"></textarea>
                                </div>
                                <button type="submit" className="novoTweet__envia" disabled={this.state.novoTweet.length > 140 || this.state.novoTweet.length === 0}>
                                    Tweetar
                        </button>
                            </form>
                        </Widget>
                        <Widget>
                            <TrendsArea />
                        </Widget>
                    </Dashboard>
                    <Dashboard posicao="centro">
                        <Widget>
                            <div className="tweetsArea">
                                {this.renderTweets()}
                            </div>
                        </Widget>
                    </Dashboard>
                </div>

                <Modal fechandoCallback={this.fechaModal} isAberto={Boolean(this.state.tweetAtivoModal._id)}>
                    {
                        () => {
                            return <Tweet
                                key={this.state.tweetAtivoModal._id}
                                id={this.state.tweetAtivoModal._id}
                                texto={this.state.tweetAtivoModal.conteudo}
                                usuario={this.state.tweetAtivoModal.usuario}
                                likeado={this.state.tweetAtivoModal.likeado}
                                totalLikes={this.state.tweetAtivoModal.totalLikes}
                                removivel={this.state.tweetAtivoModal.removivel}
                                removerCallback={this.removerTweet}
                            />
                        }
                    }
                </Modal>
            </Fragment>
        );
    }
}

export default HomePage;

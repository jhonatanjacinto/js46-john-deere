export default class TweetService
{
    /* adiciona um tweet no servidor */
    static async adicionarTweet(conteudo)
    {
        const token = localStorage.getItem('TOKEN');
        let url = `https://twitelum-api.herokuapp.com/tweets?X-AUTH-TOKEN=${token}`;

        const respostaServidor = await fetch(url, {
            method: 'POST',
            headers: { 'Content-type' : 'application/json' },
            body: JSON.stringify({ conteudo })
        });

        const tweetDoServidor = await respostaServidor.json();
        return tweetDoServidor;
    }

    /* busca todos os tweets disponíveis na na API */
    static async getTweets()
    {
        const token = localStorage.getItem('TOKEN');
        let url = `https://twitelum-api.herokuapp.com/tweets?X-AUTH-TOKEN=${token}`;

        const respostaServidor = await fetch(url);
        const tweets = await respostaServidor.json();

        return tweets;
    }

    /** salva as curtidas do Tweet no servidor */
    static async salvarLike(tweetId)
    {
        const token = localStorage.getItem('TOKEN');
        let url = `http://twitelum-api.herokuapp.com/tweets/${tweetId}/like?X-AUTH-TOKEN=${token}`;

        const respostaServidor = await fetch(url, { method: 'POST' });
        const dadosLike = await respostaServidor.json();

        return dadosLike;
    }

    /** remove um tweet no servidor */
    static async removerTweet(tweetId)
    {
        const token = localStorage.getItem('TOKEN');
        let url = `https://twitelum-api.herokuapp.com/tweets/${tweetId}?X-AUTH-TOKEN=${token}`;

        const respostaServidor = await fetch(url, { method: 'DELETE' });
        const dadosResposta = await respostaServidor.json();
        return dadosResposta;
    }
}
export default class LoginService 
{
    static async logar(login, senha) 
    {
        // dados do login
        const dadosLogin = { login, senha }

        // Faz uma requisição POST para a URL informada
        const respostaServidor = await fetch('http://twitelum-api.herokuapp.com/login', {
            method: 'POST',
            headers: { 'Content-type' : 'application/json' },
            body: JSON.stringify(dadosLogin)
        });

        if (!respostaServidor.ok) 
        {
            const erroServidor = await respostaServidor.json();
            alert(erroServidor.message);
            return;
        }

        const dadosAcesso = await respostaServidor.json();
        const token = dadosAcesso.token;
        return token;
    }
}
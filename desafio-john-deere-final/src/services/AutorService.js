export default class AutorService 
{
    static async salvar(nome, email, descricao, avatar)
    {
        const respostaServidor = await fetch('http://localhost:8080/api/admin/authors', {
            method: 'POST',
            headers: { 'Content-type' : 'application/json' },
            body: JSON.stringify({
                avatarUrl: avatar,
                description: descricao,
                email: email,
                id: 0,
                name: nome
            })
        });

        const autor = await respostaServidor.json();
        return autor;
    }

    static async getAutores()
    {
        const respostaServidor = await fetch('http://localhost:8080/api/admin/authors');
        const autores = await respostaServidor.json();
        return autores;
    }
}
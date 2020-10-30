export default class LivroService 
{
    static async salvar(titulo, descricao, paginas, autorId, categoriaId, dataPublicacao)
    {
        const respostaServidor = await fetch('http://localhost:8080/api/admin/books', {
            method: 'POST',
            headers: { 'Content-type' : 'application/json' },
            body: JSON.stringify({
                id: 0,
                title: titulo,
                pages: paginas,
                coverUrl: '',
                authorId: autorId,
                categoryId: categoriaId,
                description: descricao,
                releaseDate: dataPublicacao
            })
        });

        const livro = await respostaServidor.json();
        return livro;
    }

    static async getLivros()
    {
        const respostaServidor = await fetch('http://localhost:8080/api/admin/books');
        const livros = await respostaServidor.json();
        return livros;
    }
}
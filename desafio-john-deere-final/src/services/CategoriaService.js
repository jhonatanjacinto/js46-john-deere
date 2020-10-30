export default class CategoriaService 
{
    static async salvar(titulo, descricao)
    {
        const respostaServidor = await fetch('http://localhost:8080/api/admin/categories', {
            method: 'POST',
            headers: { 'Content-type' : 'application/json' },
            body: JSON.stringify({
                id: 0,
                title: titulo,
                description: descricao
            })
        });

        const categoria = await respostaServidor.json();
        return categoria;
    }

    static async getCategorias()
    {
        const respostaServidor = await fetch('http://localhost:8080/api/admin/categories');
        const listaDeCategorias = await respostaServidor.json();
        return listaDeCategorias;
    }
}
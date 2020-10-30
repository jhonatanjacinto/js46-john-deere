export default class DashboardService 
{
    static async getDashboardStatus()
    {
        const respostaServidor = await fetch('http://localhost:8080/api/admin/dashboard');
        const dadosDashboard = await respostaServidor.json();
        return dadosDashboard;
    }
}
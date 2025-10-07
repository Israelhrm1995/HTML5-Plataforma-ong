// Arquivo: js/main.js

document.addEventListener('DOMContentLoaded', function() {
    // --- Desenho do Gráfico 1: Distribuição de Recursos (Pizza) ---
    
    const canvasPizza = document.getElementById('graficoPizzaRecursos');
    if (canvasPizza) {
        const ctx = canvasPizza.getContext('2d');
        const dados = [
            { nome: 'Educação', valor: 45, cor: '#007bff' },
            { nome: 'Saúde', valor: 25, cor: '#28a745' },
            { nome: 'Infraestrutura', valor: 15, cor: '#ffc107' },
            { nome: 'Administrativo', valor: 15, cor: '#dc3545' }
        ];
        
        let total = dados.reduce((acc, d) => acc + d.valor, 0);
        let anguloInicial = 0;
        const centroX = canvasPizza.width / 2;
        const centroY = canvasPizza.height / 2;
        const raio = Math.min(centroX, centroY) * 0.8;
        
        // Laço FOR para desenhar cada fatia
        for (let i = 0; i < dados.length; i++) {
            let fatia = dados[i];
            let anguloFatia = (fatia.valor / total) * 2 * Math.PI;
            let anguloFinal = anguloInicial + anguloFatia;

            ctx.beginPath();
            ctx.fillStyle = fatia.cor;
            ctx.moveTo(centroX, centroY);
            ctx.arc(centroX, centroY, raio, anguloInicial, anguloFinal);
            ctx.closePath();
            ctx.fill();

            // Atualiza o ângulo inicial para a próxima fatia
            anguloInicial = anguloFinal;
        }
    }
    
    // NOTA: Você deve implementar a lógica para os gráficos de Linha e Barra aqui
    // (graficoLinhaVoluntarios e graficoBarrasRegiao) usando a mesma estrutura.
});
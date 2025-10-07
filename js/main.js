// Arquivo: js/main.js

document.addEventListener('DOMContentLoaded', function() {
    
    // ----------------------------------------------------------------------
    // --- Gráfico 1: Distribuição de Recursos (Pizza) ----------------------
    // ----------------------------------------------------------------------
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

            anguloInicial = anguloFinal;
        }
    }
    
    // ----------------------------------------------------------------------
    // --- Gráfico 2: Evolução de Voluntários (Linha) -------------------------
    // ----------------------------------------------------------------------
    const canvasLinha = document.getElementById('graficoLinhaVoluntarios');
    if (canvasLinha) {
        const ctx = canvasLinha.getContext('2d');
        const width = canvasLinha.width;
        const height = canvasLinha.height;
        
        const dadosLinha = [10, 15, 25, 30, 40, 35, 50, 60, 55, 70, 80, 75]; 
        const maxVoluntarios = 80; 
        const numPontos = dadosLinha.length;
        const escalaX = width / (numPontos - 1);
        const escalaY = height / maxVoluntarios;

        ctx.strokeStyle = '#007bff';
        ctx.lineWidth = 3;
        
        ctx.beginPath();
        ctx.moveTo(0, height - (dadosLinha[0] * escalaY));
        
        for (let i = 1; i < numPontos; i++) {
            const x = i * escalaX;
            const y = height - (dadosLinha[i] * escalaY);
            ctx.lineTo(x, y);
        }
        ctx.stroke();

        ctx.fillStyle = '#dc3545';
        for (let i = 0; i < numPontos; i++) {
            const x = i * escalaX;
            const y = height - (dadosLinha[i] * escalaY);
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, 2 * Math.PI); 
            ctx.fill();
        }
    }

    // ----------------------------------------------------------------------
    // --- Gráfico 3: Impacto Social por Região (Barras) ----------------------
    // ----------------------------------------------------------------------
    const canvasBarras = document.getElementById('graficoBarrasRegiao');
    if (canvasBarras) {
        const ctx = canvasBarras.getContext('2d');
        const width = canvasBarras.width;
        const height = canvasBarras.height;
        
        const dadosBarra = [
            { regiao: 'Norte', impacto: 300, cor: '#ffc107' },
            { regiao: 'Sul', impacto: 500, cor: '#28a745' },
            { regiao: 'Leste', impacto: 200, cor: '#007bff' },
            { regiao: 'Oeste', impacto: 700, cor: '#dc3545' }
        ];
        
        const maxImpacto = 700;
        const numBarras = dadosBarra.length;
        const espacoBarra = 20;
        const larguraBarra = (width - (numBarras * espacoBarra)) / numBarras; 

        for (let i = 0; i < numBarras; i++) {
            let dado = dadosBarra[i];
            let altura = (dado.impacto / maxImpacto) * height; 
            let x = i * (larguraBarra + espacoBarra) + (espacoBarra / 2);
            let y = height - altura; 

            ctx.fillStyle = dado.cor;
            ctx.fillRect(x, y, larguraBarra, altura);

            ctx.fillStyle = '#000';
            ctx.fillText(dado.regiao, x + larguraBarra / 4, height - 5);
        }
    }
});
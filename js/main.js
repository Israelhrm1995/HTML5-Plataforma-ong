// Arquivo: js/main.js
// Implementa Requisitos: Validação de Formulários, Templates JS (Galeria) e Gráficos Canvas.

/**
 * Módulo 1: Geração de Galeria (Templates JavaScript)
 * Objetivo: Gerar dinamicamente 20 itens da galeria na página 'projetos.html'.
 */
const generateGallery = () => {
    const container = document.getElementById('galeriaContainer');
    // Se o container não existe na página atual, a função retorna sem erro.
    if (!container) return; 

    // Limpa o conteúdo
    container.innerHTML = ''; 

    const totalImagens = 20;
    let htmlContent = '';

    // Uso do LAÇO DE REPETIÇÃO FOR e TEMPLATE LITERALS
    for (let i = 1; i <= totalImagens; i++) {
        const urlPequena = `https://picsum.photos/200/150?random=${i}`;
        const urlGrande = `https://picsum.photos/400/300?random=${i}`;
        
        const figuraHtml = `
            <figure class="galeria-item">
                <picture>
                    <source 
                        srcset="${urlPequena}" 
                        media="(max-width: 600px)">
                    <img 
                        src="${urlGrande}" 
                        alt="Foto de projeto social, imagem de placeholder ${i}" 
                        loading="lazy">
                </picture>
                <figcaption>Atividade ${i} (Projeto Placeholder)</figcaption>
            </figure>
        `;
        htmlContent += figuraHtml;
    }
    // Aplica o HTML gerado no container DOM
    container.innerHTML = htmlContent;
};


/**
 * Módulo 2: Validação de Formulários (Verificação de Consistência)
 * Objetivo: Implementar feedback visual de erro em tempo real e no envio.
 */
const setupFormValidation = () => {
    const validateInput = (input) => {
        let isValid = true;
        let errorMessage = '';
        
        input.classList.remove('input-error');

        // Validação de Requisito Básico
        if (input.required && input.value.trim() === '') {
            isValid = false;
            errorMessage = 'Este campo é obrigatório.';
        } 
        // Validação de E-mail
        else if (input.type === 'email' && !input.checkValidity()) {
            isValid = false;
            errorMessage = 'Por favor, insira um e-mail válido.';
        } 
        // Validação de CPF (usando REGEX e Lógica CONDICIONAL IF/ELSE)
        else if (input.name === 'cpf') {
            const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
            if (input.value.trim() !== '' && !cpfPattern.test(input.value)) {
                isValid = false;
                errorMessage = 'CPF inválido. Use o formato: 000.000.000-00.';
            }
        }
        
        let errorElement = input.nextElementSibling;
        if (!errorElement || !errorElement.classList.contains('error-message')) {
            errorElement = document.createElement('span');
            errorElement.className = 'error-message';
            input.parentNode.insertBefore(errorElement, input.nextSibling);
        }

        if (!isValid) {
            input.classList.add('input-error');
            errorElement.textContent = errorMessage;
            errorElement.style.display = 'block';
            return false;
        } else {
            input.classList.remove('input-error');
            errorElement.style.display = 'none';
            errorElement.textContent = '';
            return true;
        }
    };

    const validateForm = (form) => {
        let isFormValid = true;
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            if (!validateInput(input)) { 
                isFormValid = false;
            }
        });

        return isFormValid;
    };


    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        // 1. Listener no SUBMIT
        form.addEventListener('submit', (e) => {
            if (!validateForm(form)) {
                e.preventDefault();
            }
        });
        
        // 2. Listener no BLUR (validação em tempo real ao sair do campo)
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            if (input.type !== 'range' && input.type !== 'radio' && input.type !== 'checkbox') {
                input.addEventListener('blur', () => {
                    validateInput(input);
                });
            }
        });
    });
};


/**
 * Módulo 3: Gráficos Canvas
 * Objetivo: Desenhar 3 tipos de gráficos (Pizza, Linha, Barras) na página 'transparencia.html'.
 */
const drawCharts = () => {
    
    // --- GRÁFICO 1: Distribuição de Recursos (Pizza) ---
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
        // AJUSTE: Raio menor (0.7) para melhor visualização e rótulos
        const raio = Math.min(centroX, centroY) * 0.7; 
        
        // Laço FOR para desenhar cada fatia
        for (let i = 0; i < dados.length; i++) {
            let fatia = dados[i];
            let anguloFatia = (fatia.valor / total) * 2 * Math.PI;
            let anguloFinal = anguloInicial + anguloFatia;

            ctx.beginPath();
            ctx.fillStyle = fatia.cor;
            ctx.moveTo(centroX, centroY);
            ctx.arc(centroX, centroY, raio, anguloInicial, anguloFinal);
            ctx.lineTo(centroX, centroY);
            ctx.fill();
            
            // Desenho do Rótulo
            let anguloMedio = anguloInicial + anguloFatia / 2;
            let rotuloX = centroX + (raio / 1.3) * Math.cos(anguloMedio); 
            let rotuloY = centroY + (raio / 1.3) * Math.sin(anguloMedio); 
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.font = '12px Arial';
            ctx.fillText(`${fatia.nome} (${fatia.valor}%)`, rotuloX, rotuloY);

            anguloInicial = anguloFinal;
        }
        canvasPizza.setAttribute(
        'aria-label', 
        'Gráfico de Barras: Pessoas Impactadas por Região. Região A: 500, Região B: 750, Região C: 300.'
    );
    }


    // --- GRÁFICO 2: Evolução de Voluntários (Linha) ---
    const canvasLinha = document.getElementById('graficoLinhaVoluntarios');
    if (canvasLinha) {
        const ctx = canvasLinha.getContext('2d');
        const largura = canvasLinha.width;
        const altura = canvasLinha.height;
        const padding = 30; 
        const dados = [10, 15, 25, 30, 40, 35, 50, 60, 55, 70, 80, 75]; // 12 meses
        // AJUSTE: maxData com margem de 20% (1.2) para a linha não tocar o topo
        const maxData = Math.max(...dados) * 1.2; 
        const passoX = (largura - 2 * padding) / (dados.length - 1);
        
        const getCoordY = (valor) => altura - padding - (valor / maxData) * (altura - 2 * padding);

        ctx.strokeStyle = '#007bff';
        ctx.lineWidth = 2;
        ctx.fillStyle = 'rgba(0, 123, 255, 0.1)'; // Fundo com transparência
        
        // Desenha a Área 
        ctx.beginPath();
        ctx.moveTo(padding, getCoordY(dados[0]));
        
        for (let i = 1; i < dados.length; i++) { // LAÇO FOR
            const x = padding + i * passoX;
            ctx.lineTo(x, getCoordY(dados[i]));
        }
        
        ctx.lineTo(largura - padding, altura - padding);
        ctx.lineTo(padding, altura - padding);
        ctx.closePath();
        ctx.fill();


        // Desenha a Linha e Pontos
        ctx.beginPath();
        ctx.strokeStyle = '#007bff';
        ctx.moveTo(padding, getCoordY(dados[0]));
        
        for (let i = 1; i < dados.length; i++) { // LAÇO FOR
            const x = padding + i * passoX;
            const y = getCoordY(dados[i]);
            ctx.lineTo(x, y);
            // Desenha o ponto
            ctx.fillStyle = '#007bff';
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.stroke();

        // Eixos e Rótulos (para melhor visualização)
        ctx.strokeStyle = '#ccc';
        ctx.fillStyle = '#000';
        ctx.font = '10px Arial';
        
        // Eixo Y
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, altura - padding);
        ctx.stroke();

        // Eixo X
        ctx.beginPath();
        ctx.moveTo(padding, altura - padding);
        ctx.lineTo(largura - padding, altura - padding);
        ctx.stroke();
        
        canvasLinha.setAttribute(
        'aria-label', 
        'Gráfico de Barras: Pessoas Impactadas por Região. Região A: 500, Região B: 750, Região C: 300.'
    );
    }


    // --- GRÁFICO 3: Pessoas Impactadas por Região (Barras) ---
    const canvasBarras = document.getElementById('graficoBarrasRegiao');
    if (canvasBarras) {
        const ctx = canvasBarras.getContext('2d');
        const largura = canvasBarras.width;
        const altura = canvasBarras.height;
        const padding = 40;
        const dados = [800, 1200, 500, 950];
        const labels = ['Norte', 'Sul', 'Leste', 'Oeste'];
        
        const numBarras = dados.length;
        const larguraTotalBarras = largura - 2 * padding;
        const espaco = 20; // Espaço fixo 
        // Calcula a largura da barra subtraindo o espaço total necessário
        const barraLargura = (larguraTotalBarras - (numBarras + 1) * espaco) / numBarras;
        
        // AJUSTE: maxData com margem de 10%
        const maxData = Math.max(...dados) * 1.1; 
        const cores = ['#dc3545', '#ffc107', '#28a745', '#007bff'];

        // Linha de base (Eixo X)
        ctx.strokeStyle = '#ccc';
        ctx.beginPath();
        ctx.moveTo(padding, altura - padding);
        ctx.lineTo(largura - padding, altura - padding);
        ctx.stroke();

        // Desenha as barras
        let xPos = padding + espaco; // Começa após o primeiro espaço
        
        for (let i = 0; i < dados.length; i++) { // LAÇO FOR
            const barraAltura = (dados[i] / maxData) * (altura - 2 * padding);
            const y = altura - padding - barraAltura;

            ctx.fillStyle = cores[i % cores.length];
            ctx.fillRect(xPos, y, barraLargura, barraAltura);
            
            // Rótulo da Barra (Nome da Região)
            ctx.fillStyle = '#000';
            ctx.textAlign = 'center';
            ctx.font = '12px Arial';
            ctx.fillText(labels[i], xPos + barraLargura / 2, altura - padding + 15);
            
            // Rótulo da Barra (Valor)
            ctx.fillText(dados[i].toLocaleString('pt-BR'), xPos + barraLargura / 2, y - 5);
            
            // Incrementa a posição X para a próxima barra
            xPos += barraLargura + espaco;
        }

        canvasBarras.setAttribute(
        'aria-label', 
        'Gráfico de Barras: Pessoas Impactadas por Região. Região A: 500, Região B: 750, Região C: 300.'
         );
    }
};


/**
 * Inicialização Global
 * Garante que o DOM esteja totalmente carregado antes de iniciar os scripts.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa a validação de formulários
    setupFormValidation(); 

    // Tenta desenhar os gráficos (só terá efeito em transparencia.html)
    drawCharts();
    
    // Tenta gerar a galeria (só terá efeito em projetos.html)
    generateGallery();
});
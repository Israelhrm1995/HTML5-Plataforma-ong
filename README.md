Projeto: Instituto Mais Futuro - Site Institucional
Visão Geral
Este projeto representa o site institucional da ONG fictícia Instituto Mais Futuro, desenvolvido para cumprir os requisitos de um projeto acadêmico de desenvolvimento web.

O foco é demonstrar o domínio de HTML5 (semântica e estrutura), CSS3 (estilização e responsividade) e JavaScript (Vanilla JS) (interatividade, gráficos e geração dinâmica de conteúdo).

Estrutura de Arquivos
O projeto é estruturado nos seguintes arquivos principais:

Tecnologias
HTML5: Estrutura semântica e acessível.

CSS3: **Estilização modular, responsiva e acessível.**
  * **Arquitetura:** Estrutura modular (simulando SCSS/pré-processador) com arquivos dedicados a reset, variáveis, layouts e componentes.
  * **Design System:** Uso de Variáveis CSS (`--color-primary`, `--spacing-1`, etc.).
  * **Layouts:** Implementação de Flexbox para componentes e Grid Layout de 12 colunas para o sistema de layout principal.

JavaScript (Vanilla JS): Lógica funcional para interatividade, gráficos Canvas e geração dinâmica de conteúdo.

Arquivos HTML Principais
index.html: Página inicial e Formulário 4 (Newsletter).

sobre.html: Apresentação da ONG e elementos de multimídia (Vídeo/Áudio Placeholder).

projetos.html: Detalhamento dos projetos, Formulário 3 (Inscrição) e a Galeria de 20 Imagens Dinâmicas.

voluntariado.html: Formulário 1 (Complexo) de candidatura.

doacoes.html: Formulário 2 de doação e dados de pagamento.

transparencia.html: Demonstração de impacto com 3 Gráficos Canvas (Pizza, Linha, Barras).

contato.html: Formulário de Contato.

Requisitos e Implementações Específicas
O projeto atende a todos os requisitos solicitados:

1. Multimídia e Imagens Avançadas
20 Imagens Dinâmicas: Implementadas em projetos.html através de JavaScript inline (interpolação), utilizando for loop para gerar as estruturas.

Todas as imagens utilizam a tag <picture> para simular responsividade.

Todas possuem o atributo loading="lazy".

Vídeo e Áudio: Tags <video> e <audio> implementadas em sobre.html com links de placeholder externos (ex.: Big Buck Bunny, SoundHelix) para fins acadêmicos.

2. Formulários (4 Tipos)
Quatro formulários distintos em diferentes páginas (Voluntariado, Doação, Projetos, Newsletter), utilizando diversos input types (month, range) e atributos (pattern, fieldset).

3. Gráficos Canvas
Implementação de 3 tipos de gráficos (Pizza, Linha e Barras) na página transparencia.html, desenhados usando a API Canvas via js/main.js.

4. Estilização Avançada e Responsividade (CSS3)
Design Responsivo Completo: Uso de Media Queries para adaptar o layout a dispositivos móveis, tablets e desktops.

Menu Hambúrguer: Implementação do menu responsivo utilizando o "Checkbox Hack" no HTML/CSS, garantindo acessibilidade e funcionalidade sem JavaScript.

Grid Layout: Aplicação de um sistema de Grid de 12 colunas (classes .row, .col-lg-X, .col-md-X) e Container centralizado para alinhar o conteúdo principal.

CSS Modular: Estilização organizada em arquivos modulares (reset, typography, layouts, components).

Instruções de Execução
Clone o repositório para sua máquina local.

Abra o arquivo index.html no seu navegador de preferência.

O JavaScript (para os gráficos e a galeria dinâmica) será executado automaticamente no seu ambiente local.

Status do Projeto: ✅ Completo e Validado.
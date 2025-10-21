# Projeto: Instituto Mais Futuro - Site Institucional

## 📄 Visão Geral

Este projeto representa o site institucional de uma ONG fictícia, o **Instituto Mais Futuro**, desenvolvido para cumprir os requisitos de um projeto acadêmico de desenvolvimento web.

O foco é demonstrar o domínio de:
1.  **HTML5:** Estrutura semântica e acessível.
2.  **CSS3:** Estilização, Design System e adaptação de layout (incluindo correções de empilhamento de gráficos).
3.  **JavaScript (Vanilla JS):** Lógica funcional, interatividade, manipulação de DOM, gráficos Canvas e geração dinâmica de conteúdo.

---

## 📂 Estrutura de Arquivos

O projeto é estruturado nos seguintes diretórios e arquivos principais:

seu-projeto/
├── index.html
├── sobre.html
├── ... (todos os 7 arquivos HTML)
├── css/
│   ├── styles.css             <-- PONTO DE ENTRADA (Importa todos os módulos)
│   ├── base/
│   │   ├── _reset.css         <-- Reset, Box-sizing e Normalização
│   │   └── _variables.css     <-- Design System (Cores, Tipografia, Spacing)
│   ├── layouts/
│   │   ├── _grid.css          <-- Sistema de Grid (12 colunas) e Estrutura Principal
│   │   └── _layout.css        <-- Header, Footer, Main (Flexbox/Grid)
│   ├── components/
│   │   ├── _buttons.css       <-- Botões e estados visuais
│   │   ├── _navigation.css    <-- Menu, Dropdown, Menu Hambúrguer
│   │   ├── _forms.css         <-- Estilização e validação de Formulários
│   │   └── _cards.css         <-- Cards e Galeria
│   └── utilities/
│       └── _helpers.css       <-- Badges, Tags, Alerts e Modals (Feedback)
└── js/
    └── main.js

---

## ✨ Requisitos e Implementações Específicas

O projeto até o momento atende aos seguintes requisitos:

### 1. Gráficos Canvas e Visualização de Dados
* **Página:** `transparencia.html`
* **Implementação:** Três tipos de gráficos (Pizza, Linha e Barras) são desenhados usando a API Canvas do HTML5 via `js/main.js`.
* **Correção de Layout:** O `styles.css` foi ajustado com `display: block;` e `clear: both;` nos elementos `.chart-figure` para garantir o empilhamento vertical correto e a centralização dos gráficos, resolvendo problemas de sobreposição e alinhamento lateral.

### 2. Formulários (4 Tipos)
Quatro formulários distintos, utilizando diversos `input types` avançados, `fieldset`, `legend` e atributos como `pattern` e `required`:
* **Formulário 1 (Complexo):** Cadastro de Voluntário (`voluntariado.html`).
* **Formulário 2:** Doação e Pagamento (`doacoes.html`).
* **Formulário 3:** Inscrição em Projeto (`projetos.html`).
* **Formulário 4 (Newsletter):** Assinatura na Home (`index.html`).
* **Validação em JS:** Implementada em `js/main.js` para adicionar classes de erro (`.input-error`, `.error-message`) dinamicamente.

### 3. Multimídia e Imagens Avançadas
* **Galeria Dinâmica (20 Imagens):** Implementada em `projetos.html` com geração de 20 elementos `<figure>` usando um **laço de repetição `for` e Template Literals** em `js/main.js`.
* **Imagens Responsivas/Otimizadas:** Todas as imagens utilizam a tag `<picture>` para simular o carregamento de diferentes fontes (`<source>`) baseado no tamanho da tela.
* **Lazy Loading:** Todas as imagens possuem o atributo `loading="lazy"`.
* **Vídeo e Áudio:** Tags `<video>` e `<audio>` implementadas em `sobre.html` (utilizando URLs placeholder para demonstração de uso da tag).

---

## ⚙️ Instruções de Execução

1.  **Clone** ou **Baixe** o repositório para sua máquina local.
2.  Abra o arquivo **`index.html`** no seu navegador de preferência.
3.  Navegue para a página **`transparencia.html`** para visualizar os gráficos Canvas sendo desenhados pelo `main.js`.
4.  O JavaScript (para os gráficos, a galeria dinâmica e a validação) será executado automaticamente ao carregar as páginas.
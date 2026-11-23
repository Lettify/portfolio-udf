# Portfolio UDF

Projeto avaliativo da disciplina **Desenvolvimento Front-end para Web** (UDF), consistindo em uma landing page de portfólio pessoal para **Michael Felipe**, unindo projetos de software, trajetória acadêmica e hobbies em um layout responsivo (mobile-first) com tema escuro e destaque em roxo.

## Tecnologias utilizadas

- **HTML5** — estrutura semântica da página única (`index.html`).
- **Bootstrap `v6.0.0-alpha.1`** — grid responsivo, tema escuro (`data-bs-theme="dark"`), barra de navegação com menu lateral mobile (`drawer`), cards, badges e formulários carregados localmente.
- **CSS3 (`css/style.css`)** — customização da paleta roxa usando tokens violeta do Bootstrap e ajustes sutis de layout e transições.
- **JavaScript (`js/script.js`)** — interatividade simples e modular:
  - Fechamento automático do menu mobile (`drawer`) ao selecionar um link;
  - Filtro de categorias na seção **Projetos & Hobbies** (*Todos*, *Projetos* e *Hobbies*);
  - Validação do formulário de contato com feedback visual na página;
  - Atualização automática do ano no rodapé.

## Estrutura do repositório

```text
portfolio-udf/
├── css/
│   ├── bootstrap.min.css   # CSS compilado do Bootstrap
│   └── style.css           # Tema roxo e estilos complementares do portfólio
├── img/
│   ├── perfil.jpg
│   ├── projeto-controle-vendas.jpg
│   ├── projeto-nutallis.jpg
│   ├── projeto-let-assistant.jpg
│   ├── hobby-mlbb.jpg
│   ├── hobby-bf6.jpg
│   └── hobby-discord-bot.jpg
├── js/
│   ├── bootstrap.bundle.min.js  # JavaScript compilado do Bootstrap
│   └── script.js                # Scripts de filtro, menu mobile e validação do formulário
├── index.html                   # Landing page principal do portfólio
└── README.md                    # Documentação do projeto
```

## Como executar localmente

Não é necessário instalar dependências ou executar etapa de build.

1. Clone o repositório:
   ```bash
   git clone https://github.com/Lettify/portfolio-udf.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd portfolio-udf
   ```
3. Abra o arquivo `index.html` diretamente no navegador (ou utilize uma extensão como o **Live Server** no VS Code).

## Autor

**Michael Felipe** — Brasília, DF
- GitHub: [github.com/Lettify](https://github.com/Lettify)
- LinkedIn: [linkedin.com/in/michael-felipe-ss](https://www.linkedin.com/in/michael-felipe-ss/)
- Instagram: [@michael.fss](https://instagram.com/michael.fss)
- E-mail: contato@michael.dev.br

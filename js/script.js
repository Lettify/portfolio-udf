// 1. Filtro dos cards de Projetos e Hobbies
const botoesFiltro = document.querySelectorAll(".btn-filtro");
const cards = document.querySelectorAll(".item-destaque");

botoesFiltro.forEach((botao) => {
    botao.addEventListener("click", () => {
        const filtro = botao.dataset.filtro;

        // Destaca o botão clicado
        botoesFiltro.forEach((b) => {
            b.classList.remove("btn-solid");
            b.classList.add("btn-outline");
        });
        botao.classList.remove("btn-outline");
        botao.classList.add("btn-solid");

        // Mostra ou esconde os cards conforme a categoria
        cards.forEach((card) => {
            const categoria = card.dataset.categoria;
            if (filtro === "todos" || categoria === filtro) {
                card.classList.remove("d-none");
            } else {
                card.classList.add("d-none");
            }
        });
    });
});

// 2. Validação simples do formulário de contato
const form = document.getElementById("formContato");
const mensagemStatus = document.getElementById("mensagemStatus");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || !email.includes("@") || mensagem === "") {
        mensagemStatus.textContent = "Por favor, preencha todos os campos corretamente.";
        mensagemStatus.className = "alert theme-danger mt-4";
        return;
    }

    mensagemStatus.textContent = "Obrigado, " + nome + "! Sua mensagem foi enviada com sucesso.";
    mensagemStatus.className = "alert theme-success mt-4";
    form.reset();
});

// 3. Fecha o menu mobile ao clicar em um link
const menuMobile = document.getElementById("menuNavegacao");
const linksMenu = document.querySelectorAll("#menuNavegacao .nav-link");

linksMenu.forEach((link) => {
    link.addEventListener("click", () => {
        if (menuMobile.open) {
            bootstrap.Drawer.getOrCreateInstance(menuMobile).hide();
        }
    });
});

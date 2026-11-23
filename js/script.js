const botoesFiltro = document.querySelectorAll(".btn-filtro");
const cards = document.querySelectorAll(".item-destaque");

botoesFiltro.forEach((botao) => {
    botao.addEventListener("click", () => {
        const filtro = botao.dataset.filtro;

        botoesFiltro.forEach((b) => {
            b.classList.remove("btn-solid");
            b.classList.add("btn-outline");
        });
        botao.classList.remove("btn-outline");
        botao.classList.add("btn-solid");

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

const menuMobile = document.getElementById("menuNavegacao");
const linksMenu = document.querySelectorAll("#menuNavegacao .nav-link");

linksMenu.forEach((link) => {
    link.addEventListener("click", () => {
        if (menuMobile.open) {
            bootstrap.Drawer.getOrCreateInstance(menuMobile).hide();
        }
    });
});

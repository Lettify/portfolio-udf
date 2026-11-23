// Aguarda o carregamento completo do HTML antes de iniciar os scripts
document.addEventListener("DOMContentLoaded", () => {
    atualizarAnoRodape();
    configurarMenuMobile();
    configurarFiltroDestaques();
    configurarFormularioContato();
});

// Atualiza o ano exibido no rodapé
function atualizarAnoRodape() {
    const elementoAno = document.getElementById("anoAtual");
    if (elementoAno) {
        elementoAno.textContent = new Date().getFullYear();
    }
}

// Fecha automaticamente o menu lateral (drawer) no celular após clicar em um link
function configurarMenuMobile() {
    const menuDrawer = document.getElementById("menuNavegacao");
    if (!menuDrawer) return;

    const linksMenu = menuDrawer.querySelectorAll(".nav-link");
    linksMenu.forEach((link) => {
        link.addEventListener("click", () => {
            if (menuDrawer.open && window.bootstrap && window.bootstrap.Drawer) {
                window.bootstrap.Drawer.getOrCreateInstance(menuDrawer).hide();
            }
        });
    });
}

// Filtra os cards da seção "Projetos & Hobbies" por categoria
function configurarFiltroDestaques() {
    const botoesFiltro = document.querySelectorAll(".btn-filtro");
    const itens = document.querySelectorAll(".item-destaque");

    if (!botoesFiltro.length || !itens.length) return;

    botoesFiltro.forEach((botao) => {
        botao.addEventListener("click", () => {
            const categoriaSelecionada = botao.dataset.filtro;

            // Atualiza a aparência e estado acessível dos botões
            botoesFiltro.forEach((btn) => {
                const ativo = btn === botao;
                btn.classList.toggle("btn-solid", ativo);
                btn.classList.toggle("btn-outline", !ativo);
                btn.setAttribute("aria-pressed", String(ativo));
            });

            // Mostra apenas os cards que correspondem ao filtro escolhido
            itens.forEach((item) => {
                const corresponde =
                    categoriaSelecionada === "todos" ||
                    item.dataset.categoria === categoriaSelecionada;
                item.classList.toggle("d-none", !corresponde);
            });
        });
    });
}

// Valida os campos do formulário de contato e exibe confirmação na tela
function configurarFormularioContato() {
    const formulario = document.getElementById("formContato");
    const campoNome = document.getElementById("nome");
    const campoEmail = document.getElementById("email");
    const campoMensagem = document.getElementById("mensagem");
    const feedback = document.getElementById("feedbackContato");

    if (!formulario || !campoNome || !campoEmail || !campoMensagem || !feedback) return;

    const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const campos = [campoNome, campoEmail, campoMensagem];

    // Remove o estado de erro assim que o usuário volta a digitar
    campos.forEach((campo) => {
        campo.addEventListener("input", () => {
            campo.classList.remove("is-invalid");
        });
    });

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const nome = campoNome.value.trim();
        const email = campoEmail.value.trim();
        const mensagem = campoMensagem.value.trim();

        const nomeValido = nome.length >= 2;
        const emailValido = padraoEmail.test(email);
        const mensagemValida = mensagem.length >= 10;

        aplicarEstadoCampo(campoNome, nomeValido);
        aplicarEstadoCampo(campoEmail, emailValido);
        aplicarEstadoCampo(campoMensagem, mensagemValida);

        if (!nomeValido || !emailValido || !mensagemValida) {
            feedback.classList.add("d-none");
            const primeiroInvalido = formulario.querySelector(".is-invalid");
            if (primeiroInvalido) primeiroInvalido.focus();
            return;
        }

        // Exibe retorno visual seguro usando textContent
        feedback.textContent = `Obrigado, ${nome}! Sua mensagem foi validada e registrada com sucesso.`;
        feedback.classList.remove("d-none");

        formulario.reset();
        campos.forEach((campo) => campo.classList.remove("is-valid", "is-invalid"));
    });
}

function aplicarEstadoCampo(campo, valido) {
    campo.classList.toggle("is-valid", valido);
    campo.classList.toggle("is-invalid", !valido);
}

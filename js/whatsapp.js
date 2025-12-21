document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-orcamento");

    // Se não existir formulário na página, não faz nada
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;
        const servico = document.getElementById("servico").value;
        const mensagem = document.getElementById("mensagem").value;

        const texto = `
Olá, gostaria de solicitar um orçamento.

Nome: ${nome}
E-mail: ${email}
Telefone: ${telefone}
Serviço: ${servico}

Detalhes:
${mensagem}
        `;

        // TROQUE PELO NÚMERO REAL DA EMPRESA
        const numeroWhatsApp = "9999999999999";

        const url =
            "https://wa.me/" +
            numeroWhatsApp +
            "?text=" +
            encodeURIComponent(texto);

        window.open(url, "_blank");
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const formOrcamento = document.getElementById("form-orcamento");

  if (!formOrcamento) return;

  const telefone = document.getElementById("telefone");
  const nome = document.getElementById("nome");
  const mensagem = document.getElementById("mensagem");

  // Nome: permite apenas letras (com ou sem acentos) e espaços
  if (nome) {
    nome.addEventListener("input", function () {
      // Remove números e caracteres especiais
      this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
      // Remove espaços duplos
      this.value = this.value.replace(/\s{2,}/g, " ");
    });
    
    // Remove espaços no início ou fim ao perder o foco (blur)
    nome.addEventListener("blur", function () {
      this.value = this.value.trim();
    });
  }

  // Telefone: permite apenas números e limita o tamanho (DDD + 9 dígitos = 11 caracteres)
  if (telefone) {
    telefone.addEventListener("input", function () {
      this.value = this.value.replace(/\D/g, ""); // Remove qualquer coisa que não seja número
      if (this.value.length > 11) {
        this.value = this.value.slice(0, 11);
      }
    });
  }

  // Mensagem: remove tags HTML para evitar textos/códigos desnecessários
  if (mensagem) {
    mensagem.addEventListener("input", function () {
      this.value = this.value.replace(/<[^>]*>?/gm, "");
    });
  }

  // Validação geral no momento do envio
  formOrcamento.addEventListener("submit", function (e) {
    let isValid = true;
    let errorMessage = "";

    if (nome && nome.value.trim().length < 3) {
      errorMessage += "Por favor, insira um nome válido.\n";
      isValid = false;
    }

    if (telefone && telefone.value.length < 10) {
      errorMessage += "Digite um telefone válido com código de área (DDD).\n";
      isValid = false;
    }

    if (!isValid) {
      alert(errorMessage);
      e.preventDefault(); // Impede o envio padão do form HTML
      e.stopImmediatePropagation(); // Impede que o whatsapp.js seja executado e abra a janela
    }
  });
});

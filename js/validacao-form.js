const telefone = document.getElementById("telefone");

telefone.addEventListener("input", () => {
  telefone.value = telefone.value.replace(/\D/g, "");
});

document.getElementById("form-orcamento").addEventListener("submit", function(e) {
  if (telefone.value.length < 10) {
    alert("Digite um telefone válido com DDD.");
    e.preventDefault();
  }
});

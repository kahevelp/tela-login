document.getElementById("Entrar").onclick = function(event) {
    event.preventDefault(); // impede o envio automático do formulário

    const nome = document.getElementById("usuario").value.trim();

    if (nome === "") {
        alert("Por favor, digite seu nome antes de entrar!");
    } else {
        // Armazena o nome no navegador (para usar na próxima página)
        localStorage.setItem("usuario", nome);

        // Mostra a mensagem e abre outra página
        alert("Bem-vindo(a), " + nome + "! Redirecionando...");
        window.location.href = "home.html"; // muda de página
    }
};

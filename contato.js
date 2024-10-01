//adicionar um id="formulario" na tag form
//id="nome" no input nome
//id="email" no input email
//id="mensagem" na textarea mensagem

document.getElementById("formulario").addEventListener("submit", function(event) {event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("sugestoes").value;
    const check = document.getElementById("custom-checkbox").checked;

    const dados = {
        nome,
        email,
        mensagem,
        news: check
    };

    localStorage.setItem("dados", JSON.stringify(dados));

    document.getElementById("formulario").reset();
    alert("Sua mensagem foi enviada.")
})
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value; // Correto
    const senha = document.getElementById("senha").value; // Correto

    const dados = {
        email,
        senha,
    };

    localStorage.setItem("dados", JSON.stringify(dados));

    document.getElementById("formulario").reset();
    alert("E-mail e senha não identificados, tente novamente!"); 
});

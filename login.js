document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value; 
    const senha = document.getElementById("senha").value; 

    const dados = {
        email,
        senha,
    };

    localStorage.setItem("dados", JSON.stringify(dados));

    document.getElementById("formulario").reset();
    alert("E-mail e senha não identificados, tente novamente!"); 
});

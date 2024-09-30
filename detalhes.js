const produtos = [
    {
        "id": 1,
        "nome": "Bolo Arco-íris",
        "descricao": "blabla",
        "preco": 139.00,
       /* "quantidade": document.getElementById("quantidade").value,*/
        "imagem": "img/Bolo_Arco-iris.png"
    },
    {
        "id": 2,
        "nome": "Brigadeiro de Paçoca",
        "descricao": "Brigadeiro feito com paçoca tipo rolha 10g, passado no açúcar refinado, decorado.",
        "preco": 3.00,
        /*"quantidade": document.getElementById("quantidade").value,*/
        "imagem": "img/Brigadeiro_de_Pacoca.png"
    },
    {
        "id": 3,
        "nome": "Trufa de Maracujá",
        "descricao": "bleble",
        "preco": 8.00,
        /*"quantidade": document.getElementById("quantidade").value,*/
        "imagem": "img/Trufa_de_Maracuja.png"
    },
    {
        "id": 4,
        "nome": "Torta de Limão",
        "descricao": "bleble",
        "preco": 89.00,
        /*"quantidade": document.getElementById("quantidade").value,*/
        "imagem": "img/Torta_de_Limao_Siciliano.png"
    },
    {
        "id": 5,
        "nome": "Donut de Brigadeiro",
        "descricao": "bleble",
        "preco": 12.00,
        /*"quantidade": document.getElementById("quantidade").value,*/
        "imagem": "img/Donut_de_Brigadeiro.png"
    },
    {
        "id": 6,
        "nome": "Macaroon de Pistache",
        "descricao": "bleble",
        "preco": 15.00,
        /*"quantidade": document.getElementById("quantidade").value,*/
        "imagem": "img/Macaroon_de_Pistache.png"
    }
];

function mostrarDescricao(indice) {
    const produto = produtos[indice];
    const imgDetalhes = document.getElementById("detalhes-img");
    descricao(produto.id, produto.nome, produto.descricao, produto.preco, produto.imagem);
    const nomeProdutoFormatado = produto.nome.replace(/\s+/g, '-').toLowerCase(); // substitui espaços por '-'
    const novaUrl = `${window.location.origin}/vitrine/${nomeProdutoFormatado}`;
    
    // Usa history.pushState para alterar a URL sem recarregar a página
    window.history.pushState({produto: produto}, '', novaUrl);
}
function descricao(id, nome, descricao, preco, imagem) {    
    const container = document.getElementsByTagName("section"); 
    const posicao = id - 1;
    container[0].innerHTML = `
        <div id="voltar"><a href="#"><span class="seta"></span> Voltar</a></div>
        <div class="detalhes">
            <div id="detalhes-img" style="background-image: url('${imagem}');"></div>
            <div id="descricao">
                <h3 id="titulo_descricao">${nome}</h3>
                <hr class="linha-rosa" />
                <h4>Descrição</h4>
                <p id="p_descricao">${descricao}</p>
                <div id="adicionar">
                    <span id="preco_descricao">R$ ${preco},00</span>
                    <input type="number" name="quantidade" id="quantidade" value="1" min="1" max="100" step="1">
                    <button>Adicionar ao carrinho</button>
                </div>
            </div>
        </div>
    `; 
    if (posicao == 0) {
        document.getElementById("detalhes-img").style.height = "440px";
        document.getElementById("detalhes-img").style.backgroundPositionY = "-240px";        
    } else{} 
}

window.addEventListener('popstate', function(event) {
    if (event.state && event.state.produto) {
        const produto = event.state.produto;
        descricao(produto.nome, produto.descricao, produto.preco, produto.imagem);
    } else {        
        window.location.href = '/vitrine.html';
    }
});

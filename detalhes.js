const produtos = [
    {
     "id": 1,
     "nome": "Bolo Arco-íris",
     "descricao": "O bolo colorido de arco-íris que transmite muita alegria em cada mordida. A massa é vibrante e colorida, tornando cada fatia uma obra de arte comestível. Ao morder, você é transportado para um mundo de sabores deliciosos e únicos. O recheio suave de mousse de leite Ninho com frutas vermelhas é simplesmente divino, combinando a doçura cremosa do leite com a acidez frutada das frutas vermelhas, criando uma experiência de sabor equilibrada e deliciosa.",
     "preco": 139.00,    
     "imagem": "img/Bolo_Arco-iris.png"
 },
 {
     "id": 2,
     "nome": "Brigadeiro de Paçoca",
     "descricao": "Uma explosão de sabor brasileiro em cada mordida! O brigadeiro de paçoca combina a textura cremosa e a doçura intensa do brigadeiro com o toque crocante e sabor único do amendoim. Perfeito para quem ama a tradição dos doces brasileiros, essa delícia vai te conquistar com seu sabor rústico e envolvente.",
     "preco": 3.00,     
     "imagem": "img/Brigadeiro_de_Pacoca.png"
 },
 {
     "id": 3,
     "nome": "Trufa de Maracujá",
     "descricao": "Uma trufa que é puro contraste de sabores! Com o recheio sedoso e vibrante de maracujá, essa trufa traz o equilíbrio perfeito entre a doçura do chocolate e o toque cítrico da fruta. Cada mordida é um convite para uma experiência tropical intensa e deliciosa.",
     "preco": 8.00,     
     "imagem": "img/Trufa_de_Maracuja.png"
 },
 {
     "id": 4,
     "nome": "Torta de Limão",
     "descricao": "A sobremesa perfeita para quem ama frescor e sabor! Nossa Torta de Limão é feita com uma base crocante e amanteigada, recheada com um creme suave de limão que equilibra doçura e acidez na medida certa. Finalizada com um suspiro dourado e leve, cada fatia é uma explosão refrescante de sabor.",
     "preco": 89.00,     
     "imagem": "img/Torta_de_Limao_Siciliano.png"
 },
 {
     "id": 5,
     "nome": "Donut de Brigadeiro",
     "descricao": "Um clássico reinventado para os chocólatras de plantão! O Donut de Brigadeiro traz uma massa fofinha e delicada, coberta com uma generosa camada de brigadeiro cremoso e decorado com granulado crocante. Uma verdadeira festa para os sentidos, combinando texturas e sabores de maneira irresistível.",
     "preco": 12.00,     
     "imagem": "img/Donut_de_Brigadeiro.png"
 },
 {
     "id": 6,
     "nome": "Macaroon de Pistache",
     "descricao": "Elegância e sabor refinado em uma pequena joia doce! O Macaron de Pistache possui uma casquinha crocante que derrete na boca, com um recheio suave e marcante de pistache. Um doce que combina delicadeza e sofisticação, perfeito para quem busca uma experiência única e requintada.",
     "preco": 15.00,
     "imagem": "img/Macaroon_de_Pistache.png"
 }
];

function mostrarDescricao(indice) {
    const produto = produtos[indice];
    const imgDetalhes = document.getElementById("detalhes-img");
    descricao(produto.id, produto.nome, produto.descricao, produto.preco, produto.imagem);
    const nomeProdutoFormatado = produto.nome.replace(/\s+/g, '-').toLowerCase();
    const novaUrl = `${window.location.origin}/vitrine/${nomeProdutoFormatado}`;
    
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

                    <button onclick="adicionarCarrinho(${id})">Adicionar ao carrinho</button>
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

var carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function adicionarCarrinho(id){
    const produto = produtos.find(produto => produto.id === id);
    const quantidadeInput = document.getElementById("quantidade").value;
    const quantidade = parseInt(quantidadeInput) || 1;

    const produtoCarrinho = carrinho.find(item => item.id === id);

    if(produtoCarrinho){
        produtoCarrinho.quantidade += quantidade;
    } else {
        carrinho.push({
            id: produto.id,
            nome: produto.nome,
            descricao: produto.descricao,
            preco: produto.preco,
            imagem: produto.imagem,
            quantidade: quantidade
        });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert(`${produto.nome} foi adicionado ao carrinho!`);

    atualizarContador();
}

function atualizarContador() {
    var carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    
    const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);

    document.getElementById("contador").textContent = totalItens;
}



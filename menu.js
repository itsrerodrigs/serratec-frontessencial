function carregarMenu() {
    const menuHTML = `
    <header>
        <nav>
            <a href="../landing.html"><img src="img/logo.svg" alt="logo"/></a>              
            <ul class="menumain">
                <li><a href="../vitrine.html" id="vitrine">Produtos</a></li>
                <li><a href="../vendedores.html" id="vendedores">Quem somos</a></li>
                <li><a href="../contato.html" id="contato">Contato</a></li>
            </ul>
            <div id="login">
            <div id="carrinho">
                <img src="img/cart.svg" alt="Carrinho de Compras" onclick="abrirCarrinho()"/>
                <span id="contador">0</span>
            </div>
                <img src="img/Vector.png" />
                <a href="">Login</a>
            </div>
            <input type="checkbox" id="menu-toggle" />
            <label for="menu-toggle" class="menu-icon">
                &#9776;
            </label>
            <ul class="menu">
            <li><a href="../vitrine.html" id="vitrine">Produtos</a></li>
            <li><a href="../vendedores.html" id="vendedores">Quem somos</a></li>
            <li><a href="../contato.html" id="contato">Contato</a></li>
            </ul>
        </nav>
    </header>
    <div id="modal" class="modal">
        <div class="modal-conteudo">
            <span class="fechar" onclick="fecharCarrinho()">&times;</span>
            <h2>Produtos no Carrinho</h2>
            <div id="tabela-container"></div>
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', menuHTML);
    const currentPath = window.location.pathname;

    if (currentPath.includes('vitrine.html')) {
        document.getElementById('vitrine').classList.add('active');
    } else if (currentPath.includes('vendedores.html')) {
        document.getElementById('vendedores').classList.add('active');
    } else if (currentPath.includes('contato.html')) {
        document.getElementById('contato').classList.add('active');
    }
}

function abrirCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    const tabelaContainer = document.getElementById('tabela-container');
    tabelaContainer.innerHTML = '';

    if (carrinho.length > 0) {
        var tabelaHTML = '<table><tr><th>Produto</th><th>Quantidade</th><th>Preço</th></tr>';
        var valorTotal = 0;
        
        carrinho.forEach(produto => {
            tabelaHTML += `
                <tr>
                    <td>${produto.nome}</td>
                    <td style="text-align:center;">${produto.quantidade}</td>
                    <td>R$ ${produto.preco.toFixed(2)}</td>
                </tr>`;
            
            valorTotal += produto.preco * produto.quantidade; 
        });

        tabelaHTML += `
            <tr>
                <td colspan="2" style="text-align: left;"><strong>Valor Total:</strong></td>
                <td><strong>R$ ${valorTotal.toFixed(2)}</strong></td>
            </tr>`;
            
        tabelaHTML += '</table>';
        tabelaContainer.innerHTML = tabelaHTML;
        tabelaContainer.innerHTML += '<div class="limpar"><button id="btlimpar" onclick="limparCarrinho()">Limpar Carrinho</button></div>';
    } else {
        tabelaContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
    }

    document.getElementById('modal').style.display = 'block';
}

function fecharCarrinho() {
    document.getElementById('modal').style.display = 'none';
}

function limparCarrinho() {
    localStorage.removeItem("carrinho");
    console.log("Carrinho foi esvaziado.");
    atualizarContador();
    abrirCarrinho();
}
function atualizarContador() {
    var carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    
    const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);

    document.getElementById("contador").textContent = totalItens;
}

window.onload = carregarMenu();
window.addEventListener('DOMContentLoaded', function() {
    atualizarContador();
});

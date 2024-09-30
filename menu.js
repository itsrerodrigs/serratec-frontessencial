function carregarMenu() {
    const menuHTML = `
        <header>
        <nav>
            <a href="landing.html"><img src="img/logo.svg" alt="logo"/></a>              
            <ul>
                <li><a href="/">Quem somos</a></li>
                <li><a href="/">Contato</a></li>
            </ul>
            <div id="login">
            <div id="carrinho">
                <img src="img/cart.svg" alt="Carrinho de Compras" />
                <span id="contador">0</span>
            </div>
                <img src="img/Vector.png" />
                <a href="">Login</a>
            </div>
        </nav>
    </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', menuHTML);
}

window.onload = carregarMenu();
window.addEventListener('DOMContentLoaded', function() {
    atualizarContador();
});

const icon = document.getElementById('IconMenu');
const MenuMobile = document.getElementById('MobileMenu');
const exit = document.getElementById('fechar');

// Função para abrir o menu mobile
const abrirMenu = () => {
    MenuMobile.style.display = 'block';  // Exibe o menu mobile
    exit.style.display = 'block';        // Exibe o ícone de fechar
    icon.style.display = 'none';         // Esconde o ícone de abrir
};

// Função para fechar o menu mobile
const fecharMenu = () => {
    MenuMobile.style.display = 'none';   // Esconde o menu mobile
    exit.style.display = 'none';         // Esconde o ícone de fechar
    icon.style.display = 'block';        // Mostra o ícone de abrir
};

// Função para ajustar o menu conforme o tamanho da tela
const checkWindowSize = () => {
    if (window.innerWidth > 800) {
        // Quando a tela for maior que 800px
        MenuMobile.style.display = 'none'; // Esconde o menu mobile
        exit.style.display = 'none';       // Esconde o ícone de fechar
        icon.style.display = 'none';       // Esconde o ícone de abrir
    } else {
        // Quando a tela for menor que 800px
        if (MenuMobile.style.display === 'block') {
            exit.style.display = 'block';  // Mostra o ícone de fechar se o menu estiver aberto
            icon.style.display = 'none';   // Esconde o ícone de abrir
        } else {
            icon.style.display = 'block';   // Mostra o ícone de abrir se o menu estiver fechado
            exit.style.display = 'none';    // Esconde o ícone de fechar
        }
    }
};

// Adiciona os eventos de clique aos ícones
icon.addEventListener('click', abrirMenu);
exit.addEventListener('click', fecharMenu);

// Adiciona os eventos para verificar o tamanho da tela
window.addEventListener('resize', checkWindowSize);
window.addEventListener('load', checkWindowSize);

export default function initMenuMobile() {
    const menuButton = document.querySelector("[data-menu='button']");
    const menuList = document.querySelector("[data-menu='list']");
    // Seleciona todos os links que estão DENTRO do menu
    const menuLinks = document.querySelectorAll('[data-menu="list"] a');

    // Verifica se os elementos existem para evitar erros
    if (menuButton && menuList) {
        
        function toggleMenu(event) {
            // Previne comportamento duplo em alguns celulares touch
            if (event.type === 'touchstart') event.preventDefault();
            menuList.classList.toggle('active');
            menuButton.classList.toggle('active');
        }

        function closeMenu() {
            // Força o fechamento removendo a classe active
            menuList.classList.remove('active');
            menuButton.classList.remove('active');
        }

        // Adiciona evento de abrir/fechar no botão (Click e Touch)
        menuButton.addEventListener('click', toggleMenu);
        menuButton.addEventListener('touchstart', toggleMenu);

        // Adiciona evento de FECHAR em cada link do menu
        menuLinks.forEach((link) => {
            link.addEventListener('click', closeMenu);
        });
    }
}
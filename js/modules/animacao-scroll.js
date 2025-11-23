export default function initAnimationScroll() {
    // Seleciona todos os elementos que têm a classe 'hidden' do CSS novo
    const hiddenElements = document.querySelectorAll('.hidden');

    // Cria o observador que detecta quando o elemento entra na tela
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // Se o elemento estiver visível na tela
            if (entry.isIntersecting) {
                // Adiciona a classe 'show' que muda a opacidade para 1 no CSS
                entry.target.classList.add('show');
            } else {
                // Opcional: Se quiser que a animação repita ao sair e voltar, descomente a linha abaixo
                // entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.1 // Dispara quando 10% do elemento aparecer
    });

    // Manda o observador vigiar cada elemento escondido
    hiddenElements.forEach((el) => observer.observe(el));
}
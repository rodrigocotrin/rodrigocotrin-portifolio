export default function initAnimationScroll() {
    const animElements = document.querySelectorAll('.hidden, [data-anime="js-scroll"]');

    if (!animElements.length) return;

    // Garante que os elementos com data-anime tenham a classe hidden inicialmente se não tiverem
    animElements.forEach((el) => {
        if (!el.classList.contains('hidden')) {
            el.classList.add('hidden');
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    animElements.forEach((el) => observer.observe(el));
}
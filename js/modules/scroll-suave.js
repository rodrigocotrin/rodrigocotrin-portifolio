export default function initScrollSuave() {
    const linksInternos = document.querySelectorAll("[data-menu='suave'] a[href^='#']");

    function scrollToSection(event) {
        const href = event.currentTarget.getAttribute("href");
        if (href && href !== '#') {
            const section = document.querySelector(href);
            if (section) {
                event.preventDefault();
                const headerOffset = 70;
                const elementPosition = section.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    }
    
    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}
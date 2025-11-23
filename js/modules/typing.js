export default function initTyping() {
  const sentenceElement = document.querySelector(".principal__sentence");

  if (!sentenceElement) return;

  // MUDANÇA ESTRATÉGICA: Termos que o cliente busca
  const roles = [
    "Especialista em Google Meu Negócio",
    "Automação de Vendas no WhatsApp",
    "Criação de Sites de Alta Conversão",
    "Engenharia de Software Aplicada"
  ];
  
  let roleIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  function typeWriter() {
    const currentRole = roles[roleIndex];
    let speed = 80; // Um pouco mais rápido para parecer ágil

    if (isDeleting) {
      sentenceElement.innerHTML = currentRole.substring(0, letterIndex - 1);
      letterIndex--;
      speed = 40;
    } else {
      sentenceElement.innerHTML = currentRole.substring(0, letterIndex + 1);
      letterIndex++;
    }

    if (!isDeleting && letterIndex === currentRole.length) {
      speed = 2000; // Tempo de leitura
      isDeleting = true;
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      speed = 500;
    }

    setTimeout(typeWriter, speed);
  }

  typeWriter();
}
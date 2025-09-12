export default function initTyping() {
  // Seleciona o elemento onde a animação vai acontecer.
  const sentenceElement = document.querySelector(".principal__sentence");

  // Garante que o código não quebre se o elemento não existir.
  if (!sentenceElement) return;

  // Nossa lista estratégica de cargos.
  const roles = ["Desenvolvedor Backend", "Analista de Dados", "Engenheiro de Software"];
  let roleIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  function typeWriter() {
    const currentRole = roles[roleIndex];
    let speed = 100; // Velocidade padrão de digitação

    // Lógica para digitar ou apagar
    if (isDeleting) {
      // Se está apagando, remove uma letra
      sentenceElement.innerHTML = currentRole.substring(0, letterIndex - 1);
      letterIndex--;
      speed = 100; // Apaga mais rápido
    } else {
      // Se está digitando, adiciona uma letra
      sentenceElement.innerHTML = currentRole.substring(0, letterIndex + 1);
      letterIndex++;
    }

    // Lógica para mudar de estado (de digitar para apagar e vice-versa)
    if (!isDeleting && letterIndex === currentRole.length) {
      // Terminou de digitar a palavra, pausa e começa a apagar
      speed = 2000; // Pausa longa no final da palavra
      isDeleting = true;
    } else if (isDeleting && letterIndex === 0) {
      // Terminou de apagar, vai para a próxima palavra
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length; // O '%' faz o loop voltar ao início
      speed = 500; // Pausa curta antes de começar a nova palavra
    }

    setTimeout(typeWriter, speed);
  }

  // Inicia a função assim que o script é carregado
  typeWriter();
}
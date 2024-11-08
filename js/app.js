const mensagensFofas = [
  "Você é a razão pela qual eu sorrio todos os dias.",
  "Te amo mais do que as palavras podem expressar.",
  "Cada momento com você é uma bênção.",
  "Você faz meu coração bater mais rápido.",
  "Sua presença ilumina meu dia.",
  "Estou tão feliz por ter você na minha vida.",
  "Você é meu sonho que virou realidade.",
  "Seu sorriso é a coisa mais linda que já vi.",
  "Com você, a vida é muito mais doce.",
  "Amar você é a melhor coisa que já me aconteceu."
];

document.getElementById('novaMensagem').addEventListener('click', function() {
  const mensagemAleatoria = mensagensFofas[Math.floor(Math.random() * mensagensFofas.length)];
  document.getElementById('mensagem').textContent = mensagemAleatoria;
});

// 1. Apanhar todos os links dentro da lista do menu
const menuLinks = document.querySelectorAll('nav ul li a');

// 2. Apanhar o nosso checkbox invisível
const checkbox = document.getElementById('menu-toggle');

// 3. Para cada link, adicionamos uma regra de clique
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Tira o visto do checkbox, o que fará o seu CSS fechar o menu com a transição
        checkbox.checked = false; 
    });
});

// Fecha o menu ao apertar a tecla ESC
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    const checkbox = document.getElementById('menu-toggle');
    // Se a tecla for ESC e o menu estiver aberto, ele desmarca o checkbox
    if (checkbox.checked) {
      checkbox.checked = false;
    }
  }
});
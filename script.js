// Função para detectar se um elemento está visível na janela de visualização
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para adicionar a classe de animação quando o elemento aparece na visualização
function animateOnScroll() {
    var elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('animate');
        }
    });
}

// Função para mostrar/esconder o botão de WhatsApp
function toggleWhatsAppButton() {
    var whatsappButton = document.querySelector('.whatsapp');
    if (window.scrollY > 200) {
        whatsappButton.classList.add('visible');
    } else {
        whatsappButton.classList.remove('visible');
    }
}

// Adiciona o evento de rolagem
window.addEventListener('scroll', function() {
    animateOnScroll();
    toggleWhatsAppButton();
});

// Chama as funções ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    animateOnScroll(); // Para animar elementos que já estão na visualização ao carregar a página
});



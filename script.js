// Efeito de parallax - movimento de fundo
window.addEventListener('scroll', () => {
    const campoBg = document.getElementById('campo-bg');
    const cidadeBg = document.getElementById('cidade-bg');
    
    let scrollPos = window.scrollY;
    
    // Movimento de fundo no Campo
    campoBg.style.transform = 'translateY(' + scrollPos * 0.4 + 'px)';
    
    // Movimento de fundo na Cidade
    cidadeBg.style.transform = 'translateY(' + scrollPos * 0.4 + 'px)';
});


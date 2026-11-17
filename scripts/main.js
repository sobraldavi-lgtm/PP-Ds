// Troca imagens quebradas por um aviso, em vez do ícone de erro.
document.querySelectorAll('img').forEach(function (img) {
    function trocar() {
        var aviso = document.createElement('div');
        aviso.className = 'sem-imagem';
        aviso.textContent = img.alt || 'Imagem indisponível';
        img.replaceWith(aviso);
    }
    img.addEventListener('error', trocar);
    if (img.complete && img.naturalWidth === 0) trocar();
});

const personagens = document.querySelectorAll ('.personagem');

personagens.forEach ((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        personagem.classList.add('selecionado')
        const personagemSelecionado = document.querySelector ('.selecionado')
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado')

        const imagemPersonagemGrande = document.querySelector('.personagem-grande')
        imagemPersonagemGrande.src = ".src/imagens/card-jean-gray.png";
    })
})
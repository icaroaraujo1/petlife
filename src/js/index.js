var elementosPerguntas = document.querySelectorAll('.pergunta')
elementosPerguntas.forEach(function (pergunta) {
    pergunta.addEventListener('click', function () {
        pergunta.classList.toggle('ativo')
    })
})

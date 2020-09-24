var question = document.querySelectorAll('.question')

question.forEach((item, indice) => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling
        const questionIcon = item.firstElementChild
        if (answer.classList.contains('hide')) {
            answer.classList.remove('hide')
            answer.classList.add('show')
            questionIcon.classList.remove('fa-plus')
            questionIcon.classList.add('fa-minus')
        } else {
            answer.classList.remove('show')
            answer.classList.add('hide')
            questionIcon.classList.remove('fa-minus')
            questionIcon.classList.add('fa-plus')
        }
    })
})
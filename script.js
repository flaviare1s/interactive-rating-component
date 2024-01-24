function ranking() {
    const rankingEl = document.querySelector('#numbers')
    const numberRankingEl = Array.from(rankingEl.querySelectorAll('.number'))
    const ratingEl = document.querySelector('#rating')

    numberRankingEl.forEach((number, index) => {
        number.addEventListener('click', () => {
            ratingEl.innerHTML = `${index + 1}`
            number.style.backgroundColor = 'hsl(216, 12%, 54%)'
        })
    })
}

function submit() {
    const submitButtonEl = document.querySelector('#submit')
    const ratingStateEl = document.querySelector('.rating-state')
    const thankyouStateEl = document.querySelector('.thankyou-state')

    submitButtonEl.addEventListener('click', () => {
        ratingStateEl.style.display = 'none'
        thankyouStateEl.style.display = 'block'
    })
}

function main() {
    ranking()
    submit()
}

main()
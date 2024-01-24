function ranking() {
    const rankingEl = document.querySelector('#numbers')
    const numberRankingEl = Array.from(rankingEl.querySelectorAll('.number'))
    const ratingEl = document.querySelector('#rating')

    console.log(numberRankingEl)

    numberRankingEl.forEach((number, index) => {
        number.addEventListener('click', () => {
            ratingEl.innerHTML = `${index + 1}`
        })
    })
}

function submit() {
    const submitButtonEl = document.querySelector('#submit')

    submitButtonEl.addEventListener('click', () => {
        alert('teste')
    })
}


function main() {
    ranking()
    submit()
}

main()
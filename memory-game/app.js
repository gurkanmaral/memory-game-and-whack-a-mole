const cardArray = [
    {
        name: 'byakuya',
        img: 'images/byakuya.png'
    },

    {
        name: 'iceboy',
        img: 'images/iceboy.png'
    },
    {
        name: 'ichigo',
        img: 'images/ichigo.png'
    },
    {
        name: 'shunsiu',
        img: 'images/shunsiu.png'
    },   
    {
        name: 'aizen',
        img: 'images/aizen.png'
    },
    {
        name: 'kenpachi',
        img: 'images/kenpachi.png'
    },
    {
        name: 'byakuya',
        img: 'images/byakuya.png'
    },
    {
        name: 'iceboy',
        img: 'images/iceboy.png'
    },
    {
        name: 'ichigo',
        img: 'images/ichigo.png'
    },
    {
        name: 'shunsiu',
        img: 'images/shunsiu.png'
    },  
    {
        name: 'aizen',
        img: 'images/aizen.png'
    },
    {
        name: 'kenpachi',
        img: 'images/kenpachi.png'
    },
]


cardArray.sort( () => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')

let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for(let i = 0; i < 12; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/captains.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src','images/captains.png')
        cards[optionTwoId].setAttribute('src','images/captains.png')
        alert('you clicked the same image')

    }
    if (cardsChosen[0] == cardsChosen[1]){
        alert('you got a match')
        cards[optionOneId].setAttribute('src','images/white.png')
        cards[optionTwoId].setAttribute('src','images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }else {
        cards[optionOneId].setAttribute('src','images/captains.png')
        cards[optionTwoId].setAttribute('src','images/captains.png')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if(cardsWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = 'Congratulations you found it all'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)

    if(cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
    
}
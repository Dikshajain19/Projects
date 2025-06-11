const cardArray=[
    {
        name: 'fries ',
        img:'fries.png',
    },
    {
        name:'cheeseburger',
        img:'cheeseburger.png',
    },
    {
        name:'pizza',
        img:'pizza.png',
    },
    {
        name:'ice-cream',
        img:'ice-cream.png',
    },
    {
        name:'hotdog',
        img:'hotdog.png',
    },
    {
        name:'milkshake',
        img:'milkshake.png',
    },
    {
        name: 'fries ',
        img:'fries.png',
    },
    {
        name:'cheeseburger',
        img:'cheeseburger.png',
    },
    {
        name:'pizza',
        img:'pizza.png',
    },
    {
        name:'ice-cream',
        img:'ice-cream.png',
    },
    {
        name:'hotdog',
        img:'hotdog.png',
    },
    {
        name:'milkshake',
        img:'milkshake.png',
    }
]
cardArray.sort(()=> 0.5 - Math.random());
const gridDisplay=document.querySelector('#grid');
const resultDisplay=document.querySelector('#result');
let cardChosen = [];
let cardsChosenIds = [];
let cardsWon = [];

function createBoard(){
    for(let i=0 ; i < cardArray.length ;i++){
        const card=document.createElement('img');
        card.setAttribute('src','blank.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipcard);
        gridDisplay.appendChild(card);
    }

}
createBoard();

function checkMatch(){
    const cards=document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    console.log('check for match !');
    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src' , 'blank.png');
        cards[optionTwoId].setAttribute('src' , 'blank.png');
        alert('you have clicked the same image');

    }
    if(cardChosen[0] == cardChosen[1]){
        alert('You dount a match ');
        cards[optionOneId].setAttribute('src' ,'white.png');
        cards[optionTwoId].setAttribute('src' ,'white.png');
        cards[optionOneId].removeEventListener('click' , flipcard);
        cards[optionTwoId].removeEventListener('click' , flipcard);
        cardsWon.push(cardChosen);
    }
    else{
        cards[optionOneId].setAttribute('src' ,'blank.png');
        cards[optionTwoId].setAttribute('src' ,'blank.png');
        alert('sorry try again');

    }
    cardChosen = [];
    cardsChosenIds = [];
    resultDisplay.textContent=cardsWon.length;

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.innerHTML='Congratsss you found them all';
    }
    else{

    }
}

function flipcard(){
    let cardid=this.getAttribute('data-id');
    console.log(cardArray[cardid]);
    cardChosen.push(cardArray[cardid].name);
    cardsChosenIds.push(cardid);
    console.log('clicked' , cardid);
    console.log(cardChosen);
    this.setAttribute('src' , cardArray[cardid].img);
    if(cardChosen.length === 2){
        setTimeout(checkMatch , 500);
    }
}

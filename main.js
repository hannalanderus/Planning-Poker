/***** global variables *****/
const showButton = document.getElementById('showButton');
const resetButton = document.getElementById('resetButton');

/* store cards that´s been clicked */
const cardHolder = [];


const cardClicked = (clickFunction) => {

/* get elements from html document */
    const cardZero = document.getElementById('cardZero');
    const cardHalf = document.getElementById('cardHalf');
    const cardOne = document.getElementById('cardOne');
    const cardTwo = document.getElementById('cardTwo');
    const cardThree = document.getElementById('cardThree');
    const cardFive = document.getElementById('cardFive');
    const cardEight = document.getElementById('cardEight');
    const cardThirteen = document.getElementById('cardThirteen');
    const cardTwentyOne = document.getElementById('cardTwentyOne');
    const cardThirtyFour = document.getElementById('cardThirtyFour');
    const cardHundred = document.getElementById('cardHundred');
    const cardQuestionMark = document.getElementById('cardQuestionMark');
    const cardWrapper = document.getElementById('cardWrapper');
    const selectedCardWrapper = document.getElementById('selectedCardWrapper');

    /* if statement, so you only can add 3 cards to the selectedCard Deck*/
    if(cardHolder.length < 3){
    	const target = clickFunction.currentTarget;
/*get the class from html, split it in to an array so you can target the image and the card number. use '' to split it between the two parts*/
        const classParts = target.getAttribute('class').split(' ');
        /* split the class in classParts so you can target img and number. In imgParts target img before _ , and numberParts target the number after _ hence 0 and 1*/
        const imgParts = classParts[0].split('_');
        const numParts = classParts[1].split('_');
        
/* Make it to an array and push the target to the cardHolder, the div id, the class plus the number */
        cardHolder.push({card: target, number: numParts[1]});
/* remove the target (the card) from the first possition and add it to the selectedCardWrapper*/
        target.remove(target);
        selectedCardWrapper.appendChild(target);
/* When the card have been moved add the image in top. The path to the image */
        target.innerHTML="<img src='image/"+imgParts[1]+"'>";
    } else{
        const message = document.getElementById('errorText');
        message.innerHTML = "SORRY, YOU ARE ONLY ALLOWED TO PICK THREE CARDS";
    }
};

/* when you click the card run the function cardClicked */

cardZero.addEventListener('click', cardClicked);
cardHalf.addEventListener('click', cardClicked);
cardOne.addEventListener('click', cardClicked);
cardTwo.addEventListener('click', cardClicked);
cardThree.addEventListener('click', cardClicked);
cardFive.addEventListener('click', cardClicked);
cardEight.addEventListener('click', cardClicked);
cardThirteen.addEventListener('click', cardClicked);
cardTwentyOne.addEventListener('click', cardClicked);
cardThirtyFour.addEventListener('click', cardClicked);
cardHundred.addEventListener('click', cardClicked);
cardQuestionMark.addEventListener('click', cardClicked);

/* When you click on show button, show the first card that you clicked on that ended up in the cardHolder array and show the number in the card, not the image */
showButton.addEventListener('click', function (){
   cardHolder[0].card.innerHTML = cardHolder[0].number;
    
});

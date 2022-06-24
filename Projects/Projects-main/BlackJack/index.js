let cardsArray= [];
let sum = 0;
let isAlive = false;
let message = "";
let startingChips = 150;

let player = {
    name: "Sam",
    chips: startingChips,
}

let messegeEl = document.getElementById("message");
let sumEl = document.getElementById("sum");
let cardsEl = document.getElementById("cards");
let cashEl = document.getElementById("cash");

function startGame(){
    sum=0;
    cardsArray= [];
    isAlive = true;
    renderGame();
    cashEl.textContent = player.name +  ": $" + player.chips;
}

function renderGame() {
    if (isAlive===true) {
        sumEl.textContent = "Sum: " + sum;
        cardsEl.textContent ="Cards: " + cardsArray;

        if (sum<=20) {
            message = "Do you want to draw a new card?";
        } else if (sum === 21) {
            message = "You have got BlackJack";
            player.chips=player.chips+100;
            isAlive = false;
        } else if(sum>21) {
            message = "You are out of the game!! Press Restart to Play Again"
            isAlive = false;
            player.chips= player.chips-10;
        }

        messegeEl.textContent = message;
        cashEl.textContent = player.name +  ": $" + player.chips;
    }
}

function newCard() {
    
    if (player.chips>0){
        if (isAlive === true && sum<=20) {
            let card = Math.floor(Math.random()*(13)+1);
            
            if (card===11){
                sum += 10;
                card="J";
            } else if (card===12){
                sum += 10;
                card="Q";
            } else if (card===13){
                sum += 10;
                card="K";
            } else if (card===1){
                card="A";
                if(sum<=10){
                    sum+=11;
                } else{
                    sum+=1;
                }
            } else{
                sum += card;
                card = card;
            }
            cardsArray.push(card);
        } 
        renderGame();
    } else{
        messegeEl.textContent="Please Reset the Game. You dont have enough funds to play"
    }
}

function playAgain(){
    sum=0;
    cardsArray= [];
    sumEl.textContent = "Sum: "+ sum;
    cardsEl.textContent = "Cards: " + cardsArray;
    messegeEl.textContent="Do you want to draw a new card?";
    isAlive=true;
}

function resetGame() {
    player.chips=startingChips;
    sum=0;
    cardsArray= [];
    cardsEl.textContent ="Cards: " + cardsArray;
    messegeEl.textContent="Wanna Play a Round?"
    sumEl.textContent = "Sum: ";
    cashEl.textContent = "";
    isAlive= false;
}
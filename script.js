let playerCards = [];
let dealerCards = [];
let balance = 1000;

const dealButton = document.getElementById("deal-button");
const hitButton = document.getElementById("hit-button");
const standButton = document.getElementById("stand-button");
const playerDiv = document.getElementById("player-cards");
const dealerDiv = document.getElementById("dealer-cards");
const messageDiv = document.getElementById("message");
const balanceDiv = document.getElementById("balance");

dealButton.addEventListener("click", deal);
hitButton.addEventListener("click", hit);
standButton.addEventListener("click", stand);

function deal() {
  playerCards = [drawCard(), drawCard()];
  dealerCards = [drawCard()];
  updateUI();
}

function hit() {
  playerCards.push(drawCard());
  updateUI();
}

function stand() {
  while (dealerCards.reduce((a,b)=>a+b,0) < 17) {
    dealerCards.push(drawCard());
  }
  checkWinner();
}

function drawCard() {
  return Math.floor(Math.random() * 11) + 1;
}

function updateUI() {
  playerDiv.innerHTML = "Player: " + playerCards.join(", ");
  dealerDiv.innerHTML = "Dealer: " + dealerCards.join(", ");
  balanceDiv.innerHTML = "Balance: $" + balance;
}

function checkWinner() {
  const playerSum = playerCards.reduce((a,b)=>a+b,0);
  const dealerSum = dealerCards.reduce((a,b)=>a+b,0);
  if (playerSum > 21) messageDiv.innerHTML = "You busted!";
  else if (dealerSum > 21 || playerSum > dealerSum) messageDiv.innerHTML = "You win!";
  else if (playerSum < dealerSum) messageDiv.innerHTML = "You lose!";
  else messageDiv.innerHTML = "Push!";
}

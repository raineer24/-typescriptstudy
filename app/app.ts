/// <reference path="customer.ts" />
/// <reference path="game.ts" />

let newGame: Game;

// add click handler to the start game button
document.getElementById('ShopNOW')!.addEventListener('click', () => {
    let player:Customer = new Customer();
    player.name = Utility.getInputValue('customername');

    let problemCount: number = Number(Utility.getInputValue('problemCount'));
    let factor: number = Number(Utility.getInputValue('factor'));

    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});

// add click handler to the calculate score button
document.getElementById('calculate')!.addEventListener('click', () => {
    newGame.calculateScore();
});
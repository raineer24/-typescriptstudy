import { Customer } from  './customer';
import { Game } from  './game';
import * as Helpers from './utility';

let newGame: Game;

// add click handler to the start game button
document.getElementById('ShopNOW')!.addEventListener('click', () => {
    let player:Customer = new Customer();
    player.name = Helpers.getValue('customername');

    let problemCount: number = Number(Helpers.getValue('problemCount'));
    let factor: number = Number(Helpers.getValue('factor'));

    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});

// add click handler to the calculate score button
document.getElementById('calculate')!.addEventListener('click', () => {
    newGame.calculateScore();
});
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = require("./customer");
const game_1 = require("./game");
const Helpers = require("./utility");
let newGame;
document.getElementById('ShopNOW').addEventListener('click', () => {
    let player = new customer_1.Customer();
    player.name = Helpers.getValue('customername');
    let problemCount = Number(Helpers.getValue('problemCount'));
    let factor = Number(Helpers.getValue('factor'));
    newGame = new game_1.Game(player, problemCount, factor);
    newGame.displayGame();
});
document.getElementById('calculate').addEventListener('click', () => {
    newGame.calculateScore();
});
//# sourceMappingURL=app.js.map
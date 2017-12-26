class Customer {
    formatName() {
        return this.name.toUpperCase();
    }
}
class Utility {
    static getInputValue(elementID) {
        let inputElement = document.getElementById(elementID);
        return inputElement.value;
    }
}
class Scoreboard {
    constructor() {
        this.results = [];
    }
    addResult(newResult) {
        this.results.push(newResult);
    }
    updateScoreboard() {
        let output = '<h2>Scoreboard</h2>';
        for (let index = 0; index < this.results.length; index++) {
            let result = this.results[index];
            output += '<h4>';
            output += result.customerName + ': ' + result.score + '/' + result.problemCount + ' for factor ' + result.factor;
            output += '</h4>';
        }
        let scoresElement = document.getElementById('scores');
        scoresElement.innerHTML = output;
    }
}
class Game {
    constructor(Customer, problemCount, factor) {
        this.Customer = Customer;
        this.problemCount = problemCount;
        this.factor = factor;
        this.scoreboard = new Scoreboard();
    }
    displayGame() {
        let gameForm = '';
        for (let i = 1; i <= this.problemCount; i++) {
            gameForm += '<div class="form-group">';
            gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label">';
            gameForm += String(this.factor) + ' x ' + i + ' = </label>';
            gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + i + '" size="5" /></div>';
            gameForm += '</div>';
        }
        let gameElement = document.getElementById('game');
        gameElement.innerHTML = gameForm;
        document.getElementById('calculate').removeAttribute('disabled');
    }
    calculateScore() {
        let score = 0;
        for (let i = 1; i <= this.problemCount; i++) {
            let answer = Number(Utility.getInputValue('answer' + i));
            if (i * this.factor === answer) {
                score++;
            }
        }
        let result = {
            customerName: this.Customer.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor
        };
        this.scoreboard.addResult(result);
        this.scoreboard.updateScoreboard();
        document.getElementById('calculate').setAttribute('disabled', 'true');
    }
}
let newGame;
document.getElementById('ShopNOW').addEventListener('click', () => {
    let player = new Customer();
    player.name = Utility.getInputValue('customername');
    let problemCount = Number(Utility.getInputValue('problemCount'));
    let factor = Number(Utility.getInputValue('factor'));
    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});
document.getElementById('calculate').addEventListener('click', () => {
    newGame.calculateScore();
});
//# sourceMappingURL=app.js.map
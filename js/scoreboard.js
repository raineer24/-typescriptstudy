"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.Scoreboard = Scoreboard;
//# sourceMappingURL=scoreboard.js.map
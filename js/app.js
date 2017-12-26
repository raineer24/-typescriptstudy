function shopNow() {
    let customerName = getInputValue('customername');
    logCustomer(customerName);
    totalCost(80, customerName);
    totalCost(-5, customerName);
}
function logCustomer(name = 'Eos  Customer') {
    console.log(`New grocery list for customer:  ${name}`);
}
function totalCost(score, customerName = 'Eos A!pp!! Customer') {
    let logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    let scoreElement = document.getElementById('totalCost');
    scoreElement.innerText = `${score} - ${customerName}`;
    logger(`Score: ${score}`);
}
function getInputValue(elementID) {
    let inputElement = document.getElementById(elementID);
    if (inputElement.value === ' ') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
document.getElementById('ShopNOW').addEventListener('click', shopNow);
let logMessage = (message) => console.log(message);
function logError(error) {
    console.error(error);
}
let firstCustomer = new Customer();
firstCustomer.name = 'Maria';
console.log(firstCustomer.formatName());
//# sourceMappingURL=app.js.map
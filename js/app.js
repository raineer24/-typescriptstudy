function shopNow() {
    var customerName = getInputValue('customername');
    logCustomer(customerName);
    totalCost(80);
}
function logCustomer(name) {
    if (name === void 0) { name = 'Eos Applicants Customer'; }
    console.log("New grocery list for customer: " + name);
}
function totalCost(score, customerName) {
    if (customerName === void 0) { customerName = 'Eos APPLICATION Customer'; }
    var scoreElement = document.getElementById('totalCost');
    scoreElement.innerText = score + " - " + customerName;
}
function getInputValue(elementID) {
    var inputElement = document.getElementById(elementID);
    if (inputElement.value === ' ') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
document.getElementById('ShopNOW').addEventListener('click', shopNow);
//# sourceMappingURL=app.js.map
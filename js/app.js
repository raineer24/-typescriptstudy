function shopNow() {
    var customerName = 'John';
    logCustomer(customerName);
    var messagesElement = document.getElementById('messages');
    if (messagesElement === null) {
        return messagesElement;
    }
    else {
        console.log(messagesElement);
        messagesElement = document.getElementById('messages');
    }
    messagesElement.innerText = 'Welcome to Eos! Show now....';
    console.log('Starting new grocery list');
}
function logCustomer(name) {
    console.log("New grocery list for customer: " + name);
}
document.getElementById('ShopNOW').addEventListener('click', shopNow);
//# sourceMappingURL=app.js.map
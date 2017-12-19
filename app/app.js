function shopNow() {
    var messsagesElement = document.getElementById('messages');
    messsagesElement.innerText = 'Welcome to Eos! Show now....';
    console.log('Starting new grocery list');
}
document.getElementById('ShopNOW').addEventListener('click', shopNow);

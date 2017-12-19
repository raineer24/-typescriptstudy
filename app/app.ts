function shopNow() {
	// starting a new game
	
	let customerName: string = 'John';
	logCustomer(customerName);

  let messagesElement: HTMLElement | null = document.getElementById('messages');
  
  if (messagesElement === null ) {
    return messagesElement;
  }
  else {
    console.log(messagesElement);
    messagesElement = document.getElementById('messages');
  }

	messagesElement!.innerText = 'Welcome to Eos! Show now....';
	console.log('Starting new grocery list');

}

	function logCustomer(name) {
		console.log(`New grocery list for customer: ${name}`);
	}

document.getElementById('ShopNOW').addEventListener('click', shopNow);
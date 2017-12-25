function shopNow() {
	// starting a new game
	
	let customerName: string = 'John';
	logCustomer(customerName);

  let messagesElement: HTMLElement | null = document.getElementById('messages');
  messagesElement!.innerText = 'Welcome to Eos! Show now....';
 console.log(messagesElement);

}



	function logCustomer(name: string): void {
		console.log(`New grocery list for customer: ${name}`);
	}

document.getElementById('shopNow')!.addEventListener('click', shopNow);
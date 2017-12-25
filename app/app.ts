function shopNow() {
    // starting a new game
    
    let customerName: string | undefined = getInputValue('customername');
    logCustomer(customerName);

totalCost(80);

}
function logCustomer(name: string = 'Eos Customer'): void {
    console.log(`New grocery list for customer: ${name}`);
}

function totalCost(score: number,  customerName: string = 'Eos Customer'): void {
 let scoreElement: HTMLElement | null = document.getElementById('totalCost');
  scoreElement!.innerText = `${score} - ${customerName}`;
}

function getInputValue(elementID: string): string | undefined {
  let inputElement : HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

  if (inputElement.value === ' ') {
    return undefined;
  }
  else {
    return inputElement.value;
  }
  

}



  

document.getElementById('shopNow')!.addEventListener('click', shopNow);
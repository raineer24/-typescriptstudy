/// <reference path="customer.ts" />


function shopNow() {
    // starting a new game
    
    let customerName: string | undefined = getInputValue('customername');
    logCustomer(customerName);

totalCost(80, customerName);
totalCost(-5, customerName);

}
function logCustomer(name: string = 'Eos  Customer'): void {
    console.log(`New grocery list for customer:  ${name}`);
}

function totalCost(score: number,  customerName: string = 'Eos A!pp!! Customer'): void {
 
  let logger : (value: string)  => void;

  if(score < 0) {
    logger = logError;
  }
  else {
    logger = logMessage;
  }

  let scoreElement: HTMLElement | null = document.getElementById('totalCost');
  scoreElement!.innerText = `${score} - ${customerName}`;

  logger(`Score: ${score}`);
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



  

document.getElementById('ShopNOW')!.addEventListener('click', shopNow);

let logMessage = (message: string) => console.log(message);

function logError(error: string): void {
  console.error(error);
}


let firstCustomer: Customer = new Customer();
firstCustomer.name = 'Maria';
console.log(firstCustomer.formatName());
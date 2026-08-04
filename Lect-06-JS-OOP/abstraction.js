class BankAccount {
    #balance;
    #owner;
  constructor(owner, balance) {
    this.#owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }


  getBalance(){
    return this.#balance;
  }
}

const account = new BankAccount("Vikas", 1000);

account.deposit(500);
console.log(account.getBalance());  
// account.#balance=4000;
// account.balance=4000;
// console.log(account.balance); //
console.log(account.getBalance());  


// console.log(account.balance); // 1500\
// account.balance=4000;
// console.log(account.balance); // 4000


// only public and private access modifier
//  balance=2000  (public access modifier
//  #balance= 2000 ( private access modifier
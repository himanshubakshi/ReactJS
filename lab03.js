//
//
// Create Lab03.js file.
// Create the following class;Run it using Node.
//
// > class called Account
// > has an initial balance of 1000$
// > deposit and withdraw methods that take in an amount and modify balance
// > After three withdrawals deduct 2$ for every withdraw henceforth.
// > Print the statement that denotes the transaction type and amount.
// Statement lists all the transactions with the type and amount
// > method to print balance
//
// Create an instance of Account say acc1
// and deposit 200$ and withdraw 100$ six times.
// Print the balance and statement.
//

class Account
{

    constructor()
    {
      this.balance = 1000
      this.numberOfWithdrawls = 0
    }

    deposit(amount)
    {
        if(amount >= 0)
        {
          this.balance += amount;
          console.log(`Deposited $${amount}, total balance = ${this.balance}`)
        }
    }

    withdraw(amount)
    {
        if(amount >= 0)
        {
            this.numberOfWithdrawls++
            this.balance -= amount


            if(this.numberOfWithdrawls > 3)
            {
              this.balance -= 2;
              console.log(`Deducted $2 for withdrawl no. ${this.numberOfWithdrawls}`)
            }
            console.log(`Withdrew $${amount}, total balance = ${this.balance}`)

        }
    }

    printBalance()
    {
          console.log(`Current Balance is: ${this.balance}`)
    }



}


var account = new Account();
account.deposit(200)
account.withdraw(100)
account.withdraw(100)
account.withdraw(100)
account.withdraw(100)
account.withdraw(100)
account.withdraw(100)
let bankAccount = {
  accountHolder: "SLA",
  balance: 10000,

  deposit: function(amount) {
    if (amount > 0) {
      bankAccount.balance += amount;
      console.log("Deposited: " + amount + ", New Balance: " + bankAccount.balance);
    } else {
      console.log("Invalid deposit amount.");
    }
  },

  withdraw: function(amount) {
    if (amount > 0 && amount <= bankAccount.balance) {
      bankAccount.balance -= amount;
      console.log("Withdrawn: " + amount + ", Remaining Balance: " + bankAccount.balance);
    } else {
      console.log("Invalid withdrawal or insufficient funds.");
    }
  },

  displayBalance: function() {
    console.log("Account Holder: " + bankAccount.accountHolder + ", Balance: " + bankAccount.balance);
  }
};

bankAccount.displayBalance();
bankAccount.deposit(5000);
bankAccount.withdraw(3000);
bankAccount.withdraw(20000);
bankAccount.displayBalance();

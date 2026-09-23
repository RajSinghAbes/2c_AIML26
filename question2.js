class bankaccount{
    
    constructor(accountno,holdername,balance){
        this.accountno= accountno;
        this.holdername= holdername;
        this.balance= balance;
         
    }
    deposit(amount){
        this.amount+= amount;
        console.log (amount+"deposited.");
    }
    withdraw(amount){
        if(amount>this.balance){
            console.log("insufficent balance.");
        }else{
            this.balance -= amount;
            console.log("withdraw.")
        }
    }
    displaybalance(){
        console.log("balance:",this.balance);
    }
    static bankinfo(){
        console.log('bank:ABC Bank');
    }
}
let a1 = new bankaccount(149,"Raj",5000);
a1.deposit(2000);
a1.withdraw(3000);
a1.displaybalance();
class Bank
{
    constructor(c,add){
        this.code=c;
        this.address=add;
    }
    manages(){
      ///fill something here
    }
    maintain(){
    //fill something here
    }
}

class ATM{

    constructor(loc,m){
        this.locations=loc;
        this.managedby=m;
    }
    Identifies(){
      if(this.verifypwd()){
         console.log('user is an authorised user');
      }else{
          console.log('user is not authorsied');
      }
    }
    transaction(){
     this.modifies();
    }
}

class ATMTransaction{

    constructor(tran,date,typ,amnt,pbal){
        this.transactionId=tran;
        this.date=date;
        this.type=typ;
        this.amount=amnt;
        this.postbalance=pbal;
    }
    modifies(){

        console.log('the modified balance is',this.postbalance);
    }
    
}
class Customer{
    constructor(num,bal,pwd){
        this.number=accno;
        this.address=add;
        this.dob=dob;
        this.cardno=cno;
        this.pin=pwd;
        
    }
        verifypwd(password){
           if(this.pin==pwd){
               return true;
           }else{
            return false;
           }            
        }
}

class Account{
     constructor(num,bal){
        this.number=num;
        this.balance=bal;
         
     }
        deposit(amnt){
            this.balance=this.balance+amnt;
        }
        Withdraw(amnt){
           this.balance== this.balance-amnt;
        }
        createtransaction(){
            console.log('transaction is initiated');
        }
    
}
class SavingAccount extends Account{
     constructor(num,bal){
       super(num,bal)
    }
    Withdraw(amnt){
    
        this.bal=this.bal-amnt;
    }
}
class CurrentAccount extends Account{
     constructor(num,al){
        super(num,bal)
    }
}
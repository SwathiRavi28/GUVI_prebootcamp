class TV_class{
 constructor(brand,channel=1,On_status=true,volume=50){
     this.brand=brand;
    }
    
   increase(){
    if(this.volume==100){
        alert('volume is too high');
    }  else{
        this.volume=this.volume+1;
        console.log("increased volume is ",this.volume);
    }
     
   }

   decrease(){

  
    if(this.volume===0){
        alert('Volume is too low');
    } 
    else{
        this.volume=this.volume-1;
        console.log("decreased volume is ",this.volume);
    }
    
   }
   reset(){
       this.volume=50;
       this.channel=1;
       console.log(`volume is resert now to ${this.volume} and the channel is set to default ${this.channel}`);

   }

   setChannel(newChannel){
       if(newChannel>=1 && newChannel<=50){
        this.channel=newChannel;
       }
       
   }

   status(){
       return `Panosonic at channel ${this.channel}, volume ${this.volume}`;
   }  
}

const obj=new TV_class('panasonic');
console.log(obj);

//console.log(obj);

class LED extends TV_class{
   
    constructor(brand,...arr1){
        super(brand,);
     // TV_class.call(this);
    //  TV_class.call(this);

      this.screen_thicknesss=arr1[0];
      this.energy_usage=arr1[1];
      this.lifespan=arr1[2];
      this.Refresh_rate= arr1[3];
    }
    
    
       viewingAngle(){
           console.log('this is viewing angle');
       }

       backlight(){
           console.log('this is backlight');
       }

       DisplayDetails(){
           console.log(`The screen thicknes is ${this.screen_thicknesss}`);
           console.log(`The energy usage is ${this.energy_usage}`);
           console.log(`The lifespan is ${this.lifespan}`);
           console.log(`The refresh rate is ${this.Refresh_rate}`);

       }
}

var arr1=['20','80','lifespan','40']

const ledObj=new LED('LG',...arr1);
console.log(ledObj);

class Plasma extends TV_class{

    constructor(brand,...arr){
        super(brand)

        this.screen_thicknesss=arr[0];
        this.energy_usage=arr[1];
        this.lifespan=arr[2];
        this.Refresh_rate= arr[3];
      } 

      viewingAngle(){
        console.log('this is viewing angle');
    }

    backlight(){
        console.log('this is backlight');
    }

    DisplayDetails(){
        console.log(`The screen thicknes is ${this.screen_thicknesss}`);
        console.log(`The energy usage is ${this.energy_usage}`);
        console.log(`The lifespan is ${this.lifespan}`);
        console.log(`The refresh rate is ${this.Refresh_rate}`);
    }

}

var arr=['10','100','lifespan','30'];

const plasma_obj=new Plasma('SONY',...arr);
console.log(plasma_obj);
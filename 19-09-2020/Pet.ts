interface PetData {
    Age: number;
    Food_Type: string;
    Accessories?: string;
    price: number;
    Species: string;
}
class Avail_pet {
    details: Array<PetData> = new Array();
   
    constructor() {
        this.details = []
        
    }
    public Available_PetData(det: PetData) {
        this.details.push(det);
    }
    public get_Availdata(): Array<PetData> {
        
        return this.details

    }

}
class Req_pet {
    enquiry_data: Array<string> = new Array();
    result:Array<PetData>=new Array();
    private foo:Avail_pet = new Avail_pet();
constructor(data:string){
    this.enquiry_data.push(data)
   }
   
req_data(){
    
    this.result= this.foo.get_Availdata();

}
}

const petDetail = new Avail_pet();
petDetail.Available_PetData({ Species: "Dog", Age: 2, Food_Type: "Dry,Wet", Accessories: "Cages,Tag", price: 5000 })
petDetail.Available_PetData({ Species: "Fish", Age: .5, Food_Type: "Fish_Food", Accessories: "Tank", price: 1000 });
petDetail.Available_PetData({ Species: "Kitten", Age: 3, Food_Type: "Dry,Wet", Accessories: "Cages,crates", price: 20000 });
petDetail.Available_PetData({ Species: "Rat", Age: 1, Food_Type: "spieces", Accessories: "Cages", price: 4000 });
petDetail.Available_PetData({ Species: "Rabbit", Age: 2, Food_Type: "Dry,Wet", Accessories: "Cages", price: 5000 });
petDetail.Available_PetData({ Species: "Small_Animal", Age: 1, Food_Type: "Dry", Accessories: "Cages", price: 10000 });
petDetail.Available_PetData({ Species: "Dog", Age: 2, Food_Type: "Dry,Wet", Accessories: "Cages,Tag", price: 25000 });
petDetail.Available_PetData({ Species: "Dog", Age: 3, Food_Type: "Dry,Wet", Accessories: "Cages,Tag", price: 50000 });
petDetail.Available_PetData({ Species: "Dog", Age: 1, Food_Type: "Dry,Wet", Accessories: "Cages,Tag", price: 15000 });
petDetail.Available_PetData({ Species: "Kitten", Age: 3, Food_Type: "Dry,Wet", Accessories: "Cages,crates", price: 2000 });
petDetail.Available_PetData({ Species: "Kitten", Age: 2, Food_Type: "Dry,Wet", Accessories: "Cages,crates", price: 30000 });
petDetail.Available_PetData({ Species: "Kitten", Age: 1, Food_Type: "Dry,Wet", Accessories: "Cages,crates", price: 10000 });

const objRequest = new Req_pet("dog");
objRequest.req_data();

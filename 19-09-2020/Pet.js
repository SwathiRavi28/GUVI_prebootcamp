var Avail_pet = /** @class */ (function () {
    function Avail_pet() {
        this.details = new Array();
        this.details = [];
    }
    Avail_pet.prototype.Available_PetData = function (det) {
        this.details.push(det);
    };
    Avail_pet.prototype.get_Availdata = function () {
        console.log(this.details);
        return this.details;
    };
    return Avail_pet;
}());
var Req_pet = /** @class */ (function () {
    function Req_pet(data) {
        this.enquiry_data = new Array();
        this.foo = new Avail_pet();
        this.enquiry_data.push(data);
    }
    Req_pet.prototype.req_data = function () {
        console.log(this.foo.get_Availdata());
        return this.foo.get_Availdata();
    };
    return Req_pet;
}());
var petDetail = new Avail_pet();
petDetail.Available_PetData({ Species: "Dog", Age: 2, Food_Type: "Dry,Wet", Accessories: "Cages,Tag", price: 5000 });
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
var objRequest = new Req_pet("dog");
objRequest.req_data();

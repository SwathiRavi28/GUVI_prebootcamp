class Movie{
    constructor(t,s,r="PG"){
        
        this.title=t;
        this.studio=s;
        this.rating=r;
       
    }
  method(){
      console.log(this.title+" , "+this.studio+" , "+this.rating);
  }
  static getPg(mov){
    var RatingPG=mov.filter((item)=>{return item.rating=="PG"})
     return RatingPG;
  }
}
let a=new Movie("Ther","lica productions","PG11");
a.method();
console.log("********************************************")
let b=new Movie("Ther","lica productions");
b.method();
console.log("********************************************");
let c=new Movie("Casino Royale","Eon productions","PG13");
c.method();
console.log("********************************************");
let mov=[];
     mov.push (aa=new Movie("vishwarupam","Raj Kamal Films","PG"));
     mov.push (bb=new Movie("I","Oscar films","PG13"));
     mov.push (cc=new Movie("paruthiveeran","Studio Green","PG"));
     mov.push (dd=new Movie("Thani oruvan","AGS Entertainment","PG13"));
     mov.push (ee=new Movie("Ayan","Sun pictures","PG13"));
console.log("RatingPG :",Movie.getPg(mov));



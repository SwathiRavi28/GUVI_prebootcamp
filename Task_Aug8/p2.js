class Circle{
    
    constructor(r,c){
        this.radius=r;
        this.color=c;
        if(this.radius===undefined && this.color===undefined){
            this.radius="Nil"
            this.color="Nil"
        }
        if(this.radius===undefined ){
            this.radius="missing"
            
        }
        if( this.color===undefined){
            
            this.color="missing"
        }
        
        console.log(this.radius+","+this.color);
    }

getRadious(){}
getColor(){}
setRadious(){}
setColor(){}
toString(){}
getArea(){}
}
let c =new Circle();
let a=new Circle(3,5);
let b=new Circle(3);
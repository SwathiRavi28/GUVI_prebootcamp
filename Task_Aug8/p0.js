class A{
	constructor(n)
	{
		this.name = n
	}
	f1() { var name = "dummy";
	console.log(this.name);console.log(name)}// runs in the lexical scope of obj
}
 obj = new A("arun") // {"name":"arun"}
 obj1 = new A("Prakash") //{"name":"Prakash"}


obj.f1()
obj1.f1()

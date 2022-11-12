let _radius=Symbol();
let _depth= new WeakMap();
//creating class 
class circle{
    constructor(r){
        this.r=r;
        //symbol makes _radius private
        //declaration shoukd be outside of the class
        this[_radius]=r;//using symbol
        //using weakmap
        //it will be more efficient in usage og the memory
        //making it private
        _depth.set(this,r);
    }
    draw(){
        console.log("drawing",this);
        //this
        //this refers to the present class
        //in case of independentor this refers to the window
    }
    //static method
    //static is not accessable on the object 
    //it is accessable oly on the class
    static jack(){
           console.log("jack sparrow");
    }
    move()
    {
        console.log("move");
    }
    depth(){
        //getting the _depth value
        console.log(_depth.get(this));
    }
}

    const c=new circle(4);
    console.log(c._depth);
    console.log(c.r);
//inheritance
//circle is a parent class
//triangle is a child class
class triangle extends circle{
    constructor(r){
        super(r);
    }
    shape() 
    {
        console.log("this is triangle");
    }
    move(){
        console.log("move circle");//method overiding
        console.log(super.move());//if we excecute s.move()
    }                        //output is move circle,move
}
const s=new triangle(2);




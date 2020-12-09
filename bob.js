class Bob{
    constructor(x,y,radius){
     var options={
         isStatic:true,
         restitution:0.3,
         friction:0.5,
         density:1.2
     }
     this.radius=radius;
     this.x=x;
     this.y=y;
     this.body=Bodies.circle(this.x,this.y,this.radius/2,options);
     World.add(world,this.body);
    }
    display(){
       var paperpos=this.body.position;
       push();
       translate(paperpos.x,paperpos.y,this.radius) 
       //rectMode(CENTRE);
       strokeWeight(3);
       fill("red");
       ellipse(0,0,this.radius,this.radius)
       
       pop()
    }
}

class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:1,
            friction:0.5,
            density:1.2,
        }
        this.body=Bodies.circle(x,y,10,options)
        World.add(world, this.body);
    }
    display(){
        var paperpos=this.body.position;

        push();
        translate(paperpos.x, paperpos.y);
        ellipse(RADIUS)
        strokeWeight(3);
        fill(255,0,255);
        ellipse(0,0,10,10);
        pop();
        
  
    }
}
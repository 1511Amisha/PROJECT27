class Pendulum{
    constructor(x,y,radius1,radius2){
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body = Bodies.circle(x,y,radius1,radius2,options);
        this.radius1 = radius1
        this.radius2=radius2

        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position

        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        fill("yellow");
       ellipse(0,0,this.radius1,this,radius2);
        pop();

    }
        
     
}

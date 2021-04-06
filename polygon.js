class Polygon{
    constructor(x,y,r){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0

        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x,y,r,options);
        this.image = loadImage("polygon.png");
        World.add(world,this.body);
    }
    display(){
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        var polygonPos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(polygonPos.x, polygonPos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r,this.r);
        pop();
    }

}
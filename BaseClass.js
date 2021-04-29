class BaseClass{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        rotate(angle);
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("brown");
        rect(0,0,this.width,this.height);
        pop();
    }
}
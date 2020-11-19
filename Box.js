class Box {
    constructor(x,y,width,height){
      var abc = {
        'restitution': 0.8,
        'friction': 1,
        'density':1  
         }
        this.body = Bodies.rectangle(x,y,width,height,abc);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
display(x,y,width,height){
    var pos = this.body.position; //nameSpacing
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y)
    rotate(angle);
    fill(255);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("green");
    rect(0,0,this.width,this.height);
    pop();
}

}

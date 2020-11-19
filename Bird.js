class Bird {
    constructor(x,y){
      var abc = {
        'restitution': 0.8,
        'friction': 1,
        'density':1  
         }
        this.body = Bodies.rectangle(x,y,50,50,abc);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);
    }
display(x,y,width,height){
    var pos = this.body.position; //nameSpacing
    var angle = this.body.angle;
    pos.x = mouseX;
    pos.y = mouseY;
    push();
    translate(pos.x,pos.y)
    rotate(angle);
    fill("red");
    rectMode(CENTER);
    strokeWeight(3);
    stroke("blue");
    rect(0,0,this.width,this.height);
    pop();
}

}

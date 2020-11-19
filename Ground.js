class Ground {
    constructor(x,y,width,height){
      var def = {
    isStatic:true
    }
        this.body = Bodies.rectangle(x,y,width,height,def);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
display(x,y,width,height){
    var pos = this.body.position; 
    fill("brown");
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
}

}
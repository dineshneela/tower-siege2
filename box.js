class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visiblity=225
    }
    display(){
      if(this.body.speed<3){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
      }
      else{
        World.remove(world,this.body)
        push();
        this.visiblity=this.visiblity-5
        tint(225,this.visiblity)
        rect(pos.x, pos.y, this.width, this.height);
        pop();
      }
    }
  }
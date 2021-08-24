class Paper {
    constructor(x, y,diameter) {
      var options = {
          'restitution':0.8,
          'friction':1.1,
          'density':1.0
      }
      this.image=loadImage("paper.png")
      this.body = Bodies.circle(x, y, diameter/2, options);
      this.diameter =diameter
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     // ellipseMode(CENTER);
  //stroke("purple")
  //strokeWeight(4)
     // fill(255);
     // ellipse(0, 0, this.diameter,this.diameter);
     imageMode(CENTER)
     image(this.image,0,0,this.diameter,this.diameter)
      pop();
    }
  };
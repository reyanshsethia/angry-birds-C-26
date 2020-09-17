class Log {
    constructor(x, y,h,angle) {
      var options = {
          'restitution':0.8,
          'friction':1.5,
          'density':1.0
      }
      this.body= Bodies.rectangle(x, y, 20,h,options);
      Matter.Body.setAngle(this.body,angle)
      this.width = 20;
      this.height = h;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke ('brown')
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  
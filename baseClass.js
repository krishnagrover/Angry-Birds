class BaseClass {
    constructor(x, y,width,height,angle) {
      var options = {
        'density':1,
        'friction': 1.0,
        'restitution':0.8
      };
      this.width = width;
      this.height = height;
      this.x=x;
      this.y=y;
      this.image=loadImage("Assets/bird.png")
      this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0, 0, this.width, this.height);
      pop();
    };
  };
  
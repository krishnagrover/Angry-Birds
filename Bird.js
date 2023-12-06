class Bird  extends BaseClass{ 
    constructor(x, y) {
      super(x,y,50,50)
      this.image=loadImage("Assets/bird.png")
      this.smokeImage=loadImage("Assets/smoke.png")
      this.trajectory=[]
      this.visible=255
    };
    display(){
    // this.body.position.x=mouseX
    // this.body.position.y=mouseY
    super.display()
    if(this.body.velocity.x>10 && this.body.position.x>200){
      var position=[this.body.position.x,this.body.position.y]
    this.trajectory.push(position)
    }

    for(var i=0;i<this.trajectory.length;i++){
      push()  
      this.visible-=0.5
      tint (255,this.visible)
      image (this.smokeImage,this.trajectory[i][0],this.trajectory[i][1])
      pop()
    }
    }
  };
 
class Mango
 {
    constructor(x, y,radius) {
      var options = {
          isStatic: true,
          'restitution':0,
          'friction':1,
          
      }
      this.body = Bodies.circle(x, y,radius, options);
      this.radius = radius;
      this.mImage = loadImage("images/mango.png") 
      
      World.add(world, this.body)
    }
    display(){
      var pos =this.body.position;
      
      
      //circle(pos.x,pos.y,this.radius);
      imageMode(CENTER)
      image(this.mImage,pos.x,pos.y,this.radius)
    }
  }
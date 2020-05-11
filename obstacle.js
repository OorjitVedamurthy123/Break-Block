class Obstacle extends BaseClass{
  constructor(x,y){
    
    super(x,y,70,70);
    this.image = loadImage("wood.PNG");
    this.Visibility = 255;
  }
  display(){
    if(this.body.speed<4){
      super.display();
      }
      else{
    
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility-5;
        tint(255,this.Visibility);
        image(this.image,this.body.position.x,this.body.position.y,70,70);
        pop();
      }
  }
  score(){
    if(this.Visibility<0 && this.Visibility>-8){
      score = score+10
    }
 
  
  }
  score2(){
    if(this.Visibility<0 && this.Visibility>-8) 
   score = score+20
  }
} 
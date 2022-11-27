class Lvl2InvisGround{
    constructor(x,y,w,h)
    {
      this.xposition=x;    
      this.yPosition=y;
      this.width=w;
      this.height=h;
      this.invisground2 = createSprite(this.xposition,this.yPosition+15,this.width,this.height) 
      this.invisground2.visible = false;
      this.shapeColor = "#f4cbaa";
    }  
    display()
    {
      player.collide(this.invisground2);
    }  
    
  }
  
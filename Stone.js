class Stone extends Baseclass1{
constructor(x,y){
super(x,y,50,50);
this.image=loadImage("sprites/Stone.png");
}
display(){
//this.body.position.x=mouseX;
//this.body.position.y=mouseY;
super.display();
}
};
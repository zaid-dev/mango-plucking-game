class Tree{
    constructor(x,y){
        this.x = this.x;
        this.y = this.y;
        this.dustbinWidth-450;
        this.dustbinHeight=600;
        this.wallThickness-10;

        this.image=loadImage("tree.png");
        this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
        this.leftWallBody=Bodies.rectangle(0, this.y-this.dustbinHeight/2, this.y-this.wallThickness, this.wallThickness,{isStatic:true})
        this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})

        World.add(world, this.bottomBody);
        World.add(world, this.leftWallBody);
        World.add(world, this.rightWallBody);
    }

    display(){
        var posbottom = this.bottomBody.position;
        push()
        translate(posbottom.x, posbottom.y+10);
        fill(255);
        imageMode(CENTER);
        image(this.image, 0, this.dustbinHeight/2, this.dustbinWidth, this.dustbinHeight);
        pop()

    }
}
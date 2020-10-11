class Dustbin{
    constructor(x,y,width,height) {

        var options = {
            isStatic: true
        }

        this.left = Bodies.rectangle(x-80, y+7, 15, 140, options);
        this.sideWidth = 15;
        this.sideHeight = 175;

        this.right=Bodies.rectangle(x+80, y+7, 15, 140, options);
        
        this.bottom=Bodies.rectangle(x, y+85, this.width, this.height, options);
        this.Bwidth = 175;
        this.Bheight = 15;

        this.body=Bodies.rectangle(x, y, this.width, this.height, options);
        this.width = width;
        this.height = height;

        this.image = loadImage("dustbingreen.png");

        World.add(world,this.left);
        World.add(world,this.right);
        World.add(world,this.bottom);
        World.add(world,this.body);
    }
    display() {
        rectMode(CENTER);
        fill("white");
        rect(this.left.position.x, this.left.position.y, this.sideWidth, this.sideHeight);

        rect(this.right.position.x, this.right.position.y, this.sideWidth, this.sideHeight);

        rect(this.bottom.position.x, this.bottom.position.y, this.Bwidth, this.Bheight);

        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
    
}
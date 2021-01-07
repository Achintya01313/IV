function Player() {
    this.x = width/2;
    this.xdirec = 1;
    this.show = function() {
        fill(255);
        rectMode(CENTER);
        rect (this.x ,height-20 ,50 ,20);
    }
    this.move = function(){
        this.x += this.xdirec;
    }
}
function  Bullet(x ,y) {
    this.x = x;
    this.y = y;
    this.r = 4;
    this.toDelete = false;
    this.show = function() {
        fill(250,10,80);
        ellipse (this.x ,this.y ,this.r*2 ,this.r*2);
    }
    this.penetrate = function(){
        this.toDelete = true;
    }
    this.hits = function(flower){
        var d = dist(this.x ,this.y ,flower.x ,flower.y);
        if(d < this.r + flower.r){
            return true;
        } else {
            return false;
        }
    }
    this.move = function(){
        this.y -= 5
    }
}
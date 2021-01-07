var player;
var enemys = [];
var bullets = [];
function setup(){
    createCanvas(600 ,400);
    player = new Player();
    //bullets = new bullets(player.x ,height/2);
    for(var i = 0; i < 6; i++ ){
        enemys[i] = new Enemy(i*80 + 80 ,60);
    }
}
function draw(){
    background(51);    
    for(var i = 0; i < bullets.length; i++ ){
       bullets[i].show();
        bullets[i].move();
        for(var j = 0; j < enemys.length; j++ ){
            if(bullets[i].hits(enemys[j])){
                enemys[j].shrink();
                bullets[i].penetrate();         
                console.log("kill"+"+10");
        }
      }
    }
    player.show();
     for(var i = 0; i < enemys.length; i++ ){
         enemys[i].show();
         enemys[i].move();

    for(var i = bullets.length-1; i >= 0; i-- ){
        if(bullets[i].toDelete){
            bullets.splice(i ,1);
        }
    }
     keyPressed();
}
function keyPressed(){
    if(keyDown("ctrl")){
        var bullet = new Bullet(player.x ,height-15);
        bullets.push(bullet);
    }
    if(keyCode == RIGHT_ARROW){
        player.move(1);
    } else if(keyCode == LEFT_ARROW){
        player.move(-1);
    } 
}
}
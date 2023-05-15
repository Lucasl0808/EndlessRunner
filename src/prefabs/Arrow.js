class Arrow extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.moveSpeed = 1;
        this.arrowSpawn = true;
        this.parentScene = scene;
    }

    update(){
        this.x -= this.moveSpeed;

        if(this.checkCollision(this.parentScene.run, this)){
            gameOver = true;
        }
        if(this.arrowSpawn && this.x < centerx) {
            // (recursively) call parent scene method from this context
            this.parentScene.addProjectile();
            this.arrowSpawn = false;
        }

        if(this.x <= 0 - this.width){
            this.destroy();
        }
    }

    checkCollision(player, projectile) {
        // simple AABB checking
        if (player.x < projectile.x + projectile.width && 
            player.x + player.width > projectile.x && 
            player.y < projectile.y + projectile.height &&
            player.height + player.y > projectile. y) {
                return true;
        } else {
            return false;
        }
    }
}
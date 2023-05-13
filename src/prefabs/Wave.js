class Wave extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.moveSpeed = 1;
        this.waveSpawn = true;
        this.parentScene = scene;
    }

    update(){
        this.x -= this.moveSpeed;

        if(this.waveSpawn && this.x < centerx) {
            // (recursively) call parent scene method from this context
            this.parentScene.addProjectile();
            this.waveSpawn = false;
        }

        if(this.x <= 0 - this.width){
            this.destroy();
        }
    }
}
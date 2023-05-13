class Arrow extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.moveSpeed = 4;
        
    }

    update(){
        this.x -= this.moveSpeed;

        if(this.x <= 0 - this.width){
            this.destroy();
        }
    }
}
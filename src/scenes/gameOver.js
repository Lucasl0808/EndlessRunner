class gameOverScene extends Phaser.Scene {
    constructor() {
        super("gameOverScene");
    }
    create(){
        this.add.text(centerx-100, centery, 'Game Over!', titleConfig);
        this.add.text(centerx-100, centery + 50, 'Press the R key to restart', textConfig);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyR)){
            gameOver = false;
            this.scene.start("titleScene");
        }
    }
}
class gameOverScene extends Phaser.Scene {
    constructor() {
        super("gameOverScene");
    }
    create(){
        this.add.text(centerx-100, centery, 'Game Over!', titleConfig);
        this.add.text(centerx-100, centery + 50, 'Press the R key to restart', textConfig);
        this.add.text(centerx-100, centery + 100, 'Press the M key to go back to Menu', textConfig);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
        if(score >= best){
            best = score;
        }
        this.add.text(centerx-100, centery + 150, `Current Best Score: ${best}`, textConfig);

    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyM)){
            gameOver = false;
            this.scene.start("titleScene");
        }
        if(Phaser.Input.Keyboard.JustDown(keyR)){
            gameOver = false;
            this.scene.start("playScene");
        }
    }
}
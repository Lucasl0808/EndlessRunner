class creditScene extends Phaser.Scene {
    constructor() {
        super("creditScene");
    }
    create(){
        this.add.text(centerx-100, centery-200, 'Credits!', titleConfig);
        this.add.text(centerx-100, centery - 100, 'https://www.youtube.com/watch?v=3nQNiWdeH2Q', textConfig);
        this.add.text(centerx-100, centery - 50, 'Press the M key to go back to Menu', textConfig);
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);

    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyM)){
            gameOver = false;
            this.scene.start("titleScene");
        }
    }
}
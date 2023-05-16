class creditScene extends Phaser.Scene {
    constructor() {
        super("creditScene");
    }
    create(){
        this.add.text(centerx-100, centery-200, 'Sound Credits!', titleConfig);
        this.add.text(centerx-250, centery - 100, 'bgm - https://www.youtube.com/watch?v=3nQNiWdeH2Q', menuTextConfig);
        this.add.text(centerx-250, centery - 50, 'teleport - https://www.youtube.com/watch?v=rBgJ8D_wDN4', menuTextConfig);
        this.add.text(centerx-250, centery, 'arrow - https://www.youtube.com/watch?v=VuS-cNuBMec', menuTextConfig);
        this.add.text(centerx-250, centery + 50, 'fire - https://www.youtube.com/watch?v=V77xa-SDI-I', menuTextConfig);
        this.add.text(centerx-250, centery + 100, 'water - https://www.youtube.com/watch?v=xHN3zSp6Ggg', menuTextConfig);
        this.add.text(centerx-250, centery + 150, 'All Art Assets are drawn by me', menuTextConfig);
        this.add.text(centerx-100, centery + 200, 'Press the M key to go back to Menu', menuTextConfig);
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);

    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyM)){
            gameOver = false;
            this.scene.start("titleScene");
        }
    }
}
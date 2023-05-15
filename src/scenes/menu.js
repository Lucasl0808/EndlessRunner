class menu extends Phaser.Scene {
    constructor() {
        super("titleScene");
    }

    create(){
        this.add.text(centerx-100, centery, 'Portal Jumpers', titleConfig);
        this.add.text(centerx-100, centery + 50, 'Press the S key to start', textConfig);
        this.add.text(centerx-100, centery + 100, 'Press the C key for Credits', textConfig);

        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);

    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start("playScene");
        }
        if(Phaser.Input.Keyboard.JustDown(keyC)){
            this.scene.start("creditScene");
        }
    }

}
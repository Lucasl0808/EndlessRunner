class menu extends Phaser.Scene {
    constructor() {
        super('titleScene');
    }

    preload(){
        this.load.spritesheet('runner', './assets/runner.png', {frameWidth:64, frameHeight:64});
        this.load.spritesheet('teleport', './assets/teleport.png', {frameWidth: 48, frameHeight: 48});
        this.load.image('bg', './assets/bg.png');
        this.load.spritesheet('arrow', './assets/arrow.png', {frameWidth: 64, frameHeight: 32});
    }
    create() {
        let title1 = this.add.text(centerx - 125, centery - 150, 'Portal Jumpers', titleConfig);

        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

        this.bg = this.add.tileSprite(0,0,700,600,'bg').setOrigin(0,0);

        this.anims.create({
            key: "running",
            frameRate: 8,
            frames: this.anims.generateFrameNumbers("runner", { start: 0, end: 2 }),
            repeat: -1
        });

        this.anims.create({
            key: "teleport",
            frameRate: 20,
            frames: this.anims.generateFrameNumbers("teleport", {start:0, end:2}),
        });

        this.anims.create({
            key: "arrow",
            frameRate: 4,
            frames: this.anims.generateFrameNumbers("arrow", { start: 0, end: 1 }),
            repeat: -1
        });

        this.arrow = this.add.sprite(600, 250, 'arrow');
        this.arrow.play('arrow');

        this.run = this.add.sprite(100, 100,'runner');
        this.run.play('running');

        
    }
    update(){
        if(Phaser.Input.Keyboard.JustDown(keyUP) || Phaser.Input.Keyboard.JustDown(keyDOWN)){
            this.tp = this.add.sprite(this.run.x, this.run.y, 'teleport');
            this.tp.play('teleport');
            this.tp.on('animationcomplete', ()=>{
                this.tp.destroy();
            });
        }
        this.bg.tilePositionX += 2;
    }



}
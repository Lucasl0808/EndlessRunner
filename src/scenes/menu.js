class menu extends Phaser.Scene {
    constructor() {
        super("titleScene");
    }
    preload(){
        this.load.audio('bgm', './assets/bgm.mp3');
        this.load.audio('p2', './assets/arrowSound.mp3');
        this.load.audio('p1', './assets/water.mp3');
        this.load.audio('p3', './assets/fireSound.mp3');

        this.load.audio('tele', './assets/teleport.mp3');
        this.load.spritesheet('runner', './assets/runner.png', {frameWidth:35, frameHeight:64});
        this.load.spritesheet('teleport', './assets/teleport.png', {frameWidth: 48, frameHeight: 48});
        this.load.image('bg', './assets/bg.png');
        this.load.spritesheet('arrow', './assets/arrow.png', {frameWidth: 64, frameHeight: 32});
        //this.load.image('arrow', './assets/arrow.png');
        this.load.spritesheet('fireball', './assets/fireball.png', {frameWidth:64, frameHeight:64});
        this.load.spritesheet('wave', './assets/wave.png', {frameWidth:64, frameHeight:128});
    }

    create(){

        this.anims.create({
            key: "teleport",
            frameRate: 25,
            frames: this.anims.generateFrameNumbers("teleport", {start:0, end:2}),
        });

        this.add.text(centerx-150, centery-150, 'Portal Jumpers', titleConfig);
        this.add.text(centerx-150, centery + 50, 'Press the S key to start', menuTextConfig);
        this.add.text(centerx-150, centery + 100, 'Press the C key for Credits', menuTextConfig);
        this.runner = this.add.sprite(centerx - 150, centery - 50, 'runner');
        this.add.sprite(centerx - 75, centery - 50, 'fireball');
        this.add.sprite(centerx +25, centery - 100, 'wave');
        this.add.sprite(centerx + 120, centery - 50, 'arrow');

        this.time.addEvent({delay: 3000, callback: this.animate, callbackScope: this, loop: true});

        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        this.curr = 1;
        tele = this.sound.add('tele');

    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start("playScene");
        }
        if(Phaser.Input.Keyboard.JustDown(keyC)){
            this.scene.start("creditScene");
        }
    }

    animate(){
        if(this.curr % 2 == 1){
            this.runner.x += 400
            this.tp = this.add.sprite(this.runner.x, this.runner.y, 'teleport');
            this.tp.play('teleport');
            tele.play({volume:0.1});
            this.tp.on('animationcomplete', ()=>{
                this.tp.destroy();
            });
            this.curr += 1;
        }
        else{
            this.runner.x -= 400;
            this.tp = this.add.sprite(this.runner.x, this.runner.y, 'teleport');
            this.tp.play('teleport');
            tele.play({volume:0.1});
            this.tp.on('animationcomplete', ()=>{
                this.tp.destroy();
            });
            this.curr += 1;
        }
        
    }

}
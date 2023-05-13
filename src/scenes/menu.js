class menu extends Phaser.Scene {
    constructor() {
        super('titleScene');
    }

    preload(){
        this.load.spritesheet('runner', './assets/runner.png', {frameWidth:64, frameHeight:64});
        this.load.spritesheet('teleport', './assets/teleport.png', {frameWidth: 48, frameHeight: 48});
        this.load.image('bg', './assets/bg.png');
        this.load.spritesheet('arrow', './assets/arrow.png', {frameWidth: 64, frameHeight: 32});
        //this.load.image('arrow', './assets/arrow.png');
        this.load.spritesheet('fireball', './assets/fireball.png', {frameWidth:64, frameHeight:64});
        this.load.spritesheet('wave', './assets/wave.png', {frameWidth:64, frameHeight:128});
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
            frameRate: 25,
            frames: this.anims.generateFrameNumbers("teleport", {start:0, end:2}),
        });

        this.anims.create({
            key: "arrow",
            frameRate: 4,
            frames: this.anims.generateFrameNumbers("arrow", { start: 0, end: 1 }),
            repeat: -1
        });

        this.anims.create({
            key: "fireball",
            frameRate: 10,
            frames: this.anims.generateFrameNumbers("fireball", { start: 0, end: 3 }),
            repeat: -1
        });

        this.anims.create({
            key: "wave",
            frameRate: 1,
            frames: this.anims.generateFrameNumbers("wave", { start: 0, end: 2 }),
        });

        this.arrow = new Arrow(this, 600, 300, 'arrow');//this.add.sprite(600, 300, 'arrow');
        this.arrow.play('arrow');

        this.run = this.add.sprite(100, 120,'runner');
        this.run.play('running');

        this.fire = this.add.sprite(600, 500, 'fireball');
        this.fire.play('fireball');

        this.wave = this.add.sprite(600, 90, 'wave');
        this.wave.play('wave');

        this.tutorial = this.add.text(centerx, centery - 50, 'Press Up arrow and Down arrow to move your character and avoid the projectiles!', textConfig).setOrigin(0.5);
        
        this.newProj1 = false;
        this.newProj2 = false;

        this.instructions = this.time.delayedCall(7000, ()=>{
            this.tutorial.destroy();
            this.newProj1 = true;
            this.newProj2 = true;
        }, null, this)
        this.gameOver = false;
    }
    update(){

        if(!this.gameOver){
            this.arrow.update();
        }
        if(Phaser.Input.Keyboard.JustDown(keyUP) && (this.run.y - 200) > 0){
            this.tp = this.add.sprite(this.run.x, this.run.y, 'teleport');
            this.tp.play('teleport');

            this.run.y -= 200;

            this.tp.on('animationcomplete', ()=>{
                this.tp.destroy();
            });
        }
        if(Phaser.Input.Keyboard.JustDown(keyDOWN) && (this.run.y + 200) < 600){
            this.tp = this.add.sprite(this.run.x, this.run.y, 'teleport');
            this.tp.play('teleport');

            this.run.y += 200;

            this.tp.on('animationcomplete', ()=>{
                this.tp.destroy();
            });
        }
        this.bg.tilePositionX += 2;

        //1, 4, 11 = wave
        //2,5, 10 = arrow
        //3, 6, 12 = fireball
        let proj1 = Phaser.Math.Between(1,3);
        let proj2;
        if(proj1 == 1){
            proj2 == Phaser.Math.Between(5,6); // if wave, choose either fire or arrow
            if(proj2 == 5){
                //wave and arrow - call prefab functions to spawn them in

            }
            else{
                //wave and fire
            }
        }
        if(proj1 == 2){
            proj2 == Phaser.Math.Between(11,12);//if arrow, choose either fire or wave
            if(proj2 == 11){
                //arrow and wave
            }
            else{
                //arrow and fire
            }
        }
        if(proj1 == 3){
            proj2 == Phaser.Math.Between(4,5);//if fire, choose either arrow or wave
            if(proj2 == 4){
                //fire and wave
            }
            else{
                //fire and arrow
            }
        }
    }



}
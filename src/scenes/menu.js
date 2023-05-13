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

        //this.arrow = new Arrow(this, 600, 300, 'arrow');//this.add.sprite(600, 300, 'arrow');
        //this.arrow.play('arrow');
        
        this.run = this.add.sprite(100, 120,'runner');
        this.run.play('running');

        //this.fire = this.add.sprite(600, 500, 'fireball');
        //this.fire.play('fireball');

        //this.wave = this.add.sprite(600, 90, 'wave');
        //this.wave.play('wave');

        this.tutorial = this.add.text(centerx, centery - 50, 'Press Up arrow and Down arrow to move your character and avoid the projectiles!', textConfig).setOrigin(0.5);
        
        this.newProj = false;

        this.instructions = this.time.delayedCall(7000, ()=>{
            this.tutorial.destroy();
            this.newProj = true;
            this.addProjectile();
        }, null, this)
        this.gameOver = false;

        this.arrowGroup = this.add.group({
            runChildUpdate: true
        });
        this.waveGroup = this.add.group({
            runChildUpdate: true
        });
        this.fireGroup = this.add.group({
            runChildUpdate: true
        });
    }
    update(){

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

        //1 = water
        //2 = arrow
        //3 = fire

        /*
        let proj1 = Phaser.Math.Between(1,3);
        if(proj1 == 1 && this.newProj == true){
            //arrow and fire
            //this.arrow = new Arrow(this, 600, 300, 'arrow');
            //this.arrow.play('arrow');
            this.addArrow();
        }
        if(proj1 == 2 && this.newProj == true){
            //water and fire
        }
        if(proj1 == 3 && this.newProj == true){
            //arrow and water
            this.addArrow();
            
        }
        */
    }


    //change to "addProjectile" where it will decide what projectiles to add 
    addProjectile(){
        let proj1 = Phaser.Math.Between(1,3);
        if(proj1 == 1){
            let wave = new Wave(this, 650, 90, 'wave', 0);
            wave.play('wave');   
            this.waveGroup.add(wave);
        }
        if(proj1 == 2){
            let arrow = new Arrow(this, 650, 300, 'arrow', 0);
            arrow.play('arrow');   
            this.arrowGroup.add(arrow);
        }
        if(proj1 == 3){
            let arrow = new Arrow(this, 650, 300, 'arrow', 0);
            arrow.play('arrow');   
            this.arrowGroup.add(arrow);
        }
    }

}
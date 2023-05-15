class play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }

    preload(){
        this.load.spritesheet('runner', './assets/runner.png', {frameWidth:35, frameHeight:64});
        this.load.spritesheet('teleport', './assets/teleport.png', {frameWidth: 48, frameHeight: 48});
        this.load.image('bg', './assets/bg.png');
        this.load.spritesheet('arrow', './assets/arrow.png', {frameWidth: 64, frameHeight: 32});
        //this.load.image('arrow', './assets/arrow.png');
        this.load.spritesheet('fireball', './assets/fireball.png', {frameWidth:64, frameHeight:64});
        this.load.spritesheet('wave', './assets/wave.png', {frameWidth:64, frameHeight:128});
    }
    create() {
        score = 0;
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
        
        this.run = this.add.sprite(100, 120,'runner');
        this.run.play('running');

        this.tutorial = this.add.text(centerx, centery - 50, 'Press Up arrow and Down arrow to move your character and avoid the projectiles!', textConfig).setOrigin(0.5);
        
        this.newProj = false;

        this.tracker = this.add.text(centerx, centery - 250, `Score: ${score}`, textConfig);

        this.instructions = this.time.delayedCall(7000, ()=>{
            this.tutorial.destroy();
            this.newProj = true;
            this.addProjectile();
            this.time.addEvent({delay: 1000, callback: this.clock, callbackScope: this, loop: true});
            this.time.addEvent({delay: 10000, callback: this.faster, callbackScope: this, loop: true});

        }, null, this)

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

        if(gameOver == true){
            this.scene.start("gameOverScene");
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

        this.tracker.setText(`Score: ${score}`);
    }


    //change to "addProjectile" where it will decide what projectiles to add 
    addProjectile(){
        let proj1 = Phaser.Math.Between(1,3);
        if(proj1 == 1){
            let wave = new Wave(this, 650, 90, 'wave', 0,projSpeed);
            wave.play('wave');   
            this.waveGroup.add(wave);
        }
        if(proj1 == 2){
            let arrow = new Arrow(this, 650, 300, 'arrow', 0,projSpeed);
            arrow.play('arrow');   
            this.arrowGroup.add(arrow);
        }
        if(proj1 == 3){
            let fire = new Fire(this, 650, 520, 'fireball', 0,projSpeed);
            fire.play('fireball');   
            this.fireGroup.add(fire);
        }
    }

    checkCollision(player, projectile) {
        // simple AABB checking
        if (player.x < projectile.x + projectile.width && 
            player.x + player.width > projectile.x && 
            player.y < projectile.y + projectile.height &&
            player.height + player.y > projectile. y) {
                return true;
        } else {
            return false;
        }
    }

    clock(){
        score += 1;
    }
    faster(){
        if(projSpeed < 15){
        projSpeed += 1;
        }
    }
}
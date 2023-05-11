class play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }

    create(){
        this.add.text(centerx,centery,'Playing!', titleConfig);
    }
}
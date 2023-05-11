let config = {
    type: Phaser.AUTO,
    width: 700,
    height: 600,
    backgroundColor: '#FFFFFF',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [menu,play]
}

let game = new Phaser.Game(config);
let keyDOWN, keyUP;

let centerx = game.config.width/2;
let centery = game.config.height/2;

let titleConfig = {
    fontFamily: 'Impact',
    fontSize: '40px',
    //backgroundColor: '#FFFFFF',
    color: '#1BB9E8',
    align: 'right',
    padding: {
        top: 5,
        bottom: 5,
    },
    fixedWidth: 0
}

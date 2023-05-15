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
    
    scene: [menu,play,gameOverScene,creditScene]
}

let game = new Phaser.Game(config);
let keyDOWN, keyUP, keyR, keyS, keyM, keyC;

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

let textConfig = {
    fontFamily: 'Impact',
    fontSize: '20px',
    //backgroundColor: '#FFFFFF',
    color: '#1BB9E8',
    align: 'right',
    padding: {
        top: 5,
        bottom: 5,
    },
    fixedWidth: 0
}

let easyConfig = {
    fontFamily: 'Impact',
    fontSize: '20px',
    //backgroundColor: '#FFFFFF',
    color: '#09C628',
    align: 'right',
    padding: {
        top: 5,
        bottom: 5,
    },
    fixedWidth: 0
}

let mediumConfig = {
    fontFamily: 'Impact',
    fontSize: '20px',
    //backgroundColor: '#FFFFFF',
    color: '#CDD60B',
    align: 'right',
    padding: {
        top: 5,
        bottom: 5,
    },
    fixedWidth: 0
}
let hardConfig = {
    fontFamily: 'Impact',
    fontSize: '20px',
    //backgroundColor: '#FFFFFF',
    color: '',
    align: 'right',
    padding: {
        top: 5,
        bottom: 5,
    },
    fixedWidth: 0
}

let gameOver = false;
let best = 0;
let score = 0;
let projSpeed = 1;
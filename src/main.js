/*
Name: Lucas Lee
Game title: Portal Jumpers
Time Spent: 25 Hours

For my technically interesting thing, I tried to make a system where projectiles would be fired randomly and each one of them being a different kind of projectile.
This was somewhat similar to the paddleParkour, but I made sure to create a different projectile and use the Math.between() function in a different way in order to
determine which projectile would be fired.

My visual style is unique in the sense that I drew all of the art assets on my own (this was a lot of work since I did it on a trackpad :( ) I'm particularly proud of the fireball animation
that I drew since it was hard to draw up that idea from scratch. I tried to create a project that reflected an idea that I had where a player would be able to jump to different 
"scenes" or areas using teleportation and somehow came up with this theme of teleporting to dodge projectiles from 3 different places. I had a fun time making a difficulty scale
using color schemes and text at the top of the game, as it gets harder, the game will let you know that you've made it to a harder part of the game!
*/

let config = {
    type: Phaser.AUTO,
    width: 700,
    height: 600,
    backgroundColor: '#12E885',
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

let bgm, tele, p1,p2,p3;

let titleConfig = {
    fontFamily: 'Impact',
    fontSize: '40px',
    //backgroundColor: '#FFFFFF',
    color: '#1249E8',
    align: 'right',
    padding: {
        top: 5,
        bottom: 5,
    },
    fixedWidth: 0
}

let gameOverConfig = {
    fontFamily: 'Impact',
    fontSize: '80px',
    //backgroundColor: '#FFFFFF',
    color: '#1249E8',
    align: 'right',
    padding: {
        top: 5,
        bottom: 5,
    },
    fixedWidth: 0
}

let menuTextConfig = {
    fontFamily: 'Impact',
    fontSize: '20px',
    //backgroundColor: '#FFFFFF',
    color: '#AD38E9',
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
    color: '#F1310B',
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
let scrollSpeed = 2;
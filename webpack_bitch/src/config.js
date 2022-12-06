import {Level_1 } from './levels/Level_1.js'; 
import {Level_2 } from './levels/Level_2.js';
export const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene:[Level_1,Level_2]
};

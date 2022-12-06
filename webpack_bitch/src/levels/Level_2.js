export class Level_2 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'Level 2', active: true });
    }

    preload ()
    {
       // this.load.image('rick', 'assets/pics/guard-rick.png');
    }

    create ()
    {
        this.add.image(750, 600, 'rick').setOrigin(1);
    }
    update(){
    
    }
}

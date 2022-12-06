 var   cursors;
 var   platforms;
  var  player;
export class Level_1 extends Phaser.Scene {


    constructor ()
    {
        super({ key: 'Level 1', active: true });
    }

    preload ()
    {
        this.load.image('fon', './assets/fon.png');
        this.load.image('platform', './assets/platform.png');
        this.load.spritesheet('dude', 
        'assets/dude.png',
        { frameWidth: 32, frameHeight: 48 }
        );
        cursors = this.input.keyboard.createCursorKeys();
    }

    create ()
    {

        this.add.image(400, 300, 'fon');

        platforms = this.physics.add.staticGroup();
        platforms.create(400, 650, 'platform').setScale(1).refreshBody();
        platforms.create(600, 490, 'platform').setScale(0.5).refreshBody();
        platforms.create(50, 320, 'platform').setScale(0.5).refreshBody();
        platforms.create(610, 220, 'platform').setScale(0.5).refreshBody(); 
        



        player = this.physics.add.sprite(100, 450, 'dude');

        player.setBounce(0.2);
        player.setCollideWorldBounds(true);


        this.physics.add.collider(player, platforms);
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        
        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });
        
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
    }
    update(){
        if (cursors.left.isDown)
        {
            player.setVelocityX(-160);
        
            player.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(160);
        
            player.anims.play('right', true);
        }
        else
        {
            player.setVelocityX(0);
        
            player.anims.play('turn');
        }
        
        if (cursors.up.isDown && player.body.touching.down)
        {
            
            player.setVelocityY(-330);
        }
        // console.log(player.x,player.y)
        //784 159
	//this.setActiveScene('Level_2');
    }
}

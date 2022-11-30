let pravo= true

var config = {
    type: Phaser.AUTO,
    width: 400,
    height: 300,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
var isRight = false;


var game = new Phaser.Game(config);

function preload() {
    this.load.spritesheet("nlo", "./animation/NLO.png", { frameWidth: 36, frameHeight: 30 })
    this.load.image("Run", "./animation/Run.png")
    this.load.image("povoska", "./img/povoska.png")
    this.load.image("ground", "./img/Ground.png")
    this.load.spritesheet("Walk", "./animation/Walk.png", { frameWidth: 36, frameHeight: 30 })
    this.load.image("Fon", "./animation/bg/5269948.jpeg");
    this.load.spritesheet("Fox", "./animation/fox.png",{ frameWidth: 410, frameHeight: 464 })



}

function create() {

    this.add.image(200, 300, 'Fon');


    //nlo = this.physics.add.sprite(100, 450, 'nlo').setScale(0.5);
    
    
  //  Fox = this.physics.add.sprite(100, 450, 'Fox').setScale(0.15);

    player = this.physics.add.sprite(100, 450, 'Walk');
    platforms = this.physics.add.staticGroup();
    platforms.create(200, 520, 'ground').setScale(0.5).refreshBody();
    platforms.create(425, 460, 'povoska').setScale(0.05).refreshBody();
    
    
    nps=this.physics.add.staticGroup();
    fox=nps.create(100, 420, 'Fox').setScale(0.15);


    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    


    this.physics.add.collider(player, platforms);
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('Walk', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [{ key: 'Walk', frame: 4 }],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('Walk', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'nlo',
        frames: this.anims.generateFrameNumbers('Fox', { start: 0, end: 6 }),
        frameRate: 4,
        repeat: -1
    })
        

    this.anims.create({
        key: 'Fox1',
        frames: this.anims.generateFrameNumbers('Fox', { start: 0, end: 6 }),
        frameRate: 4,
        repeat: -1
    });
    nlo = this.physics.add.sprite(100, 450, 'nlo').setScale(0.5);

    cursors = this.input.keyboard.createCursorKeys();
    this.cameras.main.setBounds(0, 0, 400 * 1.5, 450*1.17)

    this.physics.world.setBounds(0, 0, 400 * 1.5, 450 * 2)
    this.cameras.main.startFollow(player, true, 2, 2)
}

function update() {

    if(fox.x==99 || fox.x==300){
        pravo=!pravo

    }
    fox.x=(pravo)?fox.x+1:fox.x-1;
    fox.scaleX = (pravo) ? 0.15:-0.15;
    fox.anims.play('Fox1', true);
    if (cursors.left.isDown) {
        player.setVelocityX(-160);

        player.anims.play('left', true);
        isRight = false;
    }
    else if (cursors.right.isDown) {
        player.setVelocityX(160);
        player.anims.play('right', true);
        isRight = true;
    }
    else {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-200);
    }
    player.scaleX = (isRight) ? -1 : 1;

}

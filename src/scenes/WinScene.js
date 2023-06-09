class WinScene extends Phaser.Scene {
    constructor() {
        super('WinScene');
    }

    preload() {
        this.load.image('escapetext','./assets/escape.png');
    }

    create() {
        this.add.image(400,300, 'escapetext');
        this.add.text(275, 400, 'Press R to restart', { fontSize: '24px', fill: '#fff' });

        this.input.keyboard.on('keydown-R', () => {
            this.scene.start('ChessGameScene');
        });
    }
}

export default WinScene;

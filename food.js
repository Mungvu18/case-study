class Food {
    constructor(game) {
        this.game = game;
        this.x = 20;
        this.y = 20;
        this.grid = 20;
    }

    display() {
        this.x = (Math.floor(Math.random() * 19)) * this.grid;
        this.y = (Math.floor(Math.random() * 19)) * this.grid;
    }

    draw() {
        this.game.context.fillStyle = "red";
        this.game.context.fillRect(this.x, this.y, this.grid, this.grid);
    }
}
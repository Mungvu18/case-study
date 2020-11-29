class ManaGame {
    constructor() {
        this.canvas = null;
        this.context = null;
        this.init();
        this.loop();
    }
    // ham khoi tao the canvas
    init() {
        this.canvas = document.createElement('canvas');// tao 1 bang phuong thuc createElement the canvas
        this.context = this.canvas.getContext('2d');// tao khung the 2d
        this.canvas.width = 400;
        this.canvas.height = 400;
        document.body.appendChild(this.canvas); // dua canvas vao khung body;
        this.snake = new Snake(this);
        this.food = new Food(this);
    }
    // vong lap de ve va hien thi
    loop() {
        this.display();
        this.draw();
        setTimeout(()=>this.loop(), 200)

    }
    // ham hien thi
    display() {
        this.snake.display();
        if (this.snake.eat(this.food.x,this.food.y)) {
            this.food.display();
        }
    }
    // ham ve
    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.snake.draw();
        this.food.draw();

    }
}

let game = new ManaGame();
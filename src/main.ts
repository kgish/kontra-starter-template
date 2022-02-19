import {
    init,
    Sprite,
    GameLoop
} from 'kontra';

const { canvas } = init();

const sprite = Sprite({
    x: canvas.width / 2 - 10,
    y: canvas.height / 2 - 10,
    color: 'red',
    width: 20,
    height: 10,
    dx: 2
});

const update = () => {
    sprite.update();

    if (sprite.x > canvas.width) {
        sprite.x = -sprite.width;
    }
};

const render = () => {
    sprite.render();
};

GameLoop({
    update,
    render
}).start();


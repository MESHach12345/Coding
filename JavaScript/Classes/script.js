class Player {
    score = 0;
    pause() {
        console.log("You Paused the Game");
    };
    quit() {
        console.log("You Quit the Game");
    }
}

const player = new Player();

console.log(player.score);
console.log(player.pause());
console.log(player.quit());
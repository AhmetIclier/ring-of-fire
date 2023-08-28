export class Game {
    public players: string[] = ['Hans', 'Peter', 'Claus', ];
    public stack: string[] = [];
    public playedCards: string[]= [];
    public currentPlayer: number = 0;

    constructor() {
        for (let i = 1; i<14; i++) {
            this.stack.push(i + '_of_clubs');
            this.stack.push(i + '_of_diamonds');
            this.stack.push(i + '_of_hearts');
            this.stack.push(i + '_of_spades');
        }
        shuffle(this.stack);
    }
}

function shuffle(arr: any[]) {
    let currentIndex = arr.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex], arr[currentIndex]];
    }
    return arr;
}
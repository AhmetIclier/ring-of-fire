export class Game {
    public players: string[] = [];
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
    }
}
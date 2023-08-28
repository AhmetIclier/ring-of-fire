import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Game } from 'src/models/game';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit{
  pickCardAnimation = false;
  currentCard: string = '';
  game!: Game;
  name: string = '';

  constructor(public dialog: MatDialog) {
  };

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }
  
  takeCard() {
    if (this.game.stack.length > 0 && !this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop()!;
      console.log(this.currentCard);
      this.pickCardAnimation = true;
      

      setTimeout(() => {
        this.pickCardAnimation = false;
        this.game.playedCards.push(this.currentCard);
      }, 1000);
    } else {
      console.log("Stack is empty");
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      console.log('The dialog was closed', name);
      this.game.players.push(name);
    });
  }
}
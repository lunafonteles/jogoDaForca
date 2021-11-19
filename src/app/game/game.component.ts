import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  words: string[] = ['bobo', 'legal', 'lindo', 'arredores', 'paralelepipedo', 'aleatorio', 'carro', 'engracado', 'escola', 'casamento'];
  sortedWord: string = "";
  letter: string = "";
  anonymous: string[]= [];
  message: string = "";
  try: number = 0;
  maxTry: number = 6;

  constructor() { }

  ngOnInit(): void {
    this.sortWord();
    this.anonymousWord();
  }

  sortWord() {
    var i: number = Math.round(Math.random()*10);
    this.sortedWord = this.words[i];
    console.log(this.sortedWord);
    return this.sortedWord;
  }

  enter() {
    if(this.sortedWord.includes(this.letter)) {
      this.correctLetter();
      this.message = "";
        } else {
          this.message = "Errou a letra, tente novamente";
          this.try++;
      }
    }

  anonymousWord() {
      var spaces: number = this.sortedWord.length;
      for (var i=0; i<spaces; i++) {
        this.anonymous = [...this.anonymous, "_"];
      }
      console.log(this.anonymous);
        return this.anonymous;
  }

  correctLetter() {
    var spaces: number = this.sortedWord.length;
    for (var i=0; i<spaces; i++) {
      if(this.letter == this.sortedWord[i]) {   
        this.anonymous[i] = this.letter;
      }
    } 
  }

  maxError(task:any) {
      this.letter = task.value;
    if(this.try <= this.maxTry) {
      this.enter();
  } else {
    this.message = "Maximo de tentativas excedidas";
  }

}
}

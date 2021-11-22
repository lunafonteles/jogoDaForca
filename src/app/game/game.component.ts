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
  anonymous2: string= '';
  message: string = "";
  try: number = 0;
  maxTry: number = 6;

  constructor() { }

  ngOnInit(): void {
    this.sortWord();
    this.getAnonymousWord();
  }

  sortWord() {
    var i: number = Math.round(Math.random()*10);
    this.sortedWord = this.words[i];
    console.log(this.sortedWord);
    return this.sortedWord;
  }

  enter(task:string) {
    this.letter = task;
    if(!this.checkTries ()) return; 
    
    if(this.sortedWord.includes(this.letter)) {
      this.updateAnonymous();
      this.message = "";
        } else {
          this.message = "Errou a letra, tente novamente";
          this.try++;
      }
    }

  getAnonymousWord() {
    var spaces: number = this.sortedWord.length;
    for (var i=0; i<spaces; i++) {
      this.anonymous = [...this.anonymous, "_"];
    }
    this.anonymous2 = this.anonymous.join(' ');
  }

  updateAnonymous() {
    var spaces: number = this.sortedWord.length;
    for (var i=0; i<spaces; i++) {
      if(this.letter == this.sortedWord[i]) {   
        this.anonymous[i] = this.letter;
      }
      this.anonymous2 = this.anonymous.join(' ');
    } 
  }

  checkTries() {
    if(this.try <= this.maxTry) {
      return true;
  } else {
    this.message = "Maximo de tentativas excedidas";
    return false;
  }
}
}

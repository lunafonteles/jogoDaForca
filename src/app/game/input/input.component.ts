import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit {

  @Output() onSubmit = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  execute(prop: string): void {
    this.onSubmit.emit(prop);
  }
  
}

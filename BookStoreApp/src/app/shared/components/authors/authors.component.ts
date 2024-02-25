import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css',
})
export class AuthorsComponent {
  @Input()
  set data(value: number) {
    this._data = value + 1;
  }
  get data() {
    return this._data;
  }
  @Output() myData = new EventEmitter<string>();
  private _data!: number;
  btnClick(): void {
    this.myData.emit('Child component data');
  }
}

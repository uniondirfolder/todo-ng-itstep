import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.title === '') { alert('Title todo is empty!'); return; }
    const todo = {
      title: this.title,
      completed: false
    }

    this.addTodo.emit(todo);
  }

}

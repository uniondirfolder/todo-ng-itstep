import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() todo: Todo = new Todo();
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() filter: EventEmitter<boolean> = new EventEmitter();

  

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

 
  setItems() {
    let items = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return items;
  }

  onToggle(todo: Todo) {
    
    todo.completed = !todo.completed;
    
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

  onDelete(todo: Todo) {
    this.deleteTodo.emit(todo);
  }

  onTrue(value: boolean){
    this.filter.emit(value)
  }
  onFalse(value: boolean){
    this.filter.emit(value)
  }
}

import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  todos:Todo[]=[];

  constructor(private todoService:TodoService) { }


  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  
  deleteTodo(todo: Todo) {
    
    this.todos = this.todos.filter(t => t.id !== todo.id);
    
    this.todoService.deleteTodo(todo).subscribe();
  }

  
  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  todos: Todo [];
  todoTitle: string;
  todoid: number;
  beforeEditCache: string;

  constructor() { }

  ngOnInit(): void {
    this.beforeEditCache = '';
    this.todoTitle = '';
    this.todoid = 2;
    this.todos = [
      {
        id : 1,
        title: 'Finish angular to do app',
        completed : false,
        editing : false
      },
      {
        id : 2,
        title: 'Do groceries',
        completed : false,
        editing : false
      },
      {
        id : 3,
        title: 'learn new programming language',
        completed : false,
        editing : false
      }
    ]
  }

  addTodo(){

    if(this.todoTitle.trim().length === 0){
      return;
    }



    this.todos.push({
      id : this.todoid,
      title:this.todoTitle,
      completed : false,
      editing : false

    });
    this.todoTitle = '';
    this.todoid++;
    console.log(this.todoTitle);

  }

  removeTodo(todoid){
    this.todos = this.todos.filter(todo => todo.id !== todoid);
  
  }

  editTodo(todo:Todo){
    this.beforeEditCache = todo.title;
    todo.editing = true;
  }
  doneEditing(todo:Todo){
    if(todo.title.trim().length === 0){
      todo.title = this.beforeEditCache;
    }
    todo.editing = false;
  }
  cancelEditing(todo:Todo){
    todo.title = this.beforeEditCache;
    todo.editing = false;
  }

  remainingTodo():number{
    return this.todos.filter(t => !t.completed).length;

  }
  atLeastOneCompleted():boolean{
    return this.todos.filter(t => t.completed).length > 0;

  }
  clearcompleted(){
    this.todos = this.todos.filter(t => !t.completed);
  }
  

}

interface Todo {
  id:number,
  title:string,
  completed:boolean,
  editing:boolean
}

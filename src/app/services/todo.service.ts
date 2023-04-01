import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo, TodoHistory } from '../models';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly todos = new BehaviorSubject<Todo[]>([]);
  readonly todos$ = this.todos.asObservable();

  private readonly todosHistory = new BehaviorSubject<TodoHistory[]>([]);
  readonly todosHistory$ = this.todosHistory.asObservable();

  add(description: string) {
    const todo: Todo = { id: +new Date(), description, status: 'UNDONE' };
    this.todos.next([...this.todos.value, todo]);
    this.createHistoryEvent(todo.id, `New todo "${todo.description}" added!`);
    this.updateTodosInStorage();
  }

  remove(todo: Todo) {
    let todos = [...this.todos.value];

    this.todos.next([...todos.filter(item => item.id !== todo.id)]);
    this.updateTodosInStorage();

    this.createHistoryEvent(
      todo.id,
      `Removed "${todo.description}" from todos!`
    );
  }

  toggle(todo: Todo) {
    const todos = [...this.todos.value];
    const todoIndex = todos.findIndex((t) => t.id === todo.id);

    todos[todoIndex].status =
      todos[todoIndex].status === 'DONE' ? 'UNDONE' : 'DONE';

    this.todos.next([...todos]);

    this.createHistoryEvent(
      todo.id,
      `Marked "${todo.description}" as ${todo.status}`
    );
    this.updateTodosInStorage();
  }

  createHistoryEvent(id: number, event: string) {
    this.todosHistory.next([
      ...this.todosHistory.value,
      {
        timestamp: new Date(id),
        event,
      },
    ]);
  }

  updateTodosInStorage() {
    const todos = this.todos.value;
    const history = this.todosHistory.value;

    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('history', JSON.stringify(history));
  }

  initializeStore() {
    const localTodos = localStorage.getItem('todos');
    const localHistory = localStorage.getItem('history');

    this.todos.next(localTodos ? JSON.parse(localTodos) : []);
    this.todosHistory.next(localHistory ? JSON.parse(localHistory) : []);
  }
}

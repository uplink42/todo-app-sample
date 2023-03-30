import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit
} from "@angular/core";
import { Todo } from "./models";
import { TodoService } from "./services/todo.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  todoService = inject(TodoService);

  todos$ = this.todoService.todos$;

  // take the history items and reverse their order so the most recent one is at the top
  // also we use the slice array method to only take the first 10 items
  latestHistory$ = this.todoService.todosHistory$
    .pipe(map((history) => history.reverse()))
    .pipe(map((history) => history.slice(0, 10)));

  ngOnInit() {
    this.todoService.initializeStore();
  }

  addTodo(todo: string) {
    this.todoService.add(todo);
  }

  toggleStatus(todo: Todo) {
    this.todoService.toggle(todo);
  }
}

import {
  Component,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "app-new-todo",
  templateUrl: "./new-todo.component.html",
  styleUrls: ["./new-todo.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewTodoComponent {
  todo = "";

  @Output() addTodo = new EventEmitter<string>();

  createTodo() {
    this.addTodo.emit(this.todo);
    this.todo = "";
  }
}

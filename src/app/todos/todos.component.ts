import {
  Component,
  Input,
  Output,
  EventEmitter,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Todo } from '../models';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosComponent {
  @Input() todos!: Todo[];

  @Output() toggleStatus = new EventEmitter<Todo>();

  dialog = inject(MatDialog);
  matSnackBar = inject(MatSnackBar);

  confirmDelete(todo: Todo) {
    this.dialog
      .open(DialogComponent, {
        data: todo,
      })
      .afterClosed()
      .subscribe((success) => {
        if (success) {
          this.matSnackBar.open('Todo deleted!', undefined, { duration: 200000, panelClass: "snackbar-remove-todo" });
        }
      });
  }
}

import {
  Component,
  Inject,
  ChangeDetectionStrategy,
  inject,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Todo } from 'src/app/models';
import { TodoService } from 'src/app/services/todo.service';

/**
 * This is simply the template for the confirmation dialog.
 */
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  todoService = inject(TodoService);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Todo,
    private ref: MatDialogRef<DialogComponent>
  ) {}

  close(shouldDelete: boolean) {
    this.ref.close('prc');

    if (shouldDelete) {
      this.todoService.remove(this.data);
    }
  }
}

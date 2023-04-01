import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { Todo } from '../models';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusComponent {
  @Input() todos!: Todo[];

  _numOfDoneTodos = 0;

  get numOfDoneTodos() {
    return this.todos.filter((todo) => todo.status === 'DONE').length;
  }
}

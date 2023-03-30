import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Todo } from "../models";

@Component({
  selector: "app-status",
  templateUrl: "./status.component.html",
  styleUrls: ["./status.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusComponent {
  @Input() todos!: Todo[];
}

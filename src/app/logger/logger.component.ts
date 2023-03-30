import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { TodoHistory } from "../models";

@Component({
  selector: "app-logger",
  templateUrl: "./logger.component.html",
  styleUrls: ["./logger.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoggerComponent {
  @Input() history!: TodoHistory[];
}

import { Component, Inject, ChangeDetectionStrategy } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Todo } from "src/app/models";

/**
 * This is simply the template for the confirmation dialog.
 */
@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Todo,
    private ref: MatDialogRef<DialogComponent>
  ) {}

  close(option: boolean) {
    this.ref.close(option);
  }
}

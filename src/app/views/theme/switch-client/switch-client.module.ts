import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SwitchClientComponent } from "./switch-client.component";
import { MatIconModule } from "@angular/material";
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";
@NgModule({
  declarations: [SwitchClientComponent],
  exports: [SwitchClientComponent],
  imports: [CommonModule, MatIconModule, NgbDropdownModule]
})
export class SwitchClientModule {}

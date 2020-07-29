import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InfoBarComponent } from "./info-bar.component";
import { MatIconModule } from "@angular/material";
@NgModule({
  declarations: [InfoBarComponent],
  exports: [InfoBarComponent],
  imports: [CommonModule, MatIconModule]
})
export class InfoBarModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { KpisComponent } from "./kpis.component";
import { EditKpiComponent } from './edit/edit-kpi.component';
import { MatDialogModule, MatIconModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [KpisComponent, EditKpiComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    DragDropModule,
    MatIconModule,
    RouterModule.forChild([
      {
        path: "",
        component: KpisComponent
      }
    ])
  ],
  entryComponents: [
    EditKpiComponent
  ],
})
export class KpisModule {}

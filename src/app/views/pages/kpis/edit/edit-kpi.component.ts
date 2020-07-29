import { Component, ViewEncapsulation } from "@angular/core";
import { MatDialogRef } from "@angular/material";

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: "edit-kpi-dialog",
  templateUrl: "./edit-kpi.component.html",
  styleUrls: ["./edit-kpi.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class EditKpiComponent {

  searchVisible:boolean;



  activeItems = [
    { title: '10', sub_title: 'I/100km',description: 'Energy Consumption'},
    { title: '10', sub_title: 'kWh',description: 'per 100 km'},
    { title: '5:35', sub_title: 'h',description: 'since ignition Autonomous mode'},
    { title: '1054', sub_title: 'h',description: 'in total Autonomous mode'},
    { title: '55', sub_title: 'km',description: 'since ignition Autonomous mode'},
    { title: '1054', sub_title: 'km',description: 'in total Autonomous mode'},

  ];

  inActiveItems = [
    { title: '1484', sub_title: '',description: 'Vehicles availible'},
    { title: '10', sub_title: 'kWh',description: 'per 100 km Recuperated Energy'},
    { title: '10', sub_title: 'h',description: 'without alarm'}
  ];



  constructor(public dialogRef: MatDialogRef<EditKpiComponent>) {}



  ngOnInit() {
    this.searchVisible = false;
  }




  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  closeDialog() {
    this.dialogRef.close("Result");
  }
}

import { Component, OnInit } from "@angular/core";

import { MatDialog } from "@angular/material";

import { EditKpiComponent } from "./edit/edit-kpi.component";

@Component({
  selector: "kt-kpis",
  templateUrl: "./kpis.component.html",
  styleUrls: ["./kpis.component.scss"]
})
export class KpisComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog() {
    var options = {
      placement: "center",
      width: "90vw",
      height: "80vh",
      panelClass: "edit-kpi-dialog-container"
    };

    const dialogRef = this.dialog.open(EditKpiComponent, options);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

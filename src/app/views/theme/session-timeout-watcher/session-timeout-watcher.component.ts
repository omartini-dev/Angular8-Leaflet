import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import { MatDialogRef } from "@angular/material";
@Component({
  selector: "kt-session-timeout-watcher",
  templateUrl: "./session-timeout-watcher.component.html",
  styleUrls: ["./session-timeout-watcher.component.scss"]
})
export class SessionTimeoutWatcherComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<SessionTimeoutWatcherComponent>) {}

  ngOnInit() {}
}

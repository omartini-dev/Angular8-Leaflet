import { Component, OnInit } from "@angular/core";

@Component({
  selector: "kt-switch-client",
  templateUrl: "./switch-client.component.html",
  styleUrls: ["./switch-client.component.scss"]
})
export class SwitchClientComponent implements OnInit {
  constructor() {}

  clients = [
    {
      id: "1",
      name: "ZF Friedrichshafen"
    },
    {
      id: "2",
      name: "ZF Openmatics"
    },
    {
      id: "3",
      name: "Sample Company"
    }
  ];

  currentClientId = this.clients[0].id;

  selectClient(clientId: string) {
    this.currentClientId = clientId;
  }
  ngOnInit() {}
}

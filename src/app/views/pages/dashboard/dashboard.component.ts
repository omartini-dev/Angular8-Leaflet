// Angular
import { Component, OnInit } from "@angular/core";
// Lodash
import { shuffle } from "lodash";
// Services
// Widgets model
import {
  LayoutConfigService,
  SparklineChartOptions
} from "../../../core/_base/layout";
import { Widget4Data } from "../../partials/content/widgets/widget4/widget4.component";
import { NgcCookieConsentService } from "ngx-cookieconsent";

@Component({
  selector: "kt-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}

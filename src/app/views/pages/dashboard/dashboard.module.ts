// Angular
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
// Core Module
import { CoreModule } from "../../../core/core.module";
import { PartialsModule } from "../../partials/partials.module";
import { DashboardComponent } from "./dashboard.component";
import { NgcCookieConsentModule } from "ngx-cookieconsent";

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    CoreModule,
    NgcCookieConsentModule,
    RouterModule.forChild([
      {
        path: "",
        component: DashboardComponent
      }
    ])
  ],
  providers: [],
  declarations: [DashboardComponent]
})
export class DashboardModule {}

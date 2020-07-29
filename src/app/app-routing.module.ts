// Angular
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// Components
import { BaseComponent } from "./views/theme/base/base.component";
import { ErrorPageComponent } from "./views/theme/content/error-page/error-page.component";
// Auth
import { AuthGuard } from "./core/auth";
import { MapComponent } from './views/pages/map/map.component';
import { VehiclesinfoComponent } from './views/pages/vehiclesinfo/vehiclesinfo.component';
const routes: Routes = [
  {
    path: "auth",
    loadChildren: () =>
      import("./views/pages/auth/auth.module").then(m => m.AuthModule)
  },

  {
    path: "",
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("./views/pages/dashboard/dashboard.module").then(
            m => m.DashboardModule
          )
      },
      {
        path: "map",
        component: MapComponent
      },
      {
        path: "vehicles",
        component: VehiclesinfoComponent
      },
      {
        path: "contact",
        loadChildren: () =>
          import("./views/pages/contact/contact.module").then(
            m => m.ContactModule
          )
      },
      {
        path: "kpis",
        loadChildren: () =>
          import("./views/pages/kpis/kpis.module").then(
            m => m.KpisModule
          )
      },
      {
        path: "imprint",
        loadChildren: () =>
          import("./views/pages/imprint/imprint.module").then(
            m => m.ImprintModule
          )
      },
      {
        path: "error/403",
        component: ErrorPageComponent,
        data: {
          type: "error-v6",
          code: 403,
          title: "403... Access forbidden",
          desc:
            "Looks like you don't have permission to access for requested page.<br> Please, contact administrator"
        }
      },
      { path: "error/:type", component: ErrorPageComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "**", redirectTo: "dashboard", pathMatch: "full" }
    ]
  },

  { path: "**", redirectTo: "error/403", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

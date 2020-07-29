// Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
// Partials
import { PartialsModule } from "../partials/partials.module";
// Pages
import { CoreModule } from "../../core/core.module";
import { MyPageComponent } from "./my-page/my-page.component";
import { MapComponent } from './map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster';
import {MatSlideToggleModule, MatCheckboxModule} from '@angular/material';
import { VehiclesinfoComponent } from './vehiclesinfo/vehiclesinfo.component';
import { VinfopanelComponent } from './vinfopanel/vinfopanel.component';
import { VdetailComponent } from './vdetail/vdetail.component';
@NgModule({
  declarations: [MyPageComponent, MapComponent, VehiclesinfoComponent, VinfopanelComponent, VdetailComponent],
  exports: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
    PartialsModule,
    LeafletModule,
    LeafletMarkerClusterModule,
    MatSlideToggleModule, MatCheckboxModule,
  ],
  providers: []
})
export class PagesModule {}

import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// RxJS
import { Observable, Subscriber } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { MarkerItemModel } from '../models/datatable-item.model';
const API_DATATABLE_URL = 'api/cars';
@Injectable({
	providedIn: 'root'
})
export class MapService {
	constructor(private http: HttpClient) { }
	// getMarkers(): Observable<MarkerItemModel[]> {
	// 	return this.http.get<MarkerItemModel[]>(API_DATATABLE_URL);
	// }
	generateLat() { return 57.72 + Math.random() * 0.03; }
	generateLon() { return 11.92 + Math.random() * 0.03; }
	@Output() markerChange: EventEmitter<any> = new EventEmitter();
	getMarkers() {
		let markers : MarkerItemModel[]=[];
		for(let i=0;i<5;i++){
			markers.push({
				id: i,
				lat: this.generateLat(),
				lng: this.generateLon(),
				type: 'type1',
				title: 'Vehicle AB-1234-'+i,
				fuel: '73%',
				time: '15',
				next_repair: '08th August 2020',
				conn_mode: 'Bluetooth',
				drive_mode: 'Automatic',
				passenger: '56/100'
			});
		}
		return markers;
	}
	getMarkersInfo(){
		// this.markerChange.emit();
		setInterval(function(){
			this.markerChange.emit();
		}.bind(this), 10000);
	}
}

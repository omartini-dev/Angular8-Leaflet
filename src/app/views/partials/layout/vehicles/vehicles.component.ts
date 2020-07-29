import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { trigger, transition, state, animate, style } from '@angular/animations';
import {Vehicle} from "../../../../../api/gener8ed/fleetmonitoring-api";
@Component({
	selector: 'kt-vehicles',
	templateUrl: './vehicles.component.html',
	styleUrls: ['./vehicles.component.scss'],
	animations: [
		trigger('childAnimation', [
			state('open', style({
				marginLeft: '0',
			})),
			state('closed', style({
				marginLeft: '-360px',
			})),
			transition('* => *', [
				animate('.5s')
			]),
		]),
	],
})
export class VehiclesComponent implements OnInit {
	@Input() fleet: Boolean = false;
	@Output() selectVehicle = new EventEmitter<any>();
	vehicle_arr:Vehicle[] = [];
	isOpen = false;
	searchFlag = false;
	filterFlag = false;
	filterVal = {
		'orderby':'',
		'fleet':'all',
		'search':'',
		'filter':null
	}
	constructor() { }

	ngOnInit() {
		
	}
	toggle() {
		this.isOpen = !this.isOpen;
	}
	toggleSearch() {
		this.searchFlag = !this.searchFlag;
	}
	toggleFilter() {
		this.filterFlag = !this.filterFlag;
	}
	resetSearch(){
		this.filterVal.search = ''
	}
}

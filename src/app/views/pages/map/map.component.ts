import { Component, OnInit, NgZone, Input } from '@angular/core';
import { trigger, transition, state, animate, style } from '@angular/animations';
import { MapService } from '../../../core/_base/layout/services/map.service';
import { MarkerItemModel } from '../../../core/_base/layout/models/datatable-item.model';
import * as L from 'leaflet';
import 'leaflet-rotatedmarker';
import 'leaflet.markercluster';
import 'leaflet-routing-machine';
declare var $: any;
import { from } from 'rxjs';
const iconRetinaUrl = 'assets/media/icons/stop.svg';
const iconUrl = 'assets/media/icons/stop.svg';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [56, 64],
  iconAnchor: [28, 60],
  shadowSize: [41, 41]
});
//mapbox token:sk.eyJ1IjoibWlsb3M3NyIsImEiOiJjazdsZmJwaGcwNzloM21vM3dqbzlzejRkIn0.FDW3AfVH5FEuT_jEWA6msQ
L.Marker.prototype.options.icon = iconDefault;
@Component({
	selector: 'kt-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss'],
	animations: [
		trigger('childAnimation', [
			state('open', style({
				width: '322px',
				height: '379px',
			})),
			state('closed', style({
				width: '40px',
				height:'40px',
				padding:'0px',
				backgroundColor: 'white'
			})),
			transition('* => *', [
				animate('.3s')
			]),
		]),
	],
})
export class MapComponent implements OnInit {
	map = null;
	isOpen = false;
	markerClusterGroup: L.MarkerClusterGroup;
	markerClusterData: L.marker[] = [];
	markerClusterOptions: L.MarkerClusterGroupOptions;
	planedRouteCtrl = null;
	takenRouteCtrl = null;
	planedRouteFlag = false;
	takenRouteFlag = false;
	LAYER_OSM = {
		id: 'openstreetmap',
		name: 'Open Street Map',
		enabled: false,
		layer: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: ''
		})
	};

	// Values to bind to Leaflet Directive
	layersControlOptions = { position: 'bottomright'};
	baseLayers = {
		'Open Street Map': this.LAYER_OSM.layer
	};
	active = false;
	activeLayer:any;
	layers:any=[];
	options = {
		zoom: 13,
		center: L.latLng([ 57.74, 11.94 ]),
	};
	@Input() routerFlag:boolean;
	constructor(private zone: NgZone,
		private mapService : MapService) {}
	
	ngOnInit() {
		console.log(this.routerFlag);
		this.activeLayer = L.marker([ 57.74, 11.94 ], {
			icon: L.divIcon({
				className: 'text-labels',
				html: '<span></span>'
			}),
			zIndexOffset: 1
		});
		this.active = true;
		this.mapService.getMarkersInfo();
		this.mapService.markerChange.subscribe(()=>{
			this.markerClusterData = this.generateData();
			$("#test").click();
		});
	}
	
	markerClusterReady(group: L.MarkerClusterGroup) {
		this.markerClusterGroup = group;
	}
	refreshData(): void {
		this.markerClusterData = this.generateData();
	}
	addMarkerToMap(event){
		if(this.activeLayer){
			this.activeLayer.removeFrom(this.map);
			this.activeLayer = null;
		}
		this.activeLayer = L.marker([ event.latlng.lat, event.latlng.lng ], {
			icon: L.divIcon({
				className: 'text-labels', 
				html: '<div class="outring"><div class="inring">&nbsp;</div></div>'
			}),
			zIndexOffset: 1
		}).addTo(this.map);
	}
	generateData(): L.marker[] {
		const data: L.marker[] = [];
		var img = new Image();

		var angle = 0;
		let prevLat = 0;
		let prevLon = 0;
		let markers:MarkerItemModel[] = this.mapService.getMarkers();
		for (let i = 0; i < markers.length; i++) {
			let curLat =markers[i].lat;
			let curLon = markers[i].lng;
			const blueicon = L.icon({
				iconRetinaUrl:'assets/media/icons/car2.svg',
				iconUrl:'assets/media/icons/car2.svg',
				iconSize: [30, 64],
				iconAnchor: [15, 32],
				popupAnchor: [0, 110],
				shadowSize: [41, 41],
			});
			angle = this.getAngle({'lat':prevLat, 'lon':prevLon}, {'lat':curLat, 'lon':curLon});
			let tmp = L.marker([ curLat, curLon], {icon:blueicon,rotationAngle: angle});
			tmp.bindPopup(this.generateDesc());
			tmp.on("click", this.addMarkerToMap.bind(this))

			tmp.on("remove", ($event)=>{
				if(this.activeLayer && this.activeLayer._latlng.lat==$event.target._latlng.lat && this.activeLayer._latlng.lng==$event.target._latlng.lng){
					if(this.activeLayer){
						this.activeLayer.removeFrom(this.map);
						this.activeLayer = null;
					}
				}
			});
			data.push(tmp);
			
			prevLat = curLat;
			prevLon = curLon;
		}
		return data;
	}
	onMapReady(map: L.Map) {
		this.map = map;
		this.map.zoomControl.setPosition('bottomright');
	}
	showPlanedRoute(){
		this.planedRouteCtrl = L.Routing.control({
			waypoints: [
				L.latLng(57.76, 11.930),
				L.latLng(57.73, 11.932)
			],
			routeWhileDragging: false,
			showAlternatives: false,
			fitSelectedRoutes:false,
			show: false,
			lineOptions : {
				styles: [
					{color: '#00ABE7', opacity: 1, weight: 8},
				],
				addWaypoints: false
			},
			router: L.Routing.mapbox('sk.eyJ1IjoibWlsb3M3NyIsImEiOiJjazdsZmJwaGcwNzloM21vM3dqbzlzejRkIn0.FDW3AfVH5FEuT_jEWA6msQ')
		}).addTo(this.map);
		this.planedRouteCtrl._container.style.display = "None";
	}
	showTakenRoute(){
		this.takenRouteCtrl = L.Routing.control({
			waypoints: [
				L.latLng(57.73, 11.932),
				L.latLng(57.7192, 11.94)
			],
			routeWhileDragging: false,
			showAlternatives: false,
			fitSelectedRoutes:false,
			show: false,
			lineOptions : {
				styles: [
					{color: '#0070B4', opacity: 1, weight: 8},
				],
				addWaypoints: false
			},
			router: L.Routing.mapbox('sk.eyJ1IjoibWlsb3M3NyIsImEiOiJjazdsZmJwaGcwNzloM21vM3dqbzlzejRkIn0.FDW3AfVH5FEuT_jEWA6msQ')
		}).addTo(this.map);
		this.takenRouteCtrl._container.style.display = "None";
	}
	changePlanedRoute(){
		if(this.planedRouteFlag){
			this.showPlanedRoute()
		} else {
			// this.routeCtrl.removeFrom(this.map);
			this.planedRouteCtrl.spliceWaypoints(0,2);
			this.map.removeControl(this.planedRouteCtrl);
			this.planedRouteCtrl = null;
		}
	}
	changeTakenRoute(){
		if(this.takenRouteFlag){
			this.showTakenRoute()
		} else {
			// this.routeCtrl.removeFrom(this.map);
			this.takenRouteCtrl.spliceWaypoints(0,2);
			this.map.removeControl(this.takenRouteCtrl);
			this.takenRouteCtrl = null;
		}
	}
	getAngle(A:any, B:any){
		var angle = null;
		var latA = A.lat;
		var lonA = A.lon;
		var latB = B.lat;
		var lonB = B.lon;

		if(lonA == lonB && latA>latB ){
			angle = Math.PI;
		}
		else if(lonA == lonB && latA < latB ){
			angle = 0	;
		}
		else if(lonA > lonB && latA == latB ){
			angle = -(Math.PI/2);
		}
		else if(lonA < lonB && latA == latB ){
			angle = Math.PI/2	;
		}
		else{
			var x1 = A.lat*Math.pow(10,12);
			var x2 = B.lat*Math.pow(10,12);
			var y1 = A.lon*Math.pow(10,12);
			var y2 = B.lon*Math.pow(10,12);
			angle = Math.atan2(y1-y2,x1-x2)
		}
		return Math.round(angle*180+90);
	}
	toggle() {
		this.isOpen = !this.isOpen;
	}
	generateDesc(){
		return `
			<div class="popup-content">
				<h5>Vehicle AB-1234-102 <img src="assets/media/icons/pulse_yellow.svg" class="header-icon"></h5>
				<div class="nav-info"><span class="icon-a_fuel-state"></span> 73% | <span class="icon-a_autonomous-driving"></span>Autonomous driving <span class="time-info">15 min ago</span></div>
				<hr>
				<div class="row main-info">
					<div class="col-6">
						<div>Next maintenance</div>
						<div>Connectivity mode</div>
						<div>Driving Mode</div>
						<div>Passengers</div>
					</div>
					<div class="col-6 info-content">
						<div>08th August 2020</div>
						<div>Bluetooth</div>
						<div>Automatic</div>
						<div>56/100</div>
					</div>
				</div>
			</div>`;
	}
}

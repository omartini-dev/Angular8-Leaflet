export class DataTableItemModel {
	id: number;
	cModel: string;
	cManufacture: string;
	cModelYear: number;
	cMileage: number;
	cDescription: string;
	cColor: string;
	cPrice: number;
	cCondition: number;
	cStatus: number;
	cVINCode: string;
}
export class MarkerItemModel {
	id: number;
	lat: number;
	lng: number;
	type: string;
	title: string;
	fuel: string;
	time: string;
	next_repair: string;
	conn_mode: string;
	drive_mode: string;
	passenger: string;
}
export class CommonMarkerModel {
	id: number;
	lat: number;
	lng: number;
	type: string;
}
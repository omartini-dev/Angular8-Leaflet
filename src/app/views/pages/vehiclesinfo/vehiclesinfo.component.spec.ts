import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesinfoComponent } from './vehiclesinfo.component';

describe('VehiclesinfoComponent', () => {
  let component: VehiclesinfoComponent;
  let fixture: ComponentFixture<VehiclesinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclesinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

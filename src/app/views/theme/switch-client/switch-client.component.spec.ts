import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SwitchClientComponent } from "./switch-client.component";

describe("SwitchClientComponent", () => {
  let component: SwitchClientComponent;
  let fixture: ComponentFixture<SwitchClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchClientComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

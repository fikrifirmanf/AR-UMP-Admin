import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiroTravelTableComponent } from './biro-travel-table.component';

describe('BiroTravelTableComponent', () => {
  let component: BiroTravelTableComponent;
  let fixture: ComponentFixture<BiroTravelTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiroTravelTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiroTravelTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

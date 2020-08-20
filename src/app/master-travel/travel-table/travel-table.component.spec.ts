import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelTableComponent } from './travel-table.component';

describe('TravelTableComponent', () => {
  let component: TravelTableComponent;
  let fixture: ComponentFixture<TravelTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

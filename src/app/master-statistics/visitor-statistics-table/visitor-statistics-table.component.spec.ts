import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorStatisticsTableComponent } from './visitor-statistics-table.component';

describe('VisitorStatisticsTableComponent', () => {
  let component: VisitorStatisticsTableComponent;
  let fixture: ComponentFixture<VisitorStatisticsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorStatisticsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorStatisticsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaksiTravelAddFormComponent } from './transaksi-travel-add-form.component';

describe('TransaksiTravelAddFormComponent', () => {
  let component: TransaksiTravelAddFormComponent;
  let fixture: ComponentFixture<TransaksiTravelAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaksiTravelAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaksiTravelAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAddFormComponent } from './users-add-form.component';

describe('UsersAddFormComponent', () => {
  let component: UsersAddFormComponent;
  let fixture: ComponentFixture<UsersAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersBusComponent } from './users-bus.component';

describe('UsersBusComponent', () => {
  let component: UsersBusComponent;
  let fixture: ComponentFixture<UsersBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

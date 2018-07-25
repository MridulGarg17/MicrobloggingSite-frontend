import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolloweesComponent } from './followees.component';

describe('FolloweesComponent', () => {
  let component: FolloweesComponent;
  let fixture: ComponentFixture<FolloweesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolloweesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolloweesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

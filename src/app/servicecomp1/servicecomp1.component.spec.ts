import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicecomp1Component } from './servicecomp1.component';

describe('Servicecomp1Component', () => {
  let component: Servicecomp1Component;
  let fixture: ComponentFixture<Servicecomp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Servicecomp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Servicecomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

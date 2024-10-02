import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicecomp2Component } from './servicecomp2.component';

describe('Servicecomp2Component', () => {
  let component: Servicecomp2Component;
  let fixture: ComponentFixture<Servicecomp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Servicecomp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Servicecomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
